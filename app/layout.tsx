import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { IBM_Plex_Mono } from 'next/font/google'
import { SiteSound } from '@/components/sound-provider'
import { createThemes, DEFAULT_THEME_STEP } from '@/lib/themes'
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

export const dynamic = 'force-dynamic'

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
  const themes = createThemes(Math.floor(Math.random() * 0xffffffff))

  return (
    <html lang="en" className={`${openRunde.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: `(function(){try{var t=${JSON.stringify(themes)};window.__ronishThemes=t;var i=${DEFAULT_THEME_STEP};var c=t[i];var d=document.documentElement;d.setAttribute('data-theme',c.name);d.setAttribute('data-theme-step',String(i));d.style.setProperty('--theme-slider-fill',(i*25)+'%');d.style.setProperty('--theme-bg',c.bg);d.style.setProperty('--theme-text',c.text);d.style.setProperty('--theme-muted',c.muted);d.style.setProperty('--theme-border',c.border);d.style.setProperty('--theme-card-hover',c.cardHover);d.style.setProperty('--theme-accent',c.accent);d.style.setProperty('--theme-on-accent',c.onAccent);d.style.setProperty('--theme-on-accent-muted',c.onAccentMuted);d.style.setProperty('--theme-code-bg',c.codeBg);d.style.setProperty('--theme-code-border',c.codeBorder);d.style.setProperty('--theme-selection',c.selection);d.style.setProperty('--theme-prose',c.prose);d.style.setProperty('--postcard-bg',c.postcardBg)}catch(e){}})()` }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: `(function(){try{var r=JSON.parse(localStorage.getItem('read-posts')||'[]');var d=document.documentElement;if(Array.isArray(r)){r.forEach(function(s){if(typeof s==='string'&&/^[a-z0-9-]+$/i.test(s)){d.style.setProperty('--read-'+s,'var(--theme-muted)')}})}}catch(e){}})()` }}
        />
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
