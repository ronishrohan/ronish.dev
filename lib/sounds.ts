import type { SoundDefinition } from '@web-kits/audio'

export const thock: SoundDefinition = {
  layers: [
    {
      source: { type: 'sine', frequency: { start: 200, end: 80 } },
      envelope: { decay: 0.06 },
      gain: 0.5,
    },
    {
      source: { type: 'noise', color: 'brown' },
      envelope: { decay: 0.03 },
      gain: 0.3,
      filter: { type: 'lowpass', frequency: 2000 },
    },
  ],
}

export const thockBack: SoundDefinition = {
  layers: [
    {
      source: { type: 'sine', frequency: { start: 300, end: 150 } },
      envelope: { decay: 0.05 },
      gain: 0.4,
    },
    {
      source: { type: 'noise', color: 'pink' },
      envelope: { decay: 0.025 },
      gain: 0.2,
      filter: { type: 'lowpass', frequency: 1500 },
    },
  ],
}
