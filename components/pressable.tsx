'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Pressable({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
