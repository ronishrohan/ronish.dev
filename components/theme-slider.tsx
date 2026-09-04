'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState, useCallback } from 'react'
import { useSound } from '@web-kits/audio/react'
import type { SoundDefinition } from '@web-kits/audio'
import { DEFAULT_THEME_STEP, themes } from '@/lib/themes'

const ticks: SoundDefinition[] = [
  { source: { type: 'sine', frequency: { start: 800, end: 500 } }, envelope: { decay: 0.03 }, gain: 0.25 },
  { source: { type: 'sine', frequency: { start: 1000, end: 650 } }, envelope: { decay: 0.03 }, gain: 0.25 },
  { source: { type: 'sine', frequency: { start: 1200, end: 800 } }, envelope: { decay: 0.03 }, gain: 0.25 },
  { source: { type: 'sine', frequency: { start: 1500, end: 1000 } }, envelope: { decay: 0.03 }, gain: 0.25 },
  { source: { type: 'sine', frequency: { start: 1800, end: 1200 } }, envelope: { decay: 0.03 }, gain: 0.25 },
]

const TRACK_WIDTH = 80
const STEPS = 5
const STEP_WIDTH = TRACK_WIDTH / (STEPS - 1)

function applyTheme(index: number) {
  const t = themes[index]
  const root = document.documentElement
  root.setAttribute('data-theme', t.name)
  root.setAttribute('data-theme-step', String(index))
  root.style.setProperty('--theme-slider-fill', `${index * 25}%`)
  root.style.setProperty('--theme-bg', t.bg)
  root.style.setProperty('--theme-text', t.text)
  root.style.setProperty('--theme-muted', t.muted)
  root.style.setProperty('--theme-border', t.border)
  root.style.setProperty('--theme-card-hover', t.cardHover)
  root.style.setProperty('--theme-accent', t.accent)
  root.style.setProperty('--theme-on-accent', t.onAccent)
  root.style.setProperty('--theme-on-accent-muted', t.onAccentMuted)
  root.style.setProperty('--theme-code-bg', t.codeBg)
  root.style.setProperty('--theme-code-border', t.codeBorder)
  root.style.setProperty('--theme-selection', t.selection)
  root.style.setProperty('--theme-prose', t.prose)
  root.style.setProperty('--postcard-bg', t.postcardBg)
}

export function ThemeSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(DEFAULT_THEME_STEP)
  const [hovered, setHovered] = useState(false)
  const dragging = useRef(false)
  const startX = useRef(0)
  const startStep = useRef(0)
  const baseHeight = useMotionValue(8)
  const hoverHeight = useSpring(baseHeight, { stiffness: 400, damping: 25 })
  const pullDistance = useMotionValue(0)
  const elasticPull = useSpring(pullDistance, { stiffness: 380, damping: 10, mass: 0.45 })
  const elasticWidth = useTransform(elasticPull, (distance) => (
    TRACK_WIDTH + Math.min(Math.max(0, distance) * 0.2, 16)
  ))
  const elasticHeight = useTransform([hoverHeight, elasticPull], ([height, distance]) => (
    Number(height) - Math.min(Math.max(0, Number(distance)) * 0.1, 8)
  ))
  const [pullSide, setPullSide] = useState<'left' | 'right'>('right')

  useEffect(() => {
    const savedStep = Number(document.documentElement.getAttribute('data-theme-step'))
    const initialStep = Number.isInteger(savedStep) && savedStep >= 0 && savedStep < STEPS ? savedStep : DEFAULT_THEME_STEP
    setStep(initialStep)
    applyTheme(initialStep)
  }, [])

  const playTick0 = useSound(ticks[0])
  const playTick1 = useSound(ticks[1])
  const playTick2 = useSound(ticks[2])
  const playTick3 = useSound(ticks[3])
  const playTick4 = useSound(ticks[4])
  const playTicks = [playTick0, playTick1, playTick2, playTick3, playTick4]

  const snapTo = useCallback((index: number, sound = false) => {
    const clamped = Math.max(0, Math.min(STEPS - 1, index))
    setStep(clamped)
    applyTheme(clamped)
    if (sound) playTicks[clamped]()
    localStorage.setItem('theme-step', String(clamped))
  }, [playTicks])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const savedStep = Number(document.documentElement.getAttribute('data-theme-step'))
    const currentStep = Number.isInteger(savedStep) ? savedStep : step
    dragging.current = true
    startX.current = e.clientX
    startStep.current = currentStep
    setStep(currentStep)
    setHovered(true)
    baseHeight.set(20)
    pullDistance.set(0)
    setPullSide('right')
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [step, baseHeight, pullDistance])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return
    const delta = e.clientX - startX.current
    const position = startStep.current * STEP_WIDTH + delta
    const leftOverflow = Math.max(0, -position)
    const rightOverflow = Math.max(0, position - TRACK_WIDTH)
    const overflow = Math.max(leftOverflow, rightOverflow)
    pullDistance.set(overflow)
    if (leftOverflow > 0) setPullSide('left')
    else if (rightOverflow > 0) setPullSide('right')
    const stepDelta = Math.round(delta / STEP_WIDTH)
    const newStep = startStep.current + stepDelta
    const clamped = Math.max(0, Math.min(STEPS - 1, newStep))
    if (clamped !== step) {
      snapTo(clamped, true)
    }
  }, [step, snapTo, pullDistance])

  const didDrag = useRef(false)

  const handlePointerUp = useCallback(() => {
    if (dragging.current && startStep.current !== step) {
      didDrag.current = true
    }
    dragging.current = false
    baseHeight.set(8)
    pullDistance.set(0)
    setHovered(false)
  }, [step, baseHeight, pullDistance])

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
      className="relative flex touch-none select-none items-center justify-center cursor-grab active:cursor-grabbing"
      style={{ width: TRACK_WIDTH, height: 28, padding: '4px 0', touchAction: 'none' }}
      onClick={handleTrackClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => {
        const savedStep = Number(document.documentElement.getAttribute('data-theme-step'))
        if (Number.isInteger(savedStep)) setStep(savedStep)
        baseHeight.set(20)
        setHovered(true)
      }}
      onMouseLeave={() => {
        baseHeight.set(8)
        setHovered(false)
      }}
    >
      {/* Track bg */}
      <motion.div
        className="absolute left-0 rounded-full overflow-hidden"
        style={{
          width: elasticWidth,
          height: elasticHeight,
          left: pullSide === 'left' ? '100%' : 0,
          x: pullSide === 'left' ? '-100%' : 0,
          backgroundColor: 'var(--theme-border, #d4d4d8)',
        }}
        initial={false}
        transition={spring}
      >
        {/* Fill */}
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: 'var(--theme-slider-fill, 25%)',
            transition: 'width 300ms cubic-bezier(0.23, 1, 0.32, 1)',
          }}
          initial={false}
          animate={{
            backgroundColor: hovered ? 'var(--theme-accent)' : 'var(--theme-text)',
          }}
          transition={{ duration: 0.15 }}
        />

        {/* Step dots follow the track's live width without scaling. */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 rounded-full"
            style={{
              left: `${i * 25}%`,
              x: '-50%',
              y: '-50%',
              width: 4,
              height: 4,
              backgroundColor: i < step ? 'var(--theme-on-accent-muted)' : 'var(--theme-muted)',
            }}
            initial={false}
            animate={{
              opacity: hovered && step !== i ? 0.5 : 0,
              scale: hovered && step !== i ? 1 : 0,
            }}
            transition={spring}
          />
        ))}
      </motion.div>
    </div>
  )
}
