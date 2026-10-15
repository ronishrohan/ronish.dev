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
    <div className="flex flex-col divide-y divide-[var(--theme-line)]">
      {posts.map((post) => (
        <Pressable key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-0.5 py-2 group sm:flex sm:items-center sm:justify-between sm:gap-4 sm:py-1"
            onClick={() => {
              markRead(post.slug)
              sessionStorage.setItem('blog-referrer', '/')
            }}
          >
            <div className="absolute pointer-events-none h-[calc(100%+4px)] w-[calc(100%+16px)] translate-x-[-8px] group-hover:bg-[#0000aa]" />
            <span className="z-20 min-w-0 group-hover:text-white">
              {post.title}
            </span>
            <span className="z-20 col-start-2 row-start-1 shrink-0 group-hover:text-white">
              {post.date}
            </span>
          </Link>
        </Pressable>
      ))}
    </div>
  )
}
