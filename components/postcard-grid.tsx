'use client'

import { useState, useEffect } from 'react'
import { Postcard } from './postcard'

const cards = [
  { src: '/images/shader-lab.webp', label: 'Me and My Dog, Max' },
  { src: '/images/ragi.webp', label: "My Mom's Spicy Cat, Ragi" },
  { src: '/images/headphones.webp', label: 'Me and My Pink Headphones' },
]

export function PostcardGrid() {
  const [cols, setCols] = useState(3)
  const [randomIndex] = useState(() =>
    typeof window === 'undefined' ? 0 : Math.floor(Math.random() * cards.length),
  )

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCols(1)
      else if (window.innerWidth < 900) setCols(2)
      else setCols(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const visible = cols === 1 ? [cards[randomIndex]] : cols === 2 ? cards.slice(0, 2) : cards

  return (
    <div
      className="mt-6 gap-4 -mx-2"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {visible.map((card, i) => (
        <Postcard key={card.src} src={card.src} index={i}>
          <span className="text-sm font-semibold" style={{ color: 'var(--theme-text)' }}>
            {card.label}
          </span>
        </Postcard>
      ))}
    </div>
  )
}
