import { NextResponse } from "next/server"
import Stripe from "stripe"

// In a real app, use environment variables for the Stripe key
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "sk_test_your_stripe_key"
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16",
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { readingType, userId, userEmail, userName } = body

    // Set the price based on the reading type
    let priceInYen
    let readingName

    switch (readingType) {
      case "comprehensive":
        priceInYen = 5000
        readingName = "総合鑑定"
        break
      case "prediction":
        priceInYen = 3000
        readingName = "3年間予測鑑定"
        break
      default:
        return NextResponse.json({ error: "Invalid reading type" }, { status: 400 })
    }

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "jpy",
            product_data: {
              name: readingName,
              description: `${userName}様の${readingName}`,
            },
            unit_amount: priceInYen,
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId: userId,
        readingType: readingType,
      },
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/services`,
      customer_email: userEmail,
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error("Stripe error:", error)
    return NextResponse.json({ error: "An error occurred with the payment process" }, { status: 500 })
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const sessionId = searchParams.get("session_id")

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id parameter" }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return NextResponse.json({ session })
  } catch (error) {
    console.error("Stripe error:", error)
    return NextResponse.json({ error: "An error occurred retrieving the session" }, { status: 500 })
  }
}
