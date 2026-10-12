'use client'

import Link from 'next/link'
import { Pressable } from './pressable'
import { markRead } from '@/lib/read-tracking'

interface Post {
  slug: string
  title: string
  description?: string
  date: string
}

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="rows">
      {posts.map((post, i) => (
        <Pressable key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="row"
            style={{ paddingBlock: '0.875rem' }}
            onClick={() => {
              markRead(post.slug)
              sessionStorage.setItem('blog-referrer', '/blog')
            }}
          >
            <span className="row-lead row-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="row-title" style={{ color: `var(--read-${post.slug}, var(--theme-text))` }}>
              {post.title}
            </span>
            <span className="row-meta">{post.date}</span>
            {post.description && <span className="row-sub">{post.description}</span>}
          </Link>
        </Pressable>
      ))}
    </div>
  )
}
