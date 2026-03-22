'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const toggle = document.getElementById('mobile-menu-toggle')
      const links = document.getElementById('nav-links')
      if (toggle && links && !toggle.contains(e.target) && !links.contains(e.target)) {
        closeMenu()
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  const handleNavClick = (e, href) => {
    closeMenu()
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        window.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' })
      }
    }
  }

  return (
    <nav>
      <a
        href="#home"
        className="logo"
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        onClick={(e) => handleNavClick(e, '#home')}
      >
        <img
          src="/assets/wihl_logo.png"
          alt="WIHL Logo"
          style={{ height: '2.1rem', width: '2.1rem', borderRadius: '50%', objectFit: 'cover' }}
        />
        Wrapped in His Love
      </a>

      <button
        className={`mobile-menu-toggle${menuOpen ? ' active' : ''}`}
        id="mobile-menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links${menuOpen ? ' active' : ''}`} id="nav-links">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
        <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
        <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</a>
        <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Me</a>
        <a href="#contact" className="contact-btn" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
      </div>
    </nav>
  )
}
