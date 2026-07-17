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
    <>
      <div>I&apos;m new to this so please be nice</div>

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
    </>
  )
}
