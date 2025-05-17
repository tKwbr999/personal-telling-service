'use client'
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

export default function AppraisalButton({ appraisalType }) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAppraisalSubmit = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appraisalType,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const { sessionId } = await response.json()
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      console.error('Failed to redirect to payment screen:', err)
      setError('An error occurred during payment processing. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleAppraisalSubmit}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {loading ? 'Processing...' : 'Get Appraisal'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}
