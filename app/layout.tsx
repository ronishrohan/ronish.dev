import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import { SiteSound } from '@/components/sound-provider'
import { Butterfly } from '@/components/butterfly'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-mono',
  display: 'swap',
})

const siteUrl = 'https://ronish.dev'
const siteTitle = 'Ronish Rohan, design engineer and AI engineer'
const defaultDesc =
  'Ronish Rohan is a design engineer and AI engineer in Bengaluru, India, building agent-native products, interfaces, and orchestration systems.'
const ogImage = { url: '/og.png', width: 1200, height: 630, alt: 'Ronish Rohan, design engineer and AI engineer' }

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f0f0f0',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Ronish Rohan',
  },
  description: defaultDesc,
  applicationName: 'ronish.dev',
  keywords: [
    'Ronish Rohan',
    'ronish',
    'design engineer',
    'AI engineer',
    'agent-native products',
    'agent orchestration',
    'software engineer',
    'Bengaluru',
    'Bangalore',
    'India',
    'Ghost',
    'Orchestrator Inc',
  ],
  authors: [{ name: 'Ronish Rohan', url: siteUrl }],
  creator: 'Ronish Rohan',
  publisher: 'Ronish Rohan',
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': [{ url: '/feed.xml', title: 'Ronish Rohan, writing' }] },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: siteTitle,
    description: defaultDesc,
    siteName: 'ronish.dev',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ronish',
    creator: '@ronish',
    title: siteTitle,
    description: defaultDesc,
    images: [ogImage.url],
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'ronish.dev',
    description: defaultDesc,
    inLanguage: 'en',
    publisher: { '@id': `${siteUrl}/#person` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: 'Ronish Rohan',
    alternateName: ['ronish', 'ronish1o'],
    url: siteUrl,
    image: `${siteUrl}/apple-touch-icon.png`,
    description: defaultDesc,
    sameAs: [
      'https://github.com/ronishrohan',
      'https://x.com/ronish',
      'https://instagram.com/ronish1o',
      'https://linkedin.com/in/ronishrohan',
    ],
    jobTitle: 'Design Engineer and AI Engineer',
    knowsAbout: ['Design engineering', 'AI engineering', 'Agent orchestration', 'Interface design'],
    worksFor: {
      '@type': 'Organization',
      name: 'Orchestrator Inc',
      url: 'https://orchestrator.inc',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressCountry: 'India',
    },
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: `(function(){try{var r=JSON.parse(localStorage.getItem('read-posts')||'[]');var d=document.documentElement;if(Array.isArray(r)){r.forEach(function(s){if(typeof s==='string'&&/^[a-z0-9-]+$/i.test(s)){d.style.setProperty('--read-'+s,'var(--theme-muted)')}})}}catch(e){}})()` }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Butterfly />
        <SiteSound>
          <div className="flex flex-1 flex-col w-full max-w-4xl">
            {children}
          </div>
        </SiteSound>
      </body>
    </html>
  )
}
