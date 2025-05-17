import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

// 環境変数チェック
if (!STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}
if (!DOMAIN) {
  throw new Error('NEXT_PUBLIC_DOMAIN is not set')
}

const stripe = new Stripe(STRIPE_SECRET_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { appraisalType } = body

    // appraisalTypeのバリデーション
    if (!['standard', 'premium'].includes(appraisalType)) {
      return NextResponse.json({ error: 'Invalid appraisal type' }, { status: 400 })
    }

    // 金額はサーバーで固定
    const prices = {
      standard: 1999,
      premium: 4999,
    }
    const price = prices[appraisalType]

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${appraisalType} Appraisal`,
          },
          unit_amount: price,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN}/cancel`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe session creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create payment session' },
      { status: 500 }
    )
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 })
}
