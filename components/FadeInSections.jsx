'use client'

import { useEffect } from 'react'

// Watches all .fade-in-section elements and adds the 'visible' class
// when they scroll into view, triggering the CSS fade-in animation.
export default function FadeInSections() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in-section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    faders.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
