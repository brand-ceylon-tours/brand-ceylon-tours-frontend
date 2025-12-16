import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brand Ceylon Tours - Discover Sri Lanka\'s Hidden Gems',
  description: 'Discover Sri Lanka\'s Hidden Gems with Brand Ceylon Tours. Experience the magic of Sri Lanka with our curated tourism packages.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} font-sans`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}



