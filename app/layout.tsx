import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { IBM_Plex_Mono } from 'next/font/google'
import { SiteSound } from '@/components/sound-provider'
import './globals.css'

const openRunde = localFont({
  src: [
    { path: '../public/fonts/OpenRunde-Regular.woff2', weight: '400' },
    { path: '../public/fonts/OpenRunde-Medium.woff2', weight: '500' },
    { path: '../public/fonts/OpenRunde-Semibold.woff2', weight: '600' },
    { path: '../public/fonts/OpenRunde-Bold.woff2', weight: '700' },
  ],
  variable: '--font-open-runde',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-mono',
  display: 'swap',
})

const siteUrl = 'https://ronish.dev'
const defaultDesc =
  "hi, i'm ronish rohan, a 21 year old developer and designer from bengaluru, india. currently a founding engineer at ghost."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ronish rohan — developer & designer',
    template: '%s — ronish',
  },
  description: defaultDesc,
  keywords: [
    'ronish',
    'ronish rohan',
    'developer',
    'designer',
    'bengaluru',
    'bangalore',
    'india',
    'ghost',
    'tryghost.ai',
    'software engineer',
  ],
  authors: [{ name: 'Ronish Rohan', url: siteUrl }],
  creator: 'Ronish Rohan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'ronish rohan — developer & designer',
    description: defaultDesc,
    siteName: 'ronish.dev',
    images: [{ url: '/og.png', width: 1024, height: 576, alt: 'ronish.dev' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ronish1o',
    creator: '@ronish1o',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-192.png', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ronish Rohan',
  alternateName: ['ronish', 'ronish1o'],
  url: siteUrl,
  image: `${siteUrl}/apple-touch-icon.png`,
  sameAs: [
    'https://github.com/ronishrohan',
    'https://x.com/ronish1o',
    'https://instagram.com/ronish1o',
    'https://linkedin.com/in/ronishrohan',
  ],
  jobTitle: 'Founding Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Ghost',
    url: 'https://tryghost.ai',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressCountry: 'India',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openRunde.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteSound>
          {children}
        </SiteSound>
      </body>
    </html>
  )
}
