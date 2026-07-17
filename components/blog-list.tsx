'use client'

import { useState } from 'react'
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
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div
      className="flex flex-col mt-2"
      onMouseLeave={() => setHovered(null)}
    >
      {posts.map((post, i) => {
        return (
          <Pressable key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex relative justify-between items-center gap-6 py-2 group"
              onMouseEnter={() => setHovered(i)}
              onClick={() => {
                markRead(post.slug)
                sessionStorage.setItem('blog-referrer', '/blog')
              }}
            >
              <div className="absolute pointer-events-none group-hover:opacity-100 opacity-0 h-[calc(100%+0px)] w-[calc(100%+16px)] translate-x-[-8px] rounded-lg" style={{ backgroundColor: 'var(--theme-card-hover)' }} />
              <div className="flex flex-col gap-0.5 min-w-0 z-20">
                <span className="group-hover:text-white" style={{
                  color: hovered !== i
                    ? `var(--read-${post.slug}, var(--theme-text))`
                    : undefined,
                }}>
                  {post.title}
                </span>
                {post.description && (
                  <span className="text-base group-hover:text-white" style={{ color: hovered !== i ? 'var(--theme-muted)' : undefined }}>
                    {post.description}
                  </span>
                )}
              </div>
              <span className="text-base group-hover:text-white shrink-0 z-20" style={{ color: hovered !== i ? 'var(--theme-muted)' : undefined }}>
                {post.date}
              </span>
            </Link>
          </Pressable>
        )
      })}
    </div>
  )
}
