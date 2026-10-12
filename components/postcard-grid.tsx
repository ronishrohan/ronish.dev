import { Postcard } from './postcard'

const cards = [
  { src: '/images/shader-lab.webp', label: 'Me and My Dog, Max', className: '' },
  { src: '/images/ragi.webp', label: "My Mom's Spicy Cat, Ragi", className: 'hidden sm:flex' },
  { src: '/images/headphones.webp', label: 'Me and My Pink Headphones', className: 'hidden sm:flex' },
]

export function PostcardGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {cards.map((card, i) => (
        <Postcard key={card.src} src={card.src} className={card.className}>
          <figcaption className="flex gap-2 text-sm">
            <span className="label">Fig. {String(i + 1).padStart(2, '0')}</span>
            <span style={{ color: 'var(--theme-text)' }}>{card.label}</span>
          </figcaption>
        </Postcard>
      ))}
    </div>
  )
}
