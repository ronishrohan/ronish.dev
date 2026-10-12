import { BlogList } from '@/components/blog-list'
import { getAllPosts } from '@/lib/blog'
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
    <div className="flex flex-col gap-16">
      <header className="rule-heavy pt-4 flex flex-col gap-4">
        <h1 className="display" style={{ fontSize: 'clamp(3.5rem, 15vw, 10rem)' }}>
          Writing
        </h1>
        <p className="text-xl sm:text-2xl max-w-[34rem]" style={{ lineHeight: 1.15, letterSpacing: '-0.03em', fontWeight: 500 }}>
          I&apos;m new to this so please be nice
        </p>
      </header>

      <section className="rule-heavy grid-12 pt-3">
        <h2 className="label flex gap-3 sm:flex-col sm:gap-1">
          <span>Index</span>
          <span className="label-strong">{String(posts.length).padStart(2, '0')} posts</span>
        </h2>
        {posts.length === 0 ? (
          <p style={{ color: 'var(--theme-muted)' }}>Nothing here yet</p>
        ) : (
          <BlogList
            posts={posts.map((p) => ({
              slug: p.slug,
              title: p.title,
              description: p.description,
              date: formatDate(p.date),
            }))}
          />
        )}
      </section>
    </div>
  )
}
