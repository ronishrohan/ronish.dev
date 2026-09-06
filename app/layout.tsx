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
          dangerouslySetInnerHTML={{ __html: `(function(){try{var t=${JSON.stringify(themes)};var saved=JSON.parse(localStorage.getItem('theme-palette')||'null');if(Array.isArray(saved)&&saved.length===t.length){t=saved}else{var h=Math.floor(Math.random()*360);var shade=function(l,s){return 'hsl('+h+' '+s+'% '+l+'%)'};var accent='hsl('+h+' 75% 24%)';var darkAccent='hsl('+h+' 70% 24%)';t.forEach(function(c,i){var dark=i>2;var l=[96,97.5,99.5][i]||14;c.bg=dark?shade(i===4?6:14,12):shade(l, i===2?8:12);c.text=dark?shade(91,8):shade(20,8);c.muted=dark?shade(66,8):shade(50,10);c.border=dark?shade(24,8):shade(Math.max(82,l-10),8);c.cardHover=dark?darkAccent:accent;c.accent=dark?darkAccent:accent;c.onAccent='#ffffff';c.onAccentMuted='rgba(255,255,255,0.7)';c.codeBg=dark?shade(i===4?10:20,8):shade(Math.max(91,l-4),8);c.codeBorder=c.border;c.selection=c.accent;c.prose=dark?shade(76,8):shade(30,8);c.postcardBg=dark?shade(i===4?12:22,8):shade(Math.max(88,l-8),8)});localStorage.setItem('theme-palette',JSON.stringify(t))}window.__ronishThemes=t;var i=${DEFAULT_THEME_STEP};var c=t[i];var d=document.documentElement;d.setAttribute('data-theme',c.name);d.setAttribute('data-theme-step',String(i));d.style.setProperty('--theme-slider-fill',(i*25)+'%');d.style.setProperty('--theme-bg',c.bg);d.style.setProperty('--theme-text',c.text);d.style.setProperty('--theme-muted',c.muted);d.style.setProperty('--theme-border',c.border);d.style.setProperty('--theme-card-hover',c.cardHover);d.style.setProperty('--theme-accent',c.accent);d.style.setProperty('--theme-on-accent',c.onAccent);d.style.setProperty('--theme-on-accent-muted',c.onAccentMuted);d.style.setProperty('--theme-code-bg',c.codeBg);d.style.setProperty('--theme-code-border',c.codeBorder);d.style.setProperty('--theme-selection',c.selection);d.style.setProperty('--theme-prose',c.prose);d.style.setProperty('--postcard-bg',c.postcardBg)}catch(e){}})()` }}
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
