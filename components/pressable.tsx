'use client'

import { motion } from 'framer-motion'
import { useSound } from '@web-kits/audio/react'
import { thock } from '@/lib/sounds'
import type { ReactNode } from 'react'

export function Pressable({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const playThock = useSound(thock)

  return (
    <motion.div
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      onMouseDown={() => playThock()}
      className={className}
    >
      {children}
    </motion.div>
  )
}
