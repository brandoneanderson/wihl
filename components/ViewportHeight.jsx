'use client'

import { useEffect } from 'react'

// Sets the --vh CSS variable to the actual visual viewport height.
// This prevents the mobile hero from jumping when the browser toolbar shows/hides.
export default function ViewportHeight() {
  useEffect(() => {
    function setVh() {
      const height = window.visualViewport ? window.visualViewport.height : window.innerHeight
      document.documentElement.style.setProperty('--vh', height * 0.01 + 'px')
    }
    setVh()
    window.addEventListener('orientationchange', setVh)
    return () => window.removeEventListener('orientationchange', setVh)
  }, [])

  return null
}
