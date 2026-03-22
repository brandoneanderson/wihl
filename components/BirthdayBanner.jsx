'use client'

import { useEffect } from 'react'

export default function BirthdayBanner() {
  useEffect(() => {
    const now = new Date()
    // April 28 only (month is 0-indexed)
    if (now.getMonth() !== 3 || now.getDate() !== 28) return

    const banner = document.createElement('div')
    banner.className = 'birthday-banner'
    banner.innerHTML =
      '<p class="birthday-banner-title">🎈Happy birthday Daniella Embu!🎈</p>' +
      '<p class="birthday-banner-sub">1 year anniversary of WIHL 🎂</p>'
    document.body.appendChild(banner)

    setTimeout(() => banner.classList.add('birthday-banner-visible'), 100)
    setTimeout(() => {
      banner.classList.remove('birthday-banner-visible')
      setTimeout(() => banner.parentNode?.removeChild(banner), 400)
    }, 6000)

    // Dynamically import canvas-confetti so it doesn't bloat the initial bundle
    import('canvas-confetti').then(({ default: confetti }) => {
      const colors = ['#fbe3db', '#c4a484', '#4a3c2e', '#fdf1ed', '#e8c4b0']
      const end = Date.now() + 4000
      function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors })
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors })
        if (Date.now() < end) requestAnimationFrame(frame)
      }
      frame()
    })
  }, [])

  return null
}
