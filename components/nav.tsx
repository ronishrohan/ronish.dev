'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const colors = [
  '#ea580c',
  '#2563eb',
  '#16a34a',
  '#dc2626',
  '#7c3aed',
  '#0891b2',
  '#d97706',
  '#db2777',
  '#059669',
  '#9333ea',
]

export function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isBlog = pathname.startsWith('/blog')
  const dotRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let index = 0
    function cycle() {
      if (dotRef.current) {
        dotRef.current.style.background = colors[index % colors.length]
      }
      index++
    }
    cycle()
    const id = setInterval(cycle, 800)
    return () => clearInterval(id)
  }, [])

  return (
    <nav className="w-full flex justify-center">
      <div className="max-w-4xl w-full flex justify-between items-center px-6 pt-8">
        <Link href="/" className="flex items-center gap-2 text-base">
          <span ref={dotRef} className="w-[30px] h-[12px] rounded-[50px] inline-block shrink-0 translate-y-[1px]" />
          ronish.dev
        </Link>
        <div className="flex gap-1 text-base">
          <Link
            href="/"
            className={`px-2 py-0.5 ${
              isHome ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900'
            }`}
          >
            home
          </Link>
          <Link
            href="/blog"
            className={`px-2 py-0.5 ${
              isBlog ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900'
            }`}
          >
            writing
          </Link>
        </div>
      </div>
    </nav>
  )
}
