import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'writing',
  description: 'notes on building things, on design, on whatever.',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <Nav />
      <div className="flex flex-1 w-full flex-col">
        <div className="max-w-4xl w-full mx-auto text-base mt-[100px] flex flex-col gap-4 px-6">
          <span>writing</span>
          <div>im new to this so please be nice</div>

          {posts.length === 0 ? (
            <p className="text-zinc-400">nothing here yet</p>
          ) : (
            <div className="flex flex-col mt-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex relative justify-between items-center gap-6 py-2 group"
                >
                  <div className="absolute bg-neutral-900 pointer-events-none group-hover:opacity-100 opacity-0 h-[calc(100%+0px)] w-[calc(100%+16px)] translate-x-[-8px]" />
                  <div className="flex flex-col gap-0.5 min-w-0 z-20">
                    <span className="group-hover:text-white">
                      {post.title}
                    </span>
                    {post.description && (
                      <span className="text-base text-zinc-400 group-hover:text-white">
                        {post.description}
                      </span>
                    )}
                  </div>
                  <span className="text-base text-zinc-400 group-hover:text-white shrink-0 z-20">
                    {formatDate(post.date)}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}
