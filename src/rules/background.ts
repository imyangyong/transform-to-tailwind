import { getCustomVal, isColor } from '../utils'

const bgAttachment: Record<string, string> = {
  fixed: 'bg-fixed',
  local: 'bg-local',
  scroll: 'bg-scroll',
}

const bgRepeat: Record<string, string> = {
  'repeat': 'bg-repeat',
  'no-repeat': 'bg-no-repeat',
  'repeat-x': 'bg-repeat-x',
  'repeat-y': 'bg-repeat-y',
  'round': 'bg-repeat-round',
  'space': 'bg-repeat-space',
}

export const background: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'background',
    (val) => {
      const legalConfig: Record<string, string> = {
        ...bgAttachment,
        ...bgRepeat,
        'transparent': 'bg-transparent',
        'currentColor': 'bg-current',
        'currentcolor': 'bg-current',
        'none': 'bg-none',
        'bottom': 'bg-bottom',
        'center': 'bg-center',
        'left': 'bg-left',
        'left bottom': 'bg-left-bottom',
        'left top': 'bg-left-top',
        'right': 'bg-right',
        'right bottom': 'bg-right-bottom',
        'right top': 'bg-right-top',
        'top': 'bg-top',
        'auto': 'bg-auto',
        'cover': 'bg-cover',
        'contain': 'bg-contain',
      }
      return legalConfig[val] ?? `bg-[${getCustomVal(val)}]`
    },
  ],
  [
    'background-attachment',
    bgAttachment,
  ],
  [
    'background-blend-mode',
    {
      'normal': 'bg-blend-normal',
      'multiply': 'bg-blend-multiply',
      'screen': 'bg-blend-screen',
      'overlay': 'bg-blend-overlay',
      'darken': 'bg-blend-darken',
      'lighten': 'bg-blend-lighten',
      'color-dodge': 'bg-blend-color-dodge',
      'color-burn': 'bg-blend-color-burn',
      'hard-light': 'bg-blend-hard-light',
      'soft-light': 'bg-blend-soft-light',
      'difference': 'bg-blend-difference',
      'exclusion': 'bg-blend-exclusion',
      'hue': 'bg-blend-hue',
      'saturation': 'bg-blend-saturation',
      'color': 'bg-blend-color',
      'luminosity': 'bg-blend-luminosity',
    },
  ],
  [
    'background-clip',
    {
      'border-box': 'bg-clip-border',
      'padding-box': 'bg-clip-padding',
      'content-box': 'bg-clip-content',
      'text': 'bg-clip-text',
    },
  ],
  [
    'background-color',
    val =>
      ({
        transparent: 'bg-transparent',
        currentColor: 'bg-current',
        currentcolor: 'bg-current',
      }[val] ?? (isColor(val, true) ? `bg-[${getCustomVal(val)}]` : '')),
  ],
  [
    'background-image',
    val => ({ none: 'bg-none' }[val] ?? `bg-[${getCustomVal(val)}]`),
  ],
  [
    'background-origin',
    {
      'border-box': 'bg-origin-border',
      'padding-box': 'bg-origin-padding',
      'content-box': 'bg-origin-content',
    },
  ],
  [
    'background-position',
    val =>
      ({
        'bottom': 'bg-bottom',
        'center': 'bg-center',
        'left': 'bg-left',
        'left bottom': 'bg-left-bottom',
        'left top': 'bg-left-top',
        'right': 'bg-right',
        'right bottom': 'bg-right-bottom',
        'right top': 'bg-right-top',
        'top': 'bg-top',
      }[val] ?? `bg-[${getCustomVal(val)}]`),
  ],
  [
    'background-repeat',
    bgRepeat,
  ],
  [
    'background-size',
    val =>
      ({
        auto: 'bg-auto',
        cover: 'bg-cover',
        contain: 'bg-contain',
      }[val] ?? `[background-size:${getCustomVal(val)}]`),
  ],
]
