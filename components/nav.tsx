'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isBlog = pathname.startsWith('/blog')

  return (
    <nav className="w-full flex justify-center">
      <div className="max-w-4xl w-full flex justify-between items-center px-6 pt-8">
        <Link href="/" className="flex items-center gap-2 text-base">
          ronish.dev
        </Link>
        <div className="flex gap-1 text-base">
          <Link
            href="/"
            className={`px-2 py-0.5 rounded-lg ${
              isHome ? 'bg-orange-600 text-white' : 'text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900'
            }`}
          >
            home
          </Link>
          <Link
            href="/blog"
            className={`px-2 py-0.5 rounded-lg ${
              isBlog ? 'bg-orange-600 text-white' : 'text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900'
            }`}
          >
            writing
          </Link>
        </div>
      </div>
    </nav>
  )
}
