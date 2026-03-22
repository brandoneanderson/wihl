import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Basic HTML escaping to prevent XSS in the email body
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      // In development, Resend only allows sending to the account owner's email.
      // In production, verify your domain at resend.com and update the 'from' address.
      from: 'WIHL Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New message from ${escapeHtml(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return Response.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
