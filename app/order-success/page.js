export default function OrderSuccess() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fdf1ed',
        flexDirection: 'column',
        gap: '1.5rem',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <h1 style={{ color: '#4a3c2e', fontSize: '2.5rem' }}>Thank You!</h1>
      <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '500px' }}>
        Your order has been received. Daniella will be praying over your scarf and will reach out
        soon with details about your custom piece.
      </p>
      <a
        href="/"
        style={{
          background: '#4a3c2e',
          color: 'white',
          padding: '0.8rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: '500',
        }}
      >
        Back to Home
      </a>
    </div>
  )
}
