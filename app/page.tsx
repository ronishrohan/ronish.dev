import { AnimatedName } from '@/components/animated-name'
import { PostcardGrid } from '@/components/postcard-grid'
import { Pressable } from '@/components/pressable'
import { ThemeSliderClient as ThemeSlider, WritingListClient as WritingList } from '@/components/client-only'
import { getAllPosts } from '@/lib/blog'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function Home() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 5).map((p) => ({
    slug: p.slug,
    title: p.title,
    date: formatDate(p.date),
  }))

  return (
    <div className="max-w-4xl w-full mx-auto text-base mt-[100px] flex flex-col gap-4 px-6 pb-24">
      <div className="flex justify-between items-center">
        <span className="text-2xl">
          <AnimatedName />
        </span>
        <ThemeSlider />
      </div>

      <div style={{ color: 'var(--theme-muted)' }} className="flex flex-col gap-3">
        <p>
          I&apos;m 21 and I live in Bengaluru, India.
        </p>
        <p>
          I design and build things for the web. Most of what I make starts
          from a feeling, a texture, a rhythm, a small detail that won&apos;t
          leave my head until I&apos;ve built it.
        </p>
        <p>
          Currently a software engineer at{' '}
          <a href="https://tryghost.ai" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--theme-text)' }}>Ghost</a>,
          where we create extremely powerful agents for your computer.
          You can find my projects on{' '}
          <a href="https://github.com/ronishrohan" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--theme-text)' }}>GitHub</a>.
        </p>
        <p>
          Reach out to me on{' '}
          <a href="https://x.com/ronish1o" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--theme-text)' }}>X</a>
          {' '}or{' '}
          <a href="https://discord.com/users/769140296939470859" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--theme-text)' }}>Discord</a>.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="pb-2" style={{ borderBottom: '1px solid var(--theme-border)' }}>
          <span style={{ color: 'var(--theme-muted)' }}>Work</span>
        </div>
        <div className="flex flex-col">
          {[
            {
              href: 'https://tryghost.ai',
              label: 'Ghost',
              icon: (
                <svg viewBox="0 0 106 82" width="23" height="18" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M6.66665 70.4737C14.9561 73.2368 39.8245 76 52.7193 76C75.7456 76 99.693 64.0263 99.693 36.3947C99.693 11.5263 80.3509 6 70.2193 6C53.6403 6 45.3509 17.0526 38.9035 33.6316C34.2522 45.5868 26.9298 64.9474 6.66665 68.6316C5.76402 68.7974 5.79165 70.1789 6.66665 70.4737Z" fill="currentColor" />
                  <path className="fill-[var(--theme-bg)] group-hover:fill-[var(--theme-accent)]" d="M62.8508 20.7368C65.3929 20.7368 67.4561 23.6289 67.4561 27.1842C67.4561 30.7395 65.3929 33.6316 62.8508 33.6316C60.3087 33.6316 58.2456 30.7487 58.2456 27.1842C58.2456 23.6197 60.3087 20.7368 62.8508 20.7368ZM86.7982 20.7368C84.2561 20.7368 82.1929 23.6289 82.1929 27.1842C82.1929 30.7395 84.2561 33.6316 86.7982 33.6316C89.3403 33.6316 91.4035 30.7487 91.4035 27.1842C91.4035 23.6197 89.3403 20.7368 86.7982 20.7368Z" />
                </svg>
              ),
            },
            {
              href: 'https://getfurnace.vercel.app/',
              label: 'Furnace',
              icon: (
                <svg viewBox="0 0 9 9" width="18" height="18" aria-hidden="true" style={{ flexShrink: 0, imageRendering: 'pixelated' as const }}>
                  <rect x="0" y="3" width="1" height="1" fill="currentColor"/><rect x="0" y="4" width="1" height="1" fill="currentColor"/><rect x="0" y="5" width="1" height="1" fill="currentColor"/><rect x="1" y="1" width="1" height="1" fill="currentColor"/><rect x="1" y="2" width="1" height="1" fill="currentColor"/><rect x="1" y="3" width="1" height="1" fill="currentColor"/><rect x="1" y="4" width="1" height="1" fill="currentColor"/><rect x="1" y="5" width="1" height="1" fill="currentColor"/><rect x="1" y="6" width="1" height="1" fill="currentColor"/><rect x="1" y="7" width="1" height="1" fill="currentColor"/><rect x="2" y="1" width="1" height="1" fill="currentColor"/><rect x="2" y="2" width="1" height="1" fill="currentColor"/><rect x="2" y="3" width="1" height="1" fill="currentColor"/><rect x="2" y="4" width="1" height="1" fill="currentColor"/><rect x="2" y="5" width="1" height="1" fill="currentColor"/><rect x="2" y="6" width="1" height="1" fill="currentColor"/><rect x="2" y="7" width="1" height="1" fill="currentColor"/><rect x="3" y="0" width="1" height="1" fill="currentColor"/><rect x="3" y="1" width="1" height="1" fill="currentColor"/><rect x="3" y="2" width="1" height="1" fill="currentColor"/><rect x="3" y="3" width="1" height="1" fill="currentColor"/><rect x="3" y="4" width="1" height="1" fill="currentColor"/><rect x="3" y="5" width="1" height="1" fill="currentColor"/><rect x="3" y="6" width="1" height="1" fill="currentColor"/><rect x="3" y="7" width="1" height="1" fill="currentColor"/><rect x="3" y="8" width="1" height="1" fill="currentColor"/><rect x="4" y="0" width="1" height="1" fill="currentColor"/><rect x="4" y="1" width="1" height="1" fill="currentColor"/><rect x="4" y="2" width="1" height="1" fill="currentColor"/><rect x="4" y="3" width="1" height="1" fill="currentColor"/><rect x="4" y="4" width="1" height="1" fill="currentColor"/><rect x="4" y="5" width="1" height="1" fill="currentColor"/><rect x="4" y="6" width="1" height="1" fill="currentColor"/><rect x="4" y="7" width="1" height="1" fill="currentColor"/><rect x="4" y="8" width="1" height="1" fill="currentColor"/><rect x="5" y="0" width="1" height="1" fill="currentColor"/><rect x="5" y="1" width="1" height="1" fill="currentColor"/><rect x="5" y="2" width="1" height="1" fill="currentColor"/><rect x="5" y="3" width="1" height="1" fill="currentColor"/><rect x="5" y="4" width="1" height="1" fill="currentColor"/><rect x="5" y="5" width="1" height="1" fill="currentColor"/><rect x="5" y="6" width="1" height="1" fill="currentColor"/><rect x="5" y="7" width="1" height="1" fill="currentColor"/><rect x="5" y="8" width="1" height="1" fill="currentColor"/><rect x="6" y="1" width="1" height="1" fill="currentColor"/><rect x="6" y="2" width="1" height="1" fill="currentColor"/><rect x="6" y="3" width="1" height="1" fill="currentColor"/><rect x="6" y="4" width="1" height="1" fill="currentColor"/><rect x="6" y="5" width="1" height="1" fill="currentColor"/><rect x="6" y="6" width="1" height="1" fill="currentColor"/><rect x="6" y="7" width="1" height="1" fill="currentColor"/><rect x="7" y="1" width="1" height="1" fill="currentColor"/><rect x="7" y="2" width="1" height="1" fill="currentColor"/><rect x="7" y="3" width="1" height="1" fill="currentColor"/><rect x="7" y="4" width="1" height="1" fill="currentColor"/><rect x="7" y="5" width="1" height="1" fill="currentColor"/><rect x="7" y="6" width="1" height="1" fill="currentColor"/><rect x="7" y="7" width="1" height="1" fill="currentColor"/><rect x="8" y="3" width="1" height="1" fill="currentColor"/><rect x="8" y="4" width="1" height="1" fill="currentColor"/><rect x="8" y="5" width="1" height="1" fill="currentColor"/>
                </svg>
              ),
            },
            {
              href: 'https://github.com/amoreX/perch',
              label: 'Perch',
              icon: (
                <svg viewBox="0 0 48 46" width="18" height="18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path fill="currentColor" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"/>
                </svg>
              ),
            },
            {
              href: 'https://github.com/ronishrohan/flash',
              label: 'Flash',
              icon: (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M10.4995 13.5001L20.9995 3.00005M10.6271 13.8281L13.2552 20.5861C13.4867 21.1815 13.6025 21.4791 13.7693 21.566C13.9139 21.6414 14.0862 21.6415 14.2308 21.5663C14.3977 21.4796 14.5139 21.1821 14.7461 20.587L21.3364 3.69925C21.5461 3.16207 21.6509 2.89348 21.5935 2.72185C21.5437 2.5728 21.4268 2.45583 21.2777 2.40604C21.1061 2.34871 20.8375 2.45352 20.3003 2.66315L3.41258 9.25349C2.8175 9.48572 2.51997 9.60183 2.43326 9.76873C2.35809 9.91342 2.35819 10.0857 2.43353 10.2303C2.52043 10.3971 2.81811 10.5128 3.41345 10.7444L10.1715 13.3725C10.2923 13.4195 10.3527 13.443 10.4036 13.4793C10.4487 13.5114 10.4881 13.5509 10.5203 13.596C10.5566 13.6468 10.5801 13.7073 10.6271 13.8281Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              href: 'https://github.com/kushagra2503/team-channel',
              label: 'Team Channel',
              icon: (
                <svg viewBox="0 0 33 33" width="18" height="18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M24.5 30C24.5 28.6044 24.5 27.9067 24.3278 27.3389C23.94 26.0605 22.9395 25.06 21.6611 24.6722C21.0933 24.5 20.3956 24.5 19 24.5H14C12.6044 24.5 11.9067 24.5 11.3389 24.6722C10.0605 25.06 9.06004 26.0605 8.67224 27.3389C8.5 27.9067 8.5 28.6044 8.5 30M21 16.5C21 18.9853 18.9853 21 16.5 21C14.0147 21 12 18.9853 12 16.5C12 14.0147 14.0147 12 16.5 12C18.9853 12 21 14.0147 21 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 3C8.5 4.3956 8.5 5.0933 8.6722 5.6611C9.06 6.9395 10.0605 7.94 11.3389 8.3278C11.9067 8.5 12.6044 8.5 14 8.5L19 8.5C20.3956 8.5 21.0934 8.5 21.6611 8.3278C22.9396 7.94 23.94 6.9395 24.3278 5.6611C24.5 5.0933 24.5 4.3956 24.5 3M12 16.5C12 14.0147 14.0147 12 16.5 12C18.9853 12 21 14.0147 21 16.5C21 18.9853 18.9853 21 16.5 21C14.0147 21 12 18.9853 12 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 8.5C28.6044 8.5 27.9067 8.5 27.3389 8.6722C26.0605 9.06 25.06 10.0605 24.6722 11.3389C24.5 11.9067 24.5 12.6044 24.5 14L24.5 19C24.5 20.3956 24.5 21.0933 24.6722 21.6611C25.06 22.9395 26.0605 23.94 27.3389 24.3278C27.9067 24.5 28.6044 24.5 30 24.5M16.5 12C18.9853 12 21 14.0147 21 16.5C21 18.9853 18.9853 21 16.5 21C14.0147 21 12 18.9853 12 16.5C12 14.0147 14.0147 12 16.5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 24.5C4.3956 24.5 5.0933 24.5 5.6611 24.3278C6.9395 23.94 7.94 22.9395 8.3278 21.6611C8.5 21.0933 8.5 20.3956 8.5 19L8.5 14C8.5 12.6044 8.5 11.9066 8.3278 11.3389C7.94 10.0604 6.9395 9.06004 5.6611 8.67224C5.0933 8.5 4.3956 8.5 3 8.5M16.5 21C14.0147 21 12 18.9853 12 16.5C12 14.0147 14.0147 12 16.5 12C18.9853 12 21 14.0147 21 16.5C21 18.9853 18.9853 21 16.5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              href: 'https://github.com/stupidengineers/rings',
              label: 'Rings',
              icon: (
                <svg viewBox="-2 -2 36 36" width="18" height="18" fill="none" overflow="visible" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <defs>
                    <filter id="ringNoise" x="-10%" y="-10%" width="120%" height="120%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                  </defs>
                  <g stroke="currentColor" strokeWidth="3" filter="url(#ringNoise)">
                    <circle cx="16" cy="16" r="13" />
                    <circle cx="16" cy="16" r="9" />
                    <circle cx="16" cy="16" r="5" />
                  </g>
                </svg>
              ),
            },
          ].map((item) => (
            <Pressable key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex relative items-center gap-2 py-1 group"
              >
                <div className="absolute pointer-events-none opacity-0 group-hover:opacity-100 h-[calc(100%+4px)] w-[calc(100%+16px)] translate-x-[-8px] rounded-lg" style={{ backgroundColor: 'var(--theme-card-hover)' }} />
                {item.icon && (
                  <span className="z-20 group-hover:!text-white" style={{ color: 'var(--theme-text)', display: 'inline-flex' }}>
                    {item.icon}
                  </span>
                )}
                <span className="z-20 group-hover:!text-white" style={{ color: 'var(--theme-text)' }}>
                  {item.label}
                </span>
              </a>
            </Pressable>
          ))}
        </div>
      </div>

      <PostcardGrid />

      {recentPosts.length > 0 && (
        <div className="mt-6 flex flex-col gap-3">
          <div className="pb-2" style={{ borderBottom: '1px solid var(--theme-border)' }}>
            <span style={{ color: 'var(--theme-muted)' }}>Recent Writing</span>
          </div>
          <WritingList posts={recentPosts} />
        </div>
      )}
    </div>
  )
}
