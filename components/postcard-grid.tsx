import { Postcard } from './postcard'

const cards = [
  { src: '/images/shader-lab.webp', label: 'Me and My Dog, Max', className: '' },
  { src: '/images/ragi.webp', label: "My Mom's Spicy Cat, Ragi", className: 'hidden sm:block' },
  { src: '/images/headphones.webp', label: 'Me and My Pink Headphones', className: 'hidden sm:block' },
]

export function PostcardGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 -mx-2 sm:grid-cols-3">
      {cards.map((card) => (
        <Postcard key={card.src} src={card.src} className={card.className}>
          <span className="text-sm font-semibold" style={{ color: 'var(--theme-text)' }}>
            {card.label}
          </span>
        </Postcard>
      ))}
    </div>
  )
}
