import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  // Price in cents — set SCARF_PRICE_CENTS in .env.local (default $35.00)
  const unitAmount = parseInt(process.env.SCARF_PRICE_CENTS || '3500')

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Custom Hand-Knit Scarf',
              description:
                'Hand-knit with prayer and love. Includes a personalized scripture-based affirmation card.',
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // Lets the customer leave color/style notes at checkout
      custom_fields: [
        {
          key: 'scarf_color',
          label: { type: 'custom', custom: 'Preferred scarf color or style' },
          type: 'text',
          optional: true,
        },
      ],
      phone_number_collection: { enabled: true },
      success_url: `${baseUrl}/order-success`,
      cancel_url: `${baseUrl}/#order-now-button`,
    })

    return Response.json({ url: session.url })
  } catch (err) {
    console.error('Stripe error:', err)
    return Response.json({ error: 'Failed to create checkout session.' }, { status: 500 })
  }
}
