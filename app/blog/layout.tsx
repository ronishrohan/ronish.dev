'use client'

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
        <Link href="/" className="text-sm w-fit block" style={{ color: 'var(--theme-muted)' }} onMouseDown={() => playBack()}>
          ← Home
        </Link>
      </motion.div>

      <Link href="/blog" className="flex items-center w-fit mb-4 text-sm" style={{ color: 'var(--theme-muted)' }} onMouseDown={() => playBack()}>
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
          Writing
        </span>
      </Link>

      {children}
    </div>
  )
}
