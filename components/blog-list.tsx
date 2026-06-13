'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Pressable } from './pressable'
import { getReadSlugs, markRead } from '@/lib/read-tracking'

interface Post {
  slug: string
  title: string
  description?: string
  date: string
}

export function BlogList({ posts }: { posts: Post[] }) {
  const [readSlugs, setReadSlugs] = useState<Set<string>>(new Set())

  useEffect(() => {
    setReadSlugs(getReadSlugs())
  }, [])

  return (
    <div className="flex flex-col mt-2">
      {posts.map((post) => {
        const isRead = readSlugs.has(post.slug)
        return (
          <Pressable key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex relative justify-between items-center gap-6 py-2 group"
              onClick={() => {
                markRead(post.slug)
                sessionStorage.setItem('blog-referrer', '/blog')
              }}
            >
              <div className="absolute bg-orange-600 pointer-events-none group-hover:opacity-100 opacity-0 h-[calc(100%+0px)] w-[calc(100%+16px)] translate-x-[-8px] rounded-lg" />
              <div className="flex flex-col gap-0.5 min-w-0 z-20">
                <span className={`group-hover:text-white ${isRead ? 'text-zinc-400' : ''}`}>
                  {post.title}
                </span>
                {post.description && (
                  <span className="text-base text-zinc-400 group-hover:text-white">
                    {post.description}
                  </span>
                )}
              </div>
              <span className="text-base text-zinc-400 group-hover:text-white shrink-0 z-20">
                {post.date}
              </span>
            </Link>
          </Pressable>
        )
      })}
    </div>
  )
}
