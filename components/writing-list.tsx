'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Pressable } from './pressable'
import { getReadSlugs, markRead } from '@/lib/read-tracking'

interface Post {
  slug: string
  title: string
  date: string
}

export function WritingList({ posts }: { posts: Post[] }) {
  const [readSlugs] = useState(() => getReadSlugs())

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
    <div className="flex flex-col">
      {items.map((item) => {
        const isRead = item.isPost && readSlugs.has(item.key)
        return (
          <Pressable key={item.key}>
            <Link
              href={item.href}
              className="flex relative justify-between items-center gap-4 py-1 group"
              onClick={() => {
                if (item.isPost) {
                  markRead(item.key)
                  sessionStorage.setItem('blog-referrer', '/')
                }
              }}
            >
              <div className="absolute pointer-events-none opacity-0 group-hover:opacity-100 h-[calc(100%+4px)] w-[calc(100%+16px)] translate-x-[-8px] rounded-lg" style={{ backgroundColor: 'var(--theme-card-hover)' }} />
              <span
                className="z-20 group-hover:!text-white"
                style={{ color: isRead ? 'var(--theme-muted)' : item.meta ? 'var(--theme-text)' : 'var(--theme-muted)' }}
              >
                {item.label}
              </span>
              {item.meta && (
                <span
                  className="text-base z-20 shrink-0 group-hover:!text-white"
                  style={{ color: 'var(--theme-muted)' }}
                >
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
