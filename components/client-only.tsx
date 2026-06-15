'use client'

import dynamic from 'next/dynamic'

export const ThemeSliderClient = dynamic(
  () => import('@/components/theme-slider').then((m) => ({ default: m.ThemeSlider })),
  { ssr: false },
)

export const WritingListClient = dynamic(
  () => import('@/components/writing-list').then((m) => ({ default: m.WritingList })),
  { ssr: false },
)

export const BlogListClient = dynamic(
  () => import('@/components/blog-list').then((m) => ({ default: m.BlogList })),
  { ssr: false },
)
