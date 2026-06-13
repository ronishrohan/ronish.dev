import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { AnimatedName } from '@/components/animated-name'
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'

function formatDate(iso: string) {
  return new Date(iso)
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .toLowerCase()
}

export default async function Home() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 5)

  return (
    <>
      <Nav />
      <div className="flex flex-1 w-full flex-col">
        <div className="max-w-4xl w-full mx-auto text-base mt-[100px] flex flex-col gap-4 px-6">
          <div className="flex justify-between items-baseline">
            <span className="text-2xl">
              <AnimatedName />
            </span>
            <div className="flex gap-4 items-center text-zinc-500">
              <a href="https://github.com/ronishrohan" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-black">github</a>
              <a href="https://x.com/ronish1o" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-black">x</a>
              <a href="https://instagram.com/ronish1o" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-black">instagram</a>
              <a href="https://discord.com/users/769140296939470859" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-black">discord</a>
            </div>
          </div>

          <div>
            this is ronish, im 21 and i live in bengaluru, india <br />
            <br />
            i design and build things for the web. most of what i make starts
            from a feeling, a texture, a rhythm, a small detail that won&apos;t
            leave my head until i&apos;ve built it <br /><br />
            i think the internet deserves more craft. every site i ship is an
            attempt to treat the browser like a canvas, not a billboard. no
            templates, no shortcuts, just work that feels like it was made by
            a person <br /><br />
            &ldquo;to create is to live twice&rdquo; - albert camus
            <br /><br />
            i&apos;m currently a software engineer at{' '}
            <a
              href="https://tryghost.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black"
            >
              ghost
            </a>
            , we create extremely powerful agents for your computer
          </div>

          {recentPosts.length > 0 && (
            <div className="mt-6 flex flex-col gap-3">
              <span className="text-zinc-400">recent writing</span>
              <div className="flex flex-col gap-1">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex relative justify-between items-center gap-4 group py-0.5"
                  >
                    <div className="absolute bg-neutral-900 pointer-events-auto group-hover:opacity-100 opacity-0 h-[calc(100%+8px)] w-[calc(100%+16px)] translate-x-[-8px]" />
                    <span className="z-20 group-hover:text-white">
                      {post.title}
                    </span>
                    <span className="text-base z-20 group-hover:text-white text-zinc-400 shrink-0">
                      {formatDate(post.date)}
                    </span>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="text-zinc-400 hover:text-black w-fit">
                all posts &rarr;
              </Link>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}
