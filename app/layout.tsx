import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wenze-global.com'),
  title: 'WENZE Power | Reliable Power Transformer Manufacturer & Exporter',
  description: 'Professional power transformer manufacturer serving Southeast Asia, Middle East, Russia and Africa with custom designs for local grid standards.',
  keywords: 'WENZE Power, power transformer manufacturer, transformer supplier China, Southeast Asia transformer, Middle East transformer, Russia transformer, oil immersed transformer, distribution transformer, custom transformer',
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
  openGraph: {
    title: 'WENZE Power | Reliable Power Transformer Manufacturer & Exporter',
    description: 'Professional power transformer manufacturer serving Southeast Asia, Middle East, Russia and Africa.',
    type: 'website',
    url: 'https://www.wenze-global.com',
    siteName: 'WENZE Power',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'WENZE Power - Transformer Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WENZE Power | Reliable Power Transformer Manufacturer',
    description: 'Professional power transformer manufacturer serving Southeast Asia, Middle East, Russia and Africa.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://www.wenze-global.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WENZE Power',
  url: 'https://www.wenze-global.com',
  logo: 'https://www.wenze-global.com/placeholder-logo.svg',
  description: 'Professional power transformer manufacturer serving global markets with custom designs for local grid standards.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+86-159-0534-2475',
    contactType: 'Sales',
    email: 'sales@wenze-global.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CN',
    addressRegion: 'Shandong',
    streetAddress: 'Shandong, China',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
