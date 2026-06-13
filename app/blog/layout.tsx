'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const fast = { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const }

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isPost = pathname !== '/blog'
  const [referrer, setReferrer] = useState<string | null>(null)

  useEffect(() => {
    const ref = sessionStorage.getItem('blog-referrer')
    setReferrer(ref)
  }, [pathname])

  const cameFromHome = isPost && referrer === '/'
  const postBackHref = cameFromHome ? '/' : '/blog'
  const postBackLabel = cameFromHome ? 'Home' : 'Writing'

  return (
    <div className="max-w-4xl w-full mx-auto px-6 mt-[100px] flex flex-col">
      <motion.div
        initial={false}
        animate={{
          height: isPost ? 0 : 'auto',
          opacity: isPost ? 0 : 1,
          marginBottom: isPost ? 0 : 16,
        }}
        transition={fast}
        className="overflow-hidden"
      >
        <Link href="/" className="text-sm w-fit block" style={{ color: 'var(--theme-muted)' }}>
          ← Home
        </Link>
      </motion.div>

      <Link href={isPost ? postBackHref : '/blog'} className="flex items-center w-fit mb-4 text-sm" style={{ color: 'var(--theme-muted)' }}>
        <motion.div
          initial={false}
          animate={{
            width: isPost ? 'auto' : 0,
            opacity: isPost ? 1 : 0,
          }}
          transition={fast}
          className="overflow-hidden whitespace-nowrap inline-flex"
        >
          ←&nbsp;
        </motion.div>
        <span>
          {isPost ? postBackLabel : 'Writing'}
        </span>
      </Link>

      {children}
    </div>
  )
}
