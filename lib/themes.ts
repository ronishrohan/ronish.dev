import { clampRgb, formatHex, wcagContrast } from 'culori'

export type Theme = {
  name: string
  bg: string
  text: string
  muted: string
  border: string
  cardHover: string
  accent: string
  onAccent: string
  onAccentMuted: string
  codeBg: string
  codeBorder: string
  selection: string
  prose: string
  postcardBg: string
}

const DEFAULT_THEME_STEP = 3

function createRandom(seed: number) {
  return () => {
    seed |= 0
    seed = seed + 0x6d2b79f5 | 0
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

function oklchHex(lightness: number, chroma: number, hue: number) {
  return formatHex(clampRgb({ mode: 'oklch', l: lightness, c: chroma, h: hue }))
}

export function createThemes(seed = 0x7296a5): Theme[] {
  const random = createRandom(0x7296a5)
  const accentHue = random() * 360
  const accent = oklchHex(0.62, 0.19, accentHue)
  const darkAccent = oklchHex(0.7, 0.16, accentHue)
  const onAccent = wcagContrast(accent, '#ffffff') >= 3 ? '#ffffff' : '#111111'
  const backgroundHue = accentHue

  const lightThemes = [
    { name: 'dawn', l: 0.96, c: 0.025 },
    { name: 'morning', l: 0.975, c: 0.014 },
    { name: 'noon', l: 0.995, c: 0.006 },
  ]
  const darkThemes = [
    { name: 'evening', l: 0.14, c: 0.018 },
    { name: 'night', l: 0.06, c: 0.012 },
  ]

  return [
    ...lightThemes.map(({ name, l, c }): Theme => ({
      name, bg: oklchHex(l, c, backgroundHue), text: oklchHex(0.2, 0.015, backgroundHue),
      muted: oklchHex(0.5, 0.02, backgroundHue), border: oklchHex(Math.max(0.82, l - 0.1), 0.018, backgroundHue),
      cardHover: accent, accent, onAccent,
      onAccentMuted: onAccent === '#ffffff' ? 'rgba(255,255,255,0.7)' : 'rgba(17,17,17,0.65)',
      codeBg: oklchHex(Math.max(0.91, l - 0.045), 0.018, backgroundHue), codeBorder: oklchHex(Math.max(0.82, l - 0.1), 0.018, backgroundHue),
      selection: accent, prose: oklchHex(0.3, 0.018, backgroundHue), postcardBg: oklchHex(Math.max(0.88, l - 0.08), 0.02, backgroundHue),
    })),
    ...darkThemes.map(({ name, l, c }): Theme => ({
      name, bg: oklchHex(l, c, backgroundHue), text: oklchHex(0.91, 0.012, backgroundHue),
      muted: oklchHex(0.66, 0.018, backgroundHue), border: oklchHex(0.28, 0.018, backgroundHue),
      cardHover: darkAccent, accent: darkAccent, onAccent: '#ffffff', onAccentMuted: 'rgba(255,255,255,0.7)',
      codeBg: oklchHex(Math.min(0.24, l + 0.06), 0.018, backgroundHue), codeBorder: oklchHex(0.28, 0.018, backgroundHue),
      selection: darkAccent, prose: oklchHex(0.76, 0.012, backgroundHue), postcardBg: oklchHex(Math.min(0.24, l + 0.08), 0.018, backgroundHue),
    })),
  ].map((theme, index) => ({
    ...theme,
    cardHover: index < 3 ? accent : darkAccent,
    accent: index < 3 ? accent : darkAccent,
    selection: index < 3 ? accent : darkAccent,
  }))
}

export const themes = createThemes()
export { DEFAULT_THEME_STEP }

declare global {
  interface Window {
    __ronishThemes?: Theme[]
  }
}
