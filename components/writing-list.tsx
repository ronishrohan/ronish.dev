'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Pressable } from './pressable'
import { getReadSlugs, markRead } from '@/lib/read-tracking'

interface Post {
  slug: string
  title: string
  date: string
}

export function WritingList({ posts }: { posts: Post[] }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [readSlugs, setReadSlugs] = useState<Set<string>>(new Set())

  useEffect(() => {
    setReadSlugs(getReadSlugs())
  }, [])

  const items = [
    ...posts.map((post) => ({
      key: post.slug,
      href: `/blog/${post.slug}`,
      label: post.title,
      meta: post.date,
      isPost: true,
    })),
    {
      key: '_all',
      href: '/blog',
      label: 'All posts →',
      meta: null,
      isPost: false,
    },
  ]

  return (
    <div
      className="flex flex-col"
      onMouseLeave={() => setHovered(null)}
    >
      {items.map((item, i) => {
        const isRead = item.isPost && readSlugs.has(item.key)
        return (
          <Pressable key={item.key}>
            <Link
              href={item.href}
              className="flex relative justify-between items-center gap-4 py-2 group"
              onMouseEnter={() => setHovered(i)}
              onClick={() => {
                if (item.isPost) {
                  markRead(item.key)
                  sessionStorage.setItem('blog-referrer', '/')
                }
              }}
            >
              <div className="absolute bg-orange-600 pointer-events-none opacity-0 group-hover:opacity-100 h-[calc(100%+4px)] w-[calc(100%+16px)] translate-x-[-8px] rounded-lg" />
              <span className={`z-20 ${
                hovered === i ? 'text-white' : isRead ? 'text-zinc-400' : item.meta ? '' : 'text-zinc-400'
              }`}>
                {item.label}
              </span>
              {item.meta && (
                <span className={`text-base z-20 shrink-0 ${hovered === i ? 'text-white' : 'text-zinc-400'}`}>
                  {item.meta}
                </span>
              )}
            </Link>
          </Pressable>
        )
      })}
    </div>
  )
}
