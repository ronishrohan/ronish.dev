import type { Metadata } from 'next'
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
const defaultDesc =
  "ronish rohan is a design engineer and AI engineer from Bengaluru, India, building agent-native products, interfaces, and orchestration systems."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ronish rohan, engineer',
    template: '%s | ronish',
  },
  description: defaultDesc,
  keywords: [
    'ronish',
    'ronish rohan',
    'developer',
    'designer',
    'design engineer',
    'ai engineer',
    'agent systems',
    'agent orchestration',
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
    title: 'ronish rohan, engineer',
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
  jobTitle: 'Design Engineer and AI Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Agent Orchestrator',
    url: 'https://aoagents.dev',
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
