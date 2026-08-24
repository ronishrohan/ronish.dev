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
        return (
          <Pressable key={item.key}>
            <Link
              href={item.href}
              className="relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-0.5 py-2 group sm:flex sm:items-center sm:justify-between sm:gap-4 sm:py-1"
              onClick={() => {
                if (item.isPost) {
                  markRead(item.key)
                  sessionStorage.setItem('blog-referrer', '/')
                }
              }}
            >
              <div className="absolute pointer-events-none opacity-0 group-hover:opacity-100 h-[calc(100%+4px)] w-[calc(100%+16px)] translate-x-[-8px] rounded-lg" style={{ backgroundColor: 'var(--theme-card-hover)' }} />
              <span
                className="z-20 min-w-0 group-hover:!text-[var(--theme-on-accent)]"
                style={{
                  color: item.isPost
                    ? `var(--read-${item.key}, var(--theme-text))`
                    : 'var(--theme-muted)',
                }}
              >
                {item.label}
              </span>
              {item.meta && (
                <span
                  className="text-base z-20 col-start-2 row-start-1 shrink-0 group-hover:!text-[var(--theme-on-accent-muted)]"
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
