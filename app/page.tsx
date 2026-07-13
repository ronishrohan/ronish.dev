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
                <svg viewBox="0 0 32 32" width="18" height="18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="10" cy="18" rx="5.5" ry="4" fill="currentColor" />
                  <ellipse cx="18" cy="20" rx="7" ry="4.5" fill="currentColor" />
                  <ellipse cx="13" cy="16" rx="4" ry="3" fill="currentColor" />
                  <ellipse cx="22" cy="18" rx="4.5" ry="3.5" fill="currentColor" />
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
                  <g stroke="currentColor" strokeWidth="2.5" filter="url(#ringNoise)">
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
