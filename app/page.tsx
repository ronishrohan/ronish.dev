import { AnimatedName } from '@/components/animated-name'
import { PostcardGrid } from '@/components/postcard-grid'
import { Pressable } from '@/components/pressable'
import { ThemeSlider } from '@/components/theme-slider'
import { WritingList } from '@/components/writing-list'
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
              href: 'https://aoagents.dev/',
              label: 'Contributor at AO',
              desc: '',
              subdesc: 'Open-source framework for composing and orchestrating AI agents',
              date: 'Aug 2026 — Present',
              icon: (
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-block',
                    width: 18,
                    height: 18,
                    flexShrink: 0,
                    backgroundColor: 'currentColor',
                    WebkitMaskImage: 'url(/ao-logo.svg)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: 'url(/ao-logo.svg)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              ),
            },
            {
              href: 'https://tryghost.ai',
              label: 'Founding Engineer at Ghost',
              desc: '',
              subdesc: 'Personal AI (SF, backed by a16z, SV Angel, more)',
              date: 'Nov 2025 — Present',
              icon: (
                <svg viewBox="0 0 106 82" width="18" height="14" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M6.66665 70.4737C14.9561 73.2368 39.8245 76 52.7193 76C75.7456 76 99.693 64.0263 99.693 36.3947C99.693 11.5263 80.3509 6 70.2193 6C53.6403 6 45.3509 17.0526 38.9035 33.6316C34.2522 45.5868 26.9298 64.9474 6.66665 68.6316C5.76402 68.7974 5.79165 70.1789 6.66665 70.4737Z" fill="currentColor" />
                  <path className="fill-[var(--theme-bg)] group-hover:fill-[var(--theme-accent)]" d="M62.8508 20.7368C65.3929 20.7368 67.4561 23.6289 67.4561 27.1842C67.4561 30.7395 65.3929 33.6316 62.8508 33.6316C60.3087 33.6316 58.2456 30.7487 58.2456 27.1842C58.2456 23.6197 60.3087 20.7368 62.8508 20.7368ZM86.7982 20.7368C84.2561 20.7368 82.1929 23.6289 82.1929 27.1842C82.1929 30.7395 84.2561 33.6316 86.7982 33.6316C89.3403 33.6316 91.4035 30.7487 91.4035 27.1842C91.4035 23.6197 89.3403 20.7368 86.7982 20.7368Z" />
                </svg>
              ),
            },
            {
              href: 'https://github.com/rae-app/rae',
              label: 'Co-Founder at Rae',
              desc: '',
              subdesc: 'AI desktop assistant for developers (Bengaluru)',
              date: 'Jul — Nov 2025',
              icon: (
                <svg viewBox="0 0 18 18" width="18" height="18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              ),
            },
            {
              href: 'https://optacloud.ai',
              label: 'Intern at Optacloud',
              desc: '',
              subdesc: 'ML-powered cloud optimization (SG, backed by Antler)',
              date: 'Dec 2024 — Jun 2025',
              icon: (
                <svg viewBox="4 20 186 145" width="20" height="15" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M0 0 C8.17714369 7.08850731 14.51117165 14.71943028 18.26953125 24.92578125 C18.62144531 25.85261719 18.97335938 26.77945313 19.3359375 27.734375 C20.38234068 31.31141012 20.68411104 34.58335747 20.89453125 38.30078125 C21.00667969 40.16863281 21.00667969 40.16863281 21.12109375 42.07421875 C21.17007813 43.01523438 21.2190625 43.95625 21.26953125 44.92578125 C22.11515625 45.28929687 22.96078125 45.6528125 23.83203125 46.02734375 C36.75032793 51.75249796 48.23113155 59.15734412 53.59375 72.8828125 C57.16430597 83.67703662 55.75575413 94.87621698 51.01953125 104.98828125 C46.11257896 114.263272 38.99241948 121.51732342 28.7130146 124.72305584 C21.67283946 126.58147415 15.23335234 127.35536174 7.96826172 127.2980957 C6.90967957 127.30174637 5.85109741 127.30539703 4.76043701 127.30915833 C1.30236166 127.31718643 -2.15523363 127.30372002 -5.61328125 127.2890625 C-8.03840128 127.28854304 -10.46352174 127.28906405 -12.88864136 127.29057312 C-17.95365747 127.29048375 -23.01851327 127.28012433 -28.08349609 127.26196289 C-34.55714683 127.23925297 -41.03056421 127.23873995 -47.50424385 127.24548054 C-52.5058294 127.24883043 -57.50736229 127.24217158 -62.50893784 127.2323513 C-64.89542235 127.22851846 -67.28191275 127.22734309 -69.66839981 127.22893715 C-73.00837516 127.2293103 -76.34805725 127.21661851 -79.68798828 127.20043945 C-81.14865219 127.20415558 -81.14865219 127.20415558 -82.63882446 127.20794678 C-93.13612217 127.12728036 -101.61724396 125.14657782 -110.73046875 119.92578125 C-111.65472656 119.45785156 -111.65472656 119.45785156 -112.59765625 118.98046875 C-117.07224425 116.36170066 -119.68282889 112.44324282 -122.48046875 108.17578125 C-122.8576001 107.60351807 -123.23473145 107.03125488 -123.62329102 106.44165039 C-128.32354412 98.90505578 -130.30148558 91.46762268 -130.23046875 82.61328125 C-130.22547363 81.78658936 -130.22047852 80.95989746 -130.21533203 80.1081543 C-129.91525318 69.50088417 -125.84183138 60.74010616 -118.73046875 52.92578125 C-117.81201172 51.90871094 -117.81201172 51.90871094 -116.875 50.87109375 C-108.70952117 42.75157447 -98.05504719 39.01444238 -86.73046875 37.92578125 C-86.57191406 37.03117187 -86.41335937 36.1365625 -86.25 35.21484375 C-82.96540647 18.19302755 -75.21275333 5.76532816 -60.73046875 -4.07421875 C-41.08356218 -14.50687844 -17.96908443 -13.65033452 0 0 Z" fill="currentColor" transform="translate(134.73046875,35.07421875)" />
                  <path d="M0 0 C4.29 0 8.58 0 13 0 C12.37936996 7.59439038 11.12887297 14.8707477 9.53125 22.31640625 C9.29088013 23.45407944 9.05051025 24.59175262 8.80285645 25.76390076 C8.29773838 28.14856675 7.79000961 30.53268112 7.27978516 32.91625977 C6.49595773 36.58140147 5.72201563 40.24853402 4.94921875 43.91601562 C4.45630968 46.23710252 3.96284037 48.55807053 3.46875 50.87890625 C3.23643677 51.97981094 3.00412354 53.08071564 2.76477051 54.21498108 C2.54784546 55.22370773 2.33092041 56.23243439 2.10742188 57.27172852 C1.91724487 58.16312027 1.72706787 59.05451202 1.53112793 59.97291565 C1 62 1 62 0 63 C-2.18639453 63.07258946 -4.37500389 63.08373783 -6.5625 63.0625 C-8.35880859 63.04896484 -8.35880859 63.04896484 -10.19140625 63.03515625 C-11.11824219 63.02355469 -12.04507813 63.01195312 -13 63 C-9.49226339 41.8309322 -4.6760223 20.93433029 0 0 Z" className="fill-[var(--theme-bg)] group-hover:fill-[var(--theme-accent)]" transform="translate(97,78)" />
                  <path d="M0 0 C5.25174926 4.38442526 10.13222473 9.00842093 14.9375 13.875 C15.62134766 14.56335938 16.30519531 15.25171875 17.00976562 15.9609375 C18.67551464 17.63833511 20.3388622 19.31803791 22 21 C17.61557474 26.25174926 12.99157907 31.13222473 8.125 35.9375 C7.43664062 36.62134766 6.74828125 37.30519531 6.0390625 38.00976562 C4.36166489 39.67551464 2.68196209 41.3388622 1 43 C-0.13199353 42.0919838 -1.25532363 41.17316174 -2.375 40.25 C-3.31472656 39.48429687 -3.31472656 39.48429687 -4.2734375 38.703125 C-6.08312318 36.91800519 -7.00117455 35.32050356 -8 33 C-7.52949219 32.55269531 -7.05898437 32.10539062 -6.57421875 31.64453125 C-5.95160156 31.03996094 -5.32898438 30.43539062 -4.6875 29.8125 C-4.07261719 29.22082031 -3.45773438 28.62914063 -2.82421875 28.01953125 C-0.84803133 25.83176059 0.55991372 23.56556909 2 21 C1.36191406 20.39671875 0.72382812 19.7934375 0.06640625 19.171875 C-0.75988281 18.37265625 -1.58617188 17.5734375 -2.4375 16.75 C-3.26121094 15.96109375 -4.08492188 15.1721875 -4.93359375 14.359375 C-8.04456102 10.80734432 -8.04456102 10.80734432 -8 8 C-6.34765625 5.859375 -6.34765625 5.859375 -4.0625 3.75 C-3.31097656 3.04359375 -2.55945313 2.3371875 -1.78515625 1.609375 C-1.19605469 1.07828125 -0.60695313 0.5471875 0 0 Z" className="fill-[var(--theme-bg)] group-hover:fill-[var(--theme-accent)]" transform="translate(122,88)" />
                  <path d="M0 0 C3.09542121 1.28022876 4.84307917 3.27487419 6.96923828 5.81445312 C6.96923828 9.81445312 6.96923828 9.81445312 4.78173828 12.39257812 C3.85361328 13.27429688 2.92548828 14.15601562 1.96923828 15.06445312 C1.04111328 15.95648438 0.11298828 16.84851563 -0.84326172 17.76757812 C-1.92607422 18.78078125 -1.92607422 18.78078125 -3.03076172 19.81445312 C0.47821097 23.99869204 4.04984363 28.01033479 7.96923828 31.81445312 C6.37831776 35.95084648 3.36448911 39.04658561 -0.03076172 41.81445312 C-0.69076172 41.81445312 -1.35076172 41.81445312 -2.03076172 41.81445312 C-3.30029297 40.52148438 -3.30029297 40.52148438 -4.84326172 38.62695312 C-10.18494195 32.31922434 -16.15128955 26.61435349 -22.03076172 20.81445312 C-17.81527209 15.81258776 -13.47671875 10.99354033 -8.90576172 6.31445312 C-8.29861328 5.66992188 -7.69146484 5.02539062 -7.06591797 4.36132812 C-6.47423828 3.75804688 -5.88255859 3.15476562 -5.27294922 2.53320312 C-4.74556152 1.98599609 -4.21817383 1.43878906 -3.67480469 0.875 C-2.03076172 -0.18554688 -2.03076172 -0.18554688 0 0 Z" className="fill-[var(--theme-bg)] group-hover:fill-[var(--theme-accent)]" transform="translate(73.03076171875,89.185546875)" />
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
                  <span className="z-20 group-hover:!text-white" style={{ color: 'var(--theme-text)', display: 'inline-flex', width: 18, flexShrink: 0, justifyContent: 'center' }}>
                    {item.icon}
                  </span>
                )}
                <span className="z-20 group-hover:!text-white" style={{ color: 'var(--theme-text)' }}>
                  {item.label}
                </span>
                {item.desc && (
                  <>
                    <span className="z-20 group-hover:!text-white/70" style={{ color: 'var(--theme-muted)' }}>·</span>
                    <span className="z-20 group-hover:!text-white/70 shrink-0" style={{ color: 'var(--theme-muted)' }}>
                      {item.desc}
                    </span>
                  </>
                )}
                {item.subdesc && (
                  <>
                    <span className="z-20 group-hover:!text-white/70" style={{ color: 'var(--theme-muted)' }}>·</span>
                    <span className="z-20 group-hover:!text-white/70 truncate" style={{ color: 'var(--theme-muted)' }}>
                      {item.subdesc}
                    </span>
                  </>
                )}
                {item.date && (
                  <span className="z-20 ml-auto shrink-0 group-hover:!text-white/70 text-sm" style={{ color: 'var(--theme-muted)' }}>
                    {item.date}
                  </span>
                )}
              </a>
            </Pressable>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="pb-2" style={{ borderBottom: '1px solid var(--theme-border)' }}>
          <span style={{ color: 'var(--theme-muted)' }}>Projects</span>
        </div>
        <div className="flex flex-col">
          {[
            {
              href: 'https://furnace.unordinary.software/',
              label: 'Furnace',
              desc: 'A harness tending designed perfection',
              icon: (
                <svg viewBox="0 0 9 9" width="18" height="18" aria-hidden="true" style={{ flexShrink: 0, imageRendering: 'pixelated' as const }}>
                  <rect x="0" y="3" width="1" height="1" fill="currentColor"/><rect x="0" y="4" width="1" height="1" fill="currentColor"/><rect x="0" y="5" width="1" height="1" fill="currentColor"/><rect x="1" y="1" width="1" height="1" fill="currentColor"/><rect x="1" y="2" width="1" height="1" fill="currentColor"/><rect x="1" y="3" width="1" height="1" fill="currentColor"/><rect x="1" y="4" width="1" height="1" fill="currentColor"/><rect x="1" y="5" width="1" height="1" fill="currentColor"/><rect x="1" y="6" width="1" height="1" fill="currentColor"/><rect x="1" y="7" width="1" height="1" fill="currentColor"/><rect x="2" y="1" width="1" height="1" fill="currentColor"/><rect x="2" y="2" width="1" height="1" fill="currentColor"/><rect x="2" y="3" width="1" height="1" fill="currentColor"/><rect x="2" y="4" width="1" height="1" fill="currentColor"/><rect x="2" y="5" width="1" height="1" fill="currentColor"/><rect x="2" y="6" width="1" height="1" fill="currentColor"/><rect x="2" y="7" width="1" height="1" fill="currentColor"/><rect x="3" y="0" width="1" height="1" fill="currentColor"/><rect x="3" y="1" width="1" height="1" fill="currentColor"/><rect x="3" y="2" width="1" height="1" fill="currentColor"/><rect x="3" y="3" width="1" height="1" fill="currentColor"/><rect x="3" y="4" width="1" height="1" fill="currentColor"/><rect x="3" y="5" width="1" height="1" fill="currentColor"/><rect x="3" y="6" width="1" height="1" fill="currentColor"/><rect x="3" y="7" width="1" height="1" fill="currentColor"/><rect x="3" y="8" width="1" height="1" fill="currentColor"/><rect x="4" y="0" width="1" height="1" fill="currentColor"/><rect x="4" y="1" width="1" height="1" fill="currentColor"/><rect x="4" y="2" width="1" height="1" fill="currentColor"/><rect x="4" y="3" width="1" height="1" fill="currentColor"/><rect x="4" y="4" width="1" height="1" fill="currentColor"/><rect x="4" y="5" width="1" height="1" fill="currentColor"/><rect x="4" y="6" width="1" height="1" fill="currentColor"/><rect x="4" y="7" width="1" height="1" fill="currentColor"/><rect x="4" y="8" width="1" height="1" fill="currentColor"/><rect x="5" y="0" width="1" height="1" fill="currentColor"/><rect x="5" y="1" width="1" height="1" fill="currentColor"/><rect x="5" y="2" width="1" height="1" fill="currentColor"/><rect x="5" y="3" width="1" height="1" fill="currentColor"/><rect x="5" y="4" width="1" height="1" fill="currentColor"/><rect x="5" y="5" width="1" height="1" fill="currentColor"/><rect x="5" y="6" width="1" height="1" fill="currentColor"/><rect x="5" y="7" width="1" height="1" fill="currentColor"/><rect x="5" y="8" width="1" height="1" fill="currentColor"/><rect x="6" y="1" width="1" height="1" fill="currentColor"/><rect x="6" y="2" width="1" height="1" fill="currentColor"/><rect x="6" y="3" width="1" height="1" fill="currentColor"/><rect x="6" y="4" width="1" height="1" fill="currentColor"/><rect x="6" y="5" width="1" height="1" fill="currentColor"/><rect x="6" y="6" width="1" height="1" fill="currentColor"/><rect x="6" y="7" width="1" height="1" fill="currentColor"/><rect x="7" y="1" width="1" height="1" fill="currentColor"/><rect x="7" y="2" width="1" height="1" fill="currentColor"/><rect x="7" y="3" width="1" height="1" fill="currentColor"/><rect x="7" y="4" width="1" height="1" fill="currentColor"/><rect x="7" y="5" width="1" height="1" fill="currentColor"/><rect x="7" y="6" width="1" height="1" fill="currentColor"/><rect x="7" y="7" width="1" height="1" fill="currentColor"/><rect x="8" y="3" width="1" height="1" fill="currentColor"/><rect x="8" y="4" width="1" height="1" fill="currentColor"/><rect x="8" y="5" width="1" height="1" fill="currentColor"/>
                </svg>
              ),
            },
            {
              href: 'https://perch.unordinary.software',
              label: 'Perch',
              desc: 'Put an agent in your macOS notch',
              icon: (
                <svg viewBox="0 0 48 46" width="18" height="18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path fill="currentColor" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"/>
                </svg>
              ),
            },
            {
              href: 'https://github.com/ronishrohan/flash',
              label: 'Flash',
              desc: 'Agentic mail, for everyone',
              icon: (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M10.4995 13.5001L20.9995 3.00005M10.6271 13.8281L13.2552 20.5861C13.4867 21.1815 13.6025 21.4791 13.7693 21.566C13.9139 21.6414 14.0862 21.6415 14.2308 21.5663C14.3977 21.4796 14.5139 21.1821 14.7461 20.587L21.3364 3.69925C21.5461 3.16207 21.6509 2.89348 21.5935 2.72185C21.5437 2.5728 21.4268 2.45583 21.2777 2.40604C21.1061 2.34871 20.8375 2.45352 20.3003 2.66315L3.41258 9.25349C2.8175 9.48572 2.51997 9.60183 2.43326 9.76873C2.35809 9.91342 2.35819 10.0857 2.43353 10.2303C2.52043 10.3971 2.81811 10.5128 3.41345 10.7444L10.1715 13.3725C10.2923 13.4195 10.3527 13.443 10.4036 13.4793C10.4487 13.5114 10.4881 13.5509 10.5203 13.596C10.5566 13.6468 10.5801 13.7073 10.6271 13.8281Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              href: 'https://coord.unordinary.software/',
              label: 'Coord',
              desc: 'Shared memory for coding agents',
              icon: (
                <svg viewBox="0 0 33 33" width="18" height="18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M24.5 30C24.5 28.6044 24.5 27.9067 24.3278 27.3389C23.94 26.0605 22.9395 25.06 21.6611 24.6722C21.0933 24.5 20.3956 24.5 19 24.5H14C12.6044 24.5 11.9067 24.5 11.3389 24.6722C10.0605 25.06 9.06004 26.0605 8.67224 27.3389C8.5 27.9067 8.5 28.6044 8.5 30M21 16.5C21 18.9853 18.9853 21 16.5 21C14.0147 21 12 18.9853 12 16.5C12 14.0147 14.0147 12 16.5 12C18.9853 12 21 14.0147 21 16.5Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 3C8.5 4.3956 8.5 5.0933 8.6722 5.6611C9.06 6.9395 10.0605 7.94 11.3389 8.3278C11.9067 8.5 12.6044 8.5 14 8.5L19 8.5C20.3956 8.5 21.0934 8.5 21.6611 8.3278C22.9396 7.94 23.94 6.9395 24.3278 5.6611C24.5 5.0933 24.5 4.3956 24.5 3M12 16.5C12 14.0147 14.0147 12 16.5 12C18.9853 12 21 14.0147 21 16.5C21 18.9853 18.9853 21 16.5 21C14.0147 21 12 18.9853 12 16.5Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 8.5C28.6044 8.5 27.9067 8.5 27.3389 8.6722C26.0605 9.06 25.06 10.0605 24.6722 11.3389C24.5 11.9067 24.5 12.6044 24.5 14L24.5 19C24.5 20.3956 24.5 21.0933 24.6722 21.6611C25.06 22.9395 26.0605 23.94 27.3389 24.3278C27.9067 24.5 28.6044 24.5 30 24.5M16.5 12C18.9853 12 21 14.0147 21 16.5C21 18.9853 18.9853 21 16.5 21C14.0147 21 12 18.9853 12 16.5C12 14.0147 14.0147 12 16.5 12Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 24.5C4.3956 24.5 5.0933 24.5 5.6611 24.3278C6.9395 23.94 7.94 22.9395 8.3278 21.6611C8.5 21.0933 8.5 20.3956 8.5 19L8.5 14C8.5 12.6044 8.5 11.9066 8.3278 11.3389C7.94 10.0604 6.9395 9.06004 5.6611 8.67224C5.0933 8.5 4.3956 8.5 3 8.5M16.5 21C14.0147 21 12 18.9853 12 16.5C12 14.0147 14.0147 12 16.5 12C18.9853 12 21 14.0147 21 16.5C21 18.9853 18.9853 21 16.5 21Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              href: 'https://github.com/stupidengineers/rings',
              label: 'Rings',
              desc: 'Put sad stuff on the web',
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
                  <span className="z-20 group-hover:!text-white" style={{ color: 'var(--theme-text)', display: 'inline-flex', width: 18, flexShrink: 0, justifyContent: 'center' }}>
                    {item.icon}
                  </span>
                )}
                <span className="z-20 group-hover:!text-white" style={{ color: 'var(--theme-text)' }}>
                  {item.label}
                </span>
                {item.desc && (
                  <>
                    <span className="z-20 group-hover:!text-white/70" style={{ color: 'var(--theme-muted)' }}>·</span>
                    <span className="z-20 group-hover:!text-white/70 truncate" style={{ color: 'var(--theme-muted)' }}>
                      {item.desc}
                    </span>
                  </>
                )}
              </a>
            </Pressable>
          ))}
        </div>
      </div>

      {recentPosts.length > 0 && (
        <div className="mt-6 flex flex-col gap-3">
          <div className="pb-2" style={{ borderBottom: '1px solid var(--theme-border)' }}>
            <span style={{ color: 'var(--theme-muted)' }}>Recent Writing</span>
          </div>
          <WritingList posts={recentPosts} />
        </div>
      )}

      <PostcardGrid />
    </div>
  )
}
