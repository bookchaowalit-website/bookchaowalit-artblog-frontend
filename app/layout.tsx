import type { Metadata } from 'next'
import { Playfair_Display, Space_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const playfair = Playfair_Display({ variable: '--font-playfair', subsets: ['latin'] })
const space = Space_Mono({ variable: '--font-space', weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = { metadataBase: new URL('https://artblog.bookchaowalit.com'), title: 'Creative Arts Knowledge — field notes', description: 'A working index of art, design, photography, and creative practice.' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${playfair.variable} ${space.variable}`}><Header /><div className="min-h-screen"><Analytics /><SpeedInsights />{children}</div><Footer /></body></html>
}
