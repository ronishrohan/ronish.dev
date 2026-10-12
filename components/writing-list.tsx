'use client'

import Link from 'next/link'
import { Pressable } from './pressable'
import { markRead } from '@/lib/read-tracking'

interface Post {
  slug: string
  title: string
  date: string
}

export function WritingList({ posts }: { posts: Post[] }) {
  return (
    <div className="rows">
      {posts.map((post, i) => (
        <Pressable key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="row"
            onClick={() => {
              markRead(post.slug)
              sessionStorage.setItem('blog-referrer', '/')
            }}
          >
            <span className="row-lead row-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="row-title" style={{ color: `var(--read-${post.slug}, var(--theme-text))` }}>
              {post.title}
            </span>
            <span className="row-meta">{post.date}</span>
          </Link>
        </Pressable>
      ))}
      <Pressable>
        <Link href="/blog" className="row">
          <span className="row-lead row-index">→</span>
          <span className="row-title" style={{ color: 'var(--theme-muted)' }}>All posts</span>
        </Link>
      </Pressable>
    </div>
  )
}
