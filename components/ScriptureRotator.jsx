'use client'

import { useState, useEffect, useRef } from 'react'

const SCRIPTURES = [
  '"Let all that you do be done in love." – 1 Corinthians 16:14',
  '"I have loved you with an everlasting love." – Jeremiah 31:3',
  '"She is clothed with strength and dignity." – Proverbs 31:25',
  '"So God created human beings in his own image. In the image of God he created them; male and female he created them." – Genesis 1:27',
  '"You are God\'s masterpiece." – Ephesians 2:10',
  '"You are altogether beautiful, my darling, beautiful in every way." – Song of Solomon 4:7',
  '"He escorts me to the banquet hall; it\'s obvious how much he loves me." – Song of Solomon 2:4',
  '"The joy of the Lord is your strength." – Nehemiah 8:10',
  '"Be still, and know that I am God." – Psalm 46:10',
  '"God is within her, she will not fall." – Psalm 46:5',
  '"And we know that in all things God works for the good of those who love him, who have been called according to his purpose." – Romans 8:28',
  '"But seek first his kingdom and his righteousness, and all these things will be given to you as well." – Matthew 6:33',
  '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." – Jeremiah 29:11',
]

export default function ScriptureRotator() {
  const [displayIdx, setDisplayIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  // idxRef lets interval callbacks always read the latest index without stale closures
  const idxRef = useRef(0)
  const intervalRef = useRef(null)

  const goTo = (newIdx) => {
    setVisible(false)
    setTimeout(() => {
      idxRef.current = newIdx
      setDisplayIdx(newIdx)
      setVisible(true)
    }, 400)
  }

  const next = () => goTo((idxRef.current + 1) % SCRIPTURES.length)
  const prev = () => goTo((idxRef.current - 1 + SCRIPTURES.length) % SCRIPTURES.length)

  const resetInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(next, 5000)
  }

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000)
    return () => clearInterval(intervalRef.current)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      id="scripture-rotator"
      style={{ margin: '0 auto 2.5rem auto', maxWidth: '800px', textAlign: 'center', position: 'relative' }}
    >
      <button
        id="scripture-prev"
        onClick={() => { prev(); resetInterval() }}
        style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '2rem', color: '#c4a484', cursor: 'pointer' }}
      >
        &#8592;
      </button>

      <span
        id="scripture-text"
        style={{
          display: 'inline-block',
          fontSize: '1.3rem',
          color: '#4a3c2e',
          background: '#fbe3db',
          borderRadius: '8px',
          padding: '0.7rem 1.5rem',
          boxShadow: '0 2px 8px rgba(196,164,132,0.07)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.7s',
          verticalAlign: 'middle',
        }}
      >
        {SCRIPTURES[displayIdx]}
      </span>

      <button
        id="scripture-next"
        onClick={() => { next(); resetInterval() }}
        style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '2rem', color: '#c4a484', cursor: 'pointer' }}
      >
        &#8594;
      </button>
    </div>
  )
}
