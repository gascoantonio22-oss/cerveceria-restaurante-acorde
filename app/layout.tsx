import type { Metadata } from 'next'
import { Playfair_Display, Inter, Caveat } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: '--font-handwriting',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Acorde | Cervecería & Restaurante en Goya, Madrid',
  description: 'Tradición madrileña con alma contemporánea. Cervecería y restaurante en el barrio de Goya, Madrid. Descubre nuestra barra de mármol, cervezas artesanas y tapas de autor.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}>
      <head>
        <link rel="preload" as="image" href="/acorde-logo-principal-transparent.png" />
        <link rel="preload" as="image" href="/acorde-logo-completo.png" />
        <link rel="preload" as="image" href="/acorde-fachada-hola.png" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
