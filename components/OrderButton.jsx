export default function OrderButton() {
  return (
    <div
      id="order-now-button"
      style={{
        flex: 1,
        minWidth: '160px',
        background: '#3a2e25',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        borderRadius: '0.5rem',
        minHeight: '160px',
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>
        Start Your Custom Scarf
      </h2>
      <p style={{ marginBottom: '1.5rem' }}>Visit the checkout page to get started.</p>
      <a
        href="https://buy.stripe.com/test_dRm9AT6xZ5EP4KA5lbc7u02"
        style={{
          background: '#faf7f4',
          color: '#3a2e25',
          padding: '0.7rem 1.2rem',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: '500',
        }}
      >
        Order Now
      </a>
    </div>
  )
}
