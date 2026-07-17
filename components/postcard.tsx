function generateStampPath(w: number, h: number): string {
  const R = 7
  const margin = R
  const bL = margin, bT = margin, bR = w - margin, bB = h - margin
  const bW = bR - bL, bH = bB - bT
  const perimeter = 2 * (bW + bH)
  const ideal = R * 2.5

  const edges = [
    { start: 0, len: bW },
    { start: bW, len: bH },
    { start: bW + bH, len: bW },
    { start: 2 * bW + bH, len: bH },
  ]

  const centers: number[] = []
  for (const e of edges) {
    const n = Math.max(2, Math.round(e.len / ideal))
    const s = e.len / n
    for (let i = 0; i < n; i++) {
      centers.push(e.start + i * s)
    }
  }

  function xy(t: number): [number, number] {
    t = ((t % perimeter) + perimeter) % perimeter
    if (t <= bW) return [bL + t, bT]
    if (t <= bW + bH) return [bR, bT + (t - bW)]
    if (t <= 2 * bW + bH) return [bR - (t - bW - bH), bB]
    return [bL, bB - (t - 2 * bW - bH)]
  }

  const N = centers.length
  const [sx, sy] = xy(centers[0] - R)
  let d = `M ${sx} ${sy}`

  for (let i = 0; i < N; i++) {
    const tc = centers[i]
    const nextTc = centers[(i + 1) % N]

    const [rx, ry] = xy(tc + R)
    d += ` A ${R} ${R} 0 0 0 ${rx} ${ry}`

    let gap = nextTc - tc
    if (gap <= 0) gap += perimeter
    const vr = Math.max(1, (gap - 2 * R) / 2)

    const [lx, ly] = xy(nextTc - R)
    d += ` A ${vr} ${vr} 0 0 1 ${lx} ${ly}`
  }

  d += ' Z'
  return d
}

const STAMP_WIDTH = 300
const STAMP_HEIGHT = 260
const stampPath = generateStampPath(STAMP_WIDTH, STAMP_HEIGHT)

export function Postcard({
  children,
  className,
  src,
}: {
  children?: React.ReactNode
  className?: string
  src?: string
}) {
  return (
    <div
      className={`relative select-none ${className || ''}`}
    >
      <svg
        className="absolute inset-0 size-full pointer-events-none postcard-svg"
        viewBox={`0 0 ${STAMP_WIDTH} ${STAMP_HEIGHT}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={stampPath}
          fill="var(--postcard-bg, var(--theme-border))"
          stroke="var(--theme-text, #0a0a0a)"
          strokeOpacity="0.04"
          strokeWidth="2"
        />
      </svg>
      <div className="relative z-10 p-5 flex flex-col gap-2">
        {src && (
          <img
            src={src}
            alt=""
            width={600}
            height={450}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="w-full object-cover aspect-[4/3]"
            draggable={false}
            style={{ imageRendering: 'pixelated' }}
          />
        )}
        {children}
      </div>
    </div>
  )
}
