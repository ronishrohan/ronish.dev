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
      onPointerDown={(e) => {
        if (e.pointerType === 'mouse' && e.button === 0) playThock()
      }}
      className={className}
      style={{ touchAction: 'pan-y' }}
    >
      {children}
    </motion.div>
  )
}
