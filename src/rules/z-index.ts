import { getCustomVal, isUnit } from '../utils'

export const zIndex: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'isolation',
    {
      isolate: 'isolate',
      auto: 'isolation-auto',
    },
  ],
  [
    'mix-blend-mode',
    {
      'normal': 'mix-blend-normal',
      'multiply': 'mix-blend-multiply',
      'screen': 'mix-blend-screen',
      'overlay': 'mix-blend-overlay',
      'darken': 'mix-blend-darken',
      'lighten': 'mix-blend-lighten',
      'color-dodge': 'mix-blend-color-dodge',
      'color-burn': 'mix-blend-color-burn',
      'hard-light': 'mix-blend-hard-light',
      'soft-light': 'mix-blend-soft-light',
      'difference': 'mix-blend-difference',
      'exclusion': 'mix-blend-exclusion',
      'hue': 'mix-blend-hue',
      'saturation': 'mix-blend-saturation',
      'color': 'mix-blend-color',
      'luminosity': 'mix-blend-luminosity',
    },
  ],
  ['perspective', val => (isUnit(val) ? `[perspective:${val}]` : '')],
  ['perspective-origin', val => `[perspective-origin:${getCustomVal(val)}]`],
  [
    'z-index',
    val =>
      ({
        0: 'z-0',
        10: 'z-10',
        20: 'z-20',
        30: 'z-30',
        40: 'z-40',
        50: 'z-50',
        auto: 'z-auto',
      }[val] ?? `z-[${val}]`),
  ],
]
