'use client'

import { motion, useMotionValue, animate, useTransform } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { useSound } from '@web-kits/audio/react'
import type { SoundDefinition } from '@web-kits/audio'

const ticks: SoundDefinition[] = [
  { source: { type: 'sine', frequency: { start: 800, end: 500 } }, envelope: { decay: 0.03 }, gain: 0.25 },
  { source: { type: 'sine', frequency: { start: 1000, end: 650 } }, envelope: { decay: 0.03 }, gain: 0.25 },
  { source: { type: 'sine', frequency: { start: 1200, end: 800 } }, envelope: { decay: 0.03 }, gain: 0.25 },
  { source: { type: 'sine', frequency: { start: 1500, end: 1000 } }, envelope: { decay: 0.03 }, gain: 0.25 },
  { source: { type: 'sine', frequency: { start: 1800, end: 1200 } }, envelope: { decay: 0.03 }, gain: 0.25 },
]

const themes = [
  // Dawn — warm cream, soft brown text
  { name: 'dawn', bg: '#faf5ee', text: '#3d2e1f', muted: '#8c7a68', border: '#e4d8ca', cardHover: '#ea580c', accent: '#ea580c', codeBg: '#f0e8dc', codeBorder: '#e4d8ca', selection: '#ea580c', prose: '#5c4a38', postcardBg: '#efe6d8' },
  // Morning — neutral stone, crisp
  { name: 'morning', bg: '#f5f5f4', text: '#1c1917', muted: '#78716c', border: '#d6d3d1', cardHover: '#ea580c', accent: '#ea580c', codeBg: '#ecebe9', codeBorder: '#d6d3d1', selection: '#ea580c', prose: '#44403c', postcardBg: '#e7e5e4' },
  // Noon — clean white
  { name: 'noon', bg: '#ffffff', text: '#18181b', muted: '#71717a', border: '#e4e4e7', cardHover: '#ea580c', accent: '#ea580c', codeBg: '#f4f4f5', codeBorder: '#e4e4e7', selection: '#ea580c', prose: '#3f3f46', postcardBg: '#f0f0f0' },
  // Evening — deep warm gray
  { name: 'evening', bg: '#1f1b18', text: '#e8e3dd', muted: '#9a8e82', border: '#3a342e', cardHover: '#ea580c', accent: '#ea580c', codeBg: '#2a2521', codeBorder: '#3a342e', selection: '#ea580c', prose: '#b8ada0', postcardBg: '#2a2521' },
  // Night — true dark
  { name: 'night', bg: '#111111', text: '#e0e0e0', muted: '#6b6b6b', border: '#2a2a2a', cardHover: '#ea580c', accent: '#ea580c', codeBg: '#1a1a1a', codeBorder: '#2a2a2a', selection: '#ea580c', prose: '#9a9a9a', postcardBg: '#1a1a1a' },
]

const TRACK_WIDTH = 80
const STEPS = 5
const STEP_WIDTH = TRACK_WIDTH / (STEPS - 1)

function applyTheme(index: number) {
  const t = themes[index]
  const root = document.documentElement
  root.setAttribute('data-theme', t.name)
  root.style.setProperty('--theme-bg', t.bg)
  root.style.setProperty('--theme-text', t.text)
  root.style.setProperty('--theme-muted', t.muted)
  root.style.setProperty('--theme-border', t.border)
  root.style.setProperty('--theme-card-hover', t.cardHover)
  root.style.setProperty('--theme-accent', t.accent)
  root.style.setProperty('--theme-code-bg', t.codeBg)
  root.style.setProperty('--theme-code-border', t.codeBorder)
  root.style.setProperty('--theme-selection', t.selection)
  root.style.setProperty('--theme-prose', t.prose)
  root.style.setProperty('--postcard-bg', t.postcardBg)
}

function getInitialStep(): number {
  if (typeof window === 'undefined') return 1
  const saved = localStorage.getItem('theme-step')
  if (saved !== null) return parseInt(saved)
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 3 : 1
}

export function ThemeSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const initial = getInitialStep()
  const fillWidth = useMotionValue(initial * STEP_WIDTH)
  const [step, setStep] = useState(initial)
  const [hovered, setHovered] = useState(false)
  const dragging = useRef(false)
  const startX = useRef(0)
  const startStep = useRef(0)

  const fillPercent = useTransform(fillWidth, [0, TRACK_WIDTH], ['0%', '100%'])
  const playTick0 = useSound(ticks[0])
  const playTick1 = useSound(ticks[1])
  const playTick2 = useSound(ticks[2])
  const playTick3 = useSound(ticks[3])
  const playTick4 = useSound(ticks[4])
  const playTicks = [playTick0, playTick1, playTick2, playTick3, playTick4]

  const snapTo = useCallback((index: number, sound = false) => {
    const clamped = Math.max(0, Math.min(STEPS - 1, index))
    setStep(clamped)
    animate(fillWidth, clamped * STEP_WIDTH, { type: 'spring', stiffness: 300, damping: 30 })
    applyTheme(clamped)
    if (sound) playTicks[clamped]()
    localStorage.setItem('theme-step', String(clamped))
  }, [fillWidth, playTicks])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true
    startX.current = e.clientX
    startStep.current = step
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [step])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return
    const delta = e.clientX - startX.current
    const stepDelta = Math.round(delta / STEP_WIDTH)
    const newStep = startStep.current + stepDelta
    const clamped = Math.max(0, Math.min(STEPS - 1, newStep))
    if (clamped !== step) {
      snapTo(clamped, true)
    }
  }, [step, snapTo])

  const didDrag = useRef(false)

  const handlePointerUp = useCallback(() => {
    if (dragging.current && startStep.current !== step) {
      didDrag.current = true
    }
    dragging.current = false
  }, [step])

  const handleTrackClick = useCallback((e: React.MouseEvent) => {
    if (didDrag.current) {
      didDrag.current = false
      return
    }
    if (!trackRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const nearest = Math.round(clickX / STEP_WIDTH)
    snapTo(nearest)
  }, [snapTo])

  const spring = { type: 'spring' as const, stiffness: 400, damping: 25 }

  return (
    <div
      ref={trackRef}
      className="relative flex items-center justify-center cursor-grab active:cursor-grabbing"
      style={{ width: TRACK_WIDTH, height: 28, padding: '4px 0' }}
      onClick={handleTrackClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Track bg */}
      <motion.div
        className="absolute rounded-full overflow-hidden"
        style={{
          width: TRACK_WIDTH,
          backgroundColor: 'var(--theme-border, #d4d4d8)',
        }}
        initial={false}
        animate={{ height: hovered ? 20 : 8 }}
        transition={spring}
      >
        {/* Fill */}
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: fillPercent,
          }}
          initial={false}
          animate={{
            backgroundColor: hovered ? '#ea580c' : 'var(--theme-text, #0a0a0a)',
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Step dots — only on hover, hide current */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: i * STEP_WIDTH - 2,
            width: 4,
            height: 4,
            backgroundColor: i < step ? 'rgba(255,255,255,0.6)' : 'var(--theme-muted, #a1a1aa)',
          }}
          initial={false}
          animate={{
            opacity: hovered && step !== i ? 0.5 : 0,
            scale: hovered && step !== i ? 1 : 0,
          }}
          transition={spring}
        />
      ))}
    </div>
  )
}
