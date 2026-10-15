'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const art = `
     |||||||||||                                                                    |||||||||||
  |||||||||||||||||||                                                          |||||||||||||||||||
 ||||||||||||||||||||||||                                                  ||||||||||||||||||||||||
||||||||||||||||||||||||||||                                            ||||||||||||||||||||||||||||
|||||||| |||||||||||||||||||||                                        ||||||||||||||||||||| ||||||||
||||||  |||||||||||||||||||||||||              ||||||              |||||||||||||||||||||||||  ||||||
|||||| ||||||||||||||||||||||||||||          |||    |||          |||||||||||||||||||||||||||| ||||||
 ||||| ||||||||         |||||||||||||       ||        ||       |||||||||||||         |||||||| |||||
  ||||| ||||||              ||||||||||      |          |      ||||||||||              |||||| |||||
   |||||||||||                 |||||||||   ||          ||   |||||||||                 |||||||||||
    ||||||||||                    |||||||  |   ||||||   |  |||||||                    ||||||||||
     ||||||||||                     ||||||||  ||||||||  ||||||||                     ||||||||||
       ||||||||||                     ||||||  |||  |||  ||||||                     ||||||||||
         |||||||||                     |||||| ||    || ||||||                     |||||||||
           |||||||||                     ||||||      ||||||                     |||||||||
             |||||||||                    |||||      |||||                    |||||||||
               |||||||||                   |||||    |||||                   |||||||||
                  ||||||||                  |||||  |||||                  ||||||||
                     ||||||||                ||||||||||                ||||||||
                        ||||||||             ||||||||||             ||||||||
                            ||||||||          ||||||||          ||||||||
                    ||||||||||||||||||||       ||||||       ||||||||||||||||||||
                |||||||||||||||||||||||||||||   ||||   |||||||||||||||||||||||||||||
                ||||||     ||||||||||||||||||||||||||||||||||||||||||||||     ||||||
                |||||||||| |||||||||||||||||||||||||||||||||||||||||||||| ||||||||||
                   ||||||||||||||||||||||||||| |||||| |||||||||||||||||||||||||||
                                   |||||||    || || ||    |||||||
                               |||||||      |||      |||      |||||||
                             |||||||       |||        |||       |||||||
                          ||||||||      |||||          |||||      ||||||||
                        |||| |||      ||||||            ||||||      ||| ||||
                      ||||  |||    |||||||                |||||||    |||  ||||
                    |||||   ||||||||||||                    ||||||||||||   |||||
                   ||||     ||||| |||||                      ||||| |||||     ||||
                  |||||         |||||                          |||||         |||||
                  | ||||   |||||||                                |||||||   |||| |
                  |||||||||||||                                      |||||||||||||
                   ||||||||                                              ||||||||
`

const lines = art.slice(1, -1).split('\n')
const COLS = Math.max(...lines.map((l) => l.length))
const ROWS = lines.length

export function Butterfly() {
  const preRef = useRef<HTMLPreElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hidden = usePathname().startsWith('/blog')

  useEffect(() => {
    const pre = preRef.current
    const canvas = canvasRef.current
    if (!pre || !canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = COLS * ROWS
    let dye = new Float32Array(size)
    let tmpDye = new Float32Array(size)
    let cellW = 0
    let cellH = 0
    let fontPx = 0
    let raf = 0
    let last: { x: number; y: number; t: number } | null = null

    function measure() {
      const rect = pre!.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas!.width = Math.round(rect.width * dpr)
      canvas!.height = Math.round(rect.height * dpr)
      canvas!.style.width = `${rect.width}px`
      canvas!.style.height = `${rect.height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      cellW = rect.width / COLS
      cellH = rect.height / ROWS
      fontPx = parseFloat(getComputedStyle(pre!).fontSize)
    }

    // radius is in pixels so the brush is circular even though cells are tall
    function inject(cx: number, cy: number, radius: number, strength: number) {
      const rx = Math.ceil((radius * 2) / cellW)
      const ry = Math.ceil((radius * 2) / cellH)
      for (let dy = -ry; dy <= ry; dy++) {
        for (let dx = -rx; dx <= rx; dx++) {
          const x = Math.round(cx) + dx
          const y = Math.round(cy) + dy
          if (x < 0 || y < 0 || x >= COLS || y >= ROWS) continue
          const px = (x - cx) * cellW
          const py = (y - cy) * cellH
          const falloff = Math.exp(-(px * px + py * py) / (radius * radius))
          const i = y * COLS + x
          dye[i] = Math.min(1, dye[i] + strength * falloff)
        }
      }
    }

    function step() {
      let active = false
      // isotropic diffusion: vertical neighbours are farther away, so weigh them less
      const k = (cellW / cellH) ** 2
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          const i = y * COLS + x
          const l = x > 0 ? i - 1 : i
          const r = x < COLS - 1 ? i + 1 : i
          const u = y > 0 ? i - COLS : i
          const d = y < ROWS - 1 ? i + COLS : i
          const v = (dye[i] * 4 + dye[l] + dye[r] + k * (dye[u] + dye[d])) / (6 + 2 * k)
          tmpDye[i] = v > 0.01 ? v * 0.97 : 0
          if (tmpDye[i] > 0) active = true
        }
      }
      ;[dye, tmpDye] = [tmpDye, dye]

      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      ctx!.font = `${fontPx}px ${getComputedStyle(pre!).fontFamily}`
      ctx!.textAlign = 'center'
      ctx!.textBaseline = 'middle'
      for (let y = 0; y < ROWS; y++) {
        const line = lines[y]
        for (let x = 0; x < line.length; x++) {
          if (line[x] === ' ') continue
          const v = dye[y * COLS + x]
          if (v < 0.03) continue
          ctx!.fillStyle = `rgba(0, 0, 110, ${0.15 + v * 0.5})`
          ctx!.fillText(line[x], (x + 0.5) * cellW, (y + 0.5) * cellH)
        }
      }
      raf = active ? requestAnimationFrame(step) : 0
    }

    function onMove(e: PointerEvent) {
      const rect = pre!.getBoundingClientRect()
      const now = performance.now()
      const cx = (e.clientX - rect.left) / cellW
      const cy = (e.clientY - rect.top) / cellH
      if (last) {
        const px = e.clientX - last.x
        const py = e.clientY - last.y
        const dist = Math.hypot(px, py)
        const dt = Math.max(1, now - last.t)
        const speed = dist / dt
        if (dist > 0) {
          const radius = Math.min(6, 2 + speed * 2.5) * cellW
          const strength = Math.min(0.9, 0.15 + speed * 0.5)
          const steps = Math.max(1, Math.ceil(dist / (cellW * 0.7)))
          const lx = (last.x - rect.left) / cellW
          const ly = (last.y - rect.top) / cellH
          for (let s = 1; s <= steps; s++) {
            const t = s / steps
            inject(lx + (cx - lx) * t, ly + (cy - ly) * t, radius, (strength / steps) * 2)
          }
          if (!raf) raf = requestAnimationFrame(step)
        }
      }
      last = { x: e.clientX, y: e.clientY, t: now }
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(pre)
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      ro.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none fixed left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <pre
        ref={preRef}
        className="whitespace-pre"
        style={{
          fontFamily: 'var(--font-ibm-mono), monospace',
          fontSize: 'min(1.3vw, 1.8vh)',
          lineHeight: 1.3,
          letterSpacing: 0,
          color: 'rgba(0, 0, 170, 0.15)',
        }}
      >
        {art.slice(1, -1)}
      </pre>
      <canvas ref={canvasRef} className="absolute left-0 top-0" />
    </div>
  )
}
