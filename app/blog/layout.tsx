'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSound } from '@web-kits/audio/react'
import { thockBack } from '@/lib/sounds'

const fast = { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const }

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isPost = pathname !== '/blog'

  const playBack = useSound(thockBack)

  const [fromHome, setFromHome] = useState(false)
  useEffect(() => {
    try {
      setFromHome(isPost && sessionStorage.getItem('blog-referrer') === '/')
    } catch {}
  }, [isPost, pathname])

  return (
    <div className="max-w-4xl w-full p-6 flex flex-col">
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
        <Link href="/" className="w-fit block" style={{ color: 'var(--theme-text)' }} onMouseDown={() => playBack()}>
          ← Home
        </Link>
      </motion.div>

      <Link href={fromHome ? '/' : '/blog'} className="flex items-center w-fit mb-4" style={{ color: 'var(--theme-text)' }} onMouseDown={() => playBack()}>
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
          {fromHome ? 'Home' : 'Writing'}
        </span>
      </Link>

      {children}
    </div>
  )
}
