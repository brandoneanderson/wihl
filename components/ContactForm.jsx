'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <h3 style={{ color: '#4a3c2e', marginTop: '2rem' }}>
        Thank you for reaching out! I will pray over your request and reply soon.
      </h3>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
        style={{ width: '100%', maxWidth: '400px', padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', fontFamily: "'Playfair Display', serif" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={form.email}
        onChange={handleChange}
        style={{ width: '100%', maxWidth: '400px', padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', fontFamily: "'Playfair Display', serif" }}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        value={form.message}
        onChange={handleChange}
        style={{ width: '100%', maxWidth: '400px', padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', minHeight: '120px', fontFamily: "'Playfair Display', serif" }}
      />
      <button
        type="submit"
        className="contact-btn"
        disabled={status === 'loading'}
        style={{ marginTop: '1rem', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'wait' : 'pointer' }}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p style={{ color: '#c0392b', marginTop: '0.5rem' }}>
          Something went wrong. Please try again or reach out on Instagram.
        </p>
      )}
    </form>
  )
}
