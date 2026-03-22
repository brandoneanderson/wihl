import Nav from '@/components/Nav'
import ScriptureRotator from '@/components/ScriptureRotator'
import OrderButton from '@/components/OrderButton'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'
import BirthdayBanner from '@/components/BirthdayBanner'
import ViewportHeight from '@/components/ViewportHeight'
import FadeInSections from '@/components/FadeInSections'

export default function Home() {
  return (
    <>
      {/* Client-side utilities — render nothing, just run effects */}
      <ViewportHeight />
      <BirthdayBanner />
      <FadeInSections />

      {/* Nav + Hero */}
      <div className="container">
        <Nav />
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Embrace the beauty<br />of His Love through<br />elegant design.</h1>
            <div className="mobile-selling-text">Now selling coasters and headbands!</div>
            <div className="cta-buttons">
              <a href="#order-now-button" className="contact-btn">Order Now</a>
              <a href="#gallery" className="gallery-btn">Gallery</a>
            </div>
          </div>
          <div className="hero-images">
            <div className="image-container">
              <div className="curved-image-main">
                <img src="/assets/scarf_hanger.jpg" alt="Main showcase image" />
              </div>
              <img src="/assets/peace_pose.JPG" alt="Secondary Home Image" className="accent-image" />
              <div className="decorative-line"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section id="services" style={{ background: '#fbe3db', padding: '4rem 0' }}>
        <div className="container fade-in-section" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#4a3c2e', marginBottom: '1.5rem' }}>My Services</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', color: '#555', fontSize: '1.2rem' }}>
            I create hand-knit scarves in any color, each crafted with prayer and care. Every scarf comes
            with a personalized, scripture-based affirmation card, so you or your loved one can experience
            God&apos;s love in a tangible way. I offer custom designs, thoughtful packaging, and shipping
            to wherever you are.
          </p>
          <div className="services-cards" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="service-card" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', width: '300px', flex: '1', minWidth: '280px' }}>
              <h3 style={{ color: '#4a3c2e', marginBottom: '1rem' }}>Custom Knit Scarves</h3>
              <p style={{ color: '#555' }}>Choose your favorite color or style, and I&apos;ll knit a scarf just for you, filled with love and prayer.</p>
            </div>
            <div className="service-card" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', width: '300px', flex: '1', minWidth: '280px' }}>
              <h3 style={{ color: '#4a3c2e', marginBottom: '1rem' }}>Personalized Scripture-Based Affirmation Card</h3>
              <p style={{ color: '#555' }}>Each scarf is packaged with a hand-written, prayed-over message inspired by God&apos;s Word, tailored for you or your recipient for free.</p>
            </div>
            <div className="service-card" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', width: '300px', flex: '1', minWidth: '280px' }}>
              <h3 style={{ color: '#4a3c2e', marginBottom: '1rem' }}>Shipping &amp; Gifting</h3>
              <p style={{ color: '#555' }}>I ship anywhere, and can package your scarf as a heartfelt gift for any occasion.</p>
            </div>
          </div>
          <br />
          <ScriptureRotator />
          <OrderButton />
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* About Section */}
      <section id="about" style={{ background: '#fbe3db', padding: '4rem 0' }}>
        <div className="container fade-in-section" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem' }}>
          <div style={{ flex: '1', minWidth: '260px' }}>
            <img src="/assets/danu_cute_solo.jpg" alt="About Wrapped In His Love" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
          </div>
          <div style={{ flex: '2', minWidth: '260px' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#4a3c2e', marginBottom: '1.5rem' }}>About Me</h2>
            <p style={{ color: '#555', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
              Hi! I&apos;m Daniella Embu, an alumni from St. Olaf College and a therapist, passionate about knitting and sharing God&apos;s love.
            </p>
            <p style={{ color: '#555', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
              A scarf is something that covers you; you wear it close to you. It&apos;s intimate, warm and comfortable.
              When you wear this scarf let it be a comforting reminder of the warmth, closeness, security and safety
              of God&apos;s love to you. You are wrapped in God&apos;s love because his banner over you is love. He holds
              you in his loving arms, and he knit and wove you together perfectly as his masterpiece and his beautiful
              beloved. Spend time in prayer with him and stay warm and cozy knowing you&apos;re wrapped in prayer and love!
            </p>
            <p style={{ color: '#555', fontSize: '1.1rem' }}>
              Let me help you or someone you love feel wrapped in God&apos;s love—one stitch and one prayer at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '4rem 0', background: '#fdf1ed' }}>
        <div className="container fade-in-section" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#4a3c2e', marginBottom: '1.5rem' }}>Contact Me</h2>
          <p style={{ color: '#555', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Interested in a custom scarf, a special gift, or have a question? I&apos;d love to hear from you!
            Send me a message and I&apos;ll get back to you soon—let&apos;s create something beautiful and meaningful together.
          </p>
          <ContactForm />
          <div style={{ marginTop: '2.5rem', color: '#555' }}>
            <div>
              Instagram:{' '}
              <a
                href="https://instagram.com/wrappedinhislovee"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#4a3c2e', textDecoration: 'underline' }}
              >
                @wrappedinhislovee
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#fbe3db', padding: '2rem 0 1rem 0', textAlign: 'center', color: '#4a3c2e', fontSize: '1rem', letterSpacing: '0.02em' }}>
        <div className="container fade-in-section" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: '1', minWidth: '200px', textAlign: 'left' }}>
            <span style={{ fontWeight: 'bold' }}>Wrapped In His Love</span>
          </div>
          <div style={{ flex: '2', minWidth: '200px', textAlign: 'center' }}>
            &copy; 2026 Brandon Ekow Anderson. All rights reserved.
          </div>
          <div style={{ flex: '1', minWidth: '200px', textAlign: 'right' }}>
            <a href="#home" style={{ color: '#4a3c2e', textDecoration: 'none', fontWeight: '500' }}>Back to top</a>
          </div>
        </div>
      </footer>
    </>
  )
}
