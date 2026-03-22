import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Wrapped In His Love',
  description: 'Hand-knit scarves with personalized scripture-based affirmation cards. Wrapped in prayer and love.',
  openGraph: {
    type: 'website',
    url: 'https://wrappedinhislove.com/',
    title: 'Wrapped In His Love',
    description: 'Hand-knit scarves with personalized scripture-based affirmation cards. Wrapped in prayer and love.',
    images: [{ url: 'https://wrappedinhislove.com/assets/scarf_hanger.jpg', width: 1200 }],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/assets/wihl_logo.png" />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7YMZZ6TC5L"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7YMZZ6TC5L');
        `}</Script>
      </body>
    </html>
  )
}
