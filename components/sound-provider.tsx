'use client'

import { SoundProvider } from '@web-kits/audio/react'

export function SiteSound({ children }: { children: React.ReactNode }) {
  return (
    <SoundProvider enabled={true} volume={0.4}>
      {children}
    </SoundProvider>
  )
}
