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
              <div className="absolute pointer-events-none h-[calc(100%+4px)] w-[calc(100%+16px)] translate-x-[-8px] group-hover:bg-[#0000aa]" />
              <div className="flex flex-col gap-0.5 min-w-0 z-20 group-hover:text-white">
                <span>{post.title}</span>
                {post.description && <span>{post.description}</span>}
              </div>
              <span className="shrink-0 z-20 group-hover:text-white">
                {post.date}
              </span>
            </Link>
          </Pressable>
        )
      })}
    </div>
  )
}
