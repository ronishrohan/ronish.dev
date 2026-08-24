declare module 'culori' {
  export type OklchColor = {
    mode: 'oklch'
    l: number
    c: number
    h: number
  }

  export function clampRgb<T>(color: T): T
  export function formatHex(color: unknown): string
  export function wcagContrast(foreground: string, background: string): number
}
