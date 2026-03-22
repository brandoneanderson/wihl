'use client'

import { useState } from 'react'

const IMAGES = [
  { src: '/assets/max_laugh.JPG', alt: 'Red Scarf style' },
  { src: '/assets/jose_bible.JPG', alt: 'Blue scarf style' },
  { src: '/assets/couple_pic.JPG', alt: 'Couple Scarf Picture' },
  { src: '/assets/peace_pose.JPG', alt: 'Brown Scarf style' },
  { src: '/assets/personalized_scripture_message.jpeg', alt: 'Personalized scripture message' },
  { src: '/assets/wihl_card.jpeg', alt: 'WIHL Card' },
  { src: '/assets/wihl_happy_customer.jpeg', alt: 'Happy Customer' },
  { src: '/assets/wihl_package.jpeg', alt: 'WIHL Complete Package' },
  { src: '/assets/wihl_packages_multiple.jpeg', alt: 'Multiple Packages' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" style={{ padding: '4rem 0', background: '#fdf1ed' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#4a3c2e', marginBottom: '1.5rem' }}>Gallery</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', color: '#555', fontSize: '1.2rem' }}>
          Discover my collection of handcrafted scarfs, each piece designed with faith and love.
        </p>
        <div
          className="gallery-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}
        >
          {IMAGES.map((img) => (
            <div key={img.src} className="gallery-item">
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-img"
                style={{ width: '100%', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                onClick={() => setLightbox(img)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer',
          }}
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '2.5rem',
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  )
}
