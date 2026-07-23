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
    default: 'ronish rohan developer & designer',
    template: '%s | ronish',
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
    title: 'ronish rohan developer & designer',
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
    <html lang="en" className={`${openRunde.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: `(function(){try{var t=[{bg:'#faf5ee',text:'#3d2e1f',muted:'#8c7a68',border:'#e4d8ca',cardHover:'#ea580c',accent:'#ea580c',codeBg:'#f0e8dc',codeBorder:'#e4d8ca',selection:'#ea580c',prose:'#5c4a38',postcardBg:'#efe6d8'},{bg:'#f5f5f4',text:'#1c1917',muted:'#78716c',border:'#d6d3d1',cardHover:'#ea580c',accent:'#ea580c',codeBg:'#ecebe9',codeBorder:'#d6d3d1',selection:'#ea580c',prose:'#44403c',postcardBg:'#e7e5e4'},{bg:'#ffffff',text:'#18181b',muted:'#71717a',border:'#e4e4e7',cardHover:'#ea580c',accent:'#ea580c',codeBg:'#f4f4f5',codeBorder:'#e4e4e7',selection:'#ea580c',prose:'#3f3f46',postcardBg:'#f0f0f0'},{bg:'#1f1b18',text:'#e8e3dd',muted:'#9a8e82',border:'#3a342e',cardHover:'#ea580c',accent:'#ea580c',codeBg:'#2a2521',codeBorder:'#3a342e',selection:'#ea580c',prose:'#b8ada0',postcardBg:'#2a2521'},{bg:'#111111',text:'#e0e0e0',muted:'#6b6b6b',border:'#2a2a2a',cardHover:'#ea580c',accent:'#ea580c',codeBg:'#1a1a1a',codeBorder:'#2a2a2a',selection:'#ea580c',prose:'#9a9a9a',postcardBg:'#1a1a1a'}];var s=localStorage.getItem('theme-step');var i=s!==null?parseInt(s):window.matchMedia('(prefers-color-scheme:dark)').matches?3:1;var c=t[i];var d=document.documentElement;d.style.setProperty('--theme-bg',c.bg);d.style.setProperty('--theme-text',c.text);d.style.setProperty('--theme-muted',c.muted);d.style.setProperty('--theme-border',c.border);d.style.setProperty('--theme-card-hover',c.cardHover);d.style.setProperty('--theme-accent',c.accent);d.style.setProperty('--theme-code-bg',c.codeBg);d.style.setProperty('--theme-code-border',c.codeBorder);d.style.setProperty('--theme-selection',c.selection);d.style.setProperty('--theme-prose',c.prose);d.style.setProperty('--postcard-bg',c.postcardBg)}catch(e){}})()` }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: `(function(){try{var s=parseInt(localStorage.getItem('theme-step')||'',10);var i=Number.isInteger(s)&&s>=0&&s<=4?s:window.matchMedia('(prefers-color-scheme:dark)').matches?3:1;var d=document.documentElement;d.setAttribute('data-theme-step',String(i));d.style.setProperty('--theme-slider-fill',(i*25)+'%')}catch(e){}})()` }}
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
