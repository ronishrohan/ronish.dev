import { BlogList } from '@/components/blog-list'
import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'

const blogDesc =
  'Notes by Ronish Rohan on building things, design engineering, and AI engineering.'

export const metadata: Metadata = {
  title: 'Writing',
  description: blogDesc,
  alternates: {
    canonical: '/blog',
    types: { 'application/rss+xml': [{ url: '/feed.xml', title: 'Ronish Rohan, writing' }] },
  },
  openGraph: {
    type: 'website',
    url: 'https://ronish.dev/blog',
    title: 'Writing | Ronish Rohan',
    description: blogDesc,
    siteName: 'ronish.dev',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Writing by Ronish Rohan' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ronish1o',
    title: 'Writing | Ronish Rohan',
    description: blogDesc,
    images: ['/og.png'],
  },
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
      <h1 className="sr-only">Writing by Ronish Rohan</h1>
      <div>I&apos;m new to this so please be nice</div>

      {posts.length === 0 ? (
        <p style={{ color: 'var(--theme-text)' }}>Nothing here yet</p>
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
