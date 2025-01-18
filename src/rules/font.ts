import { getCustomVal, getFontSizeDefaultVal, isUnit } from '../utils'

export const font: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['font', val => `[font:${getCustomVal(val)}]`],
  ['font-family', val => `font-[${getCustomVal(val)}]`],
  ['font-size', val => (isUnit(val) ? getFontSizeDefaultVal(val) : '')],
  [
    'font-size-adjust',
    val => (isUnit(val) ? `[font-size-adjust:${val}]` : ''),
  ],
  [
    '-webkit-font-smoothing',
    {
      antialiased: 'antialiased',
      auto: 'subpixel-antialiased',
    },
  ],
  [
    '-moz-osx-font-smoothing',
    {
      grayscale: 'antialiased',
      auto: 'subpixel-antialiased',
    },
  ],
  [
    'font-stretch',
    {
      'wider': '[font-stretch:wider]',
      'narrower': '[font-stretch:narrower]',
      'ultra-condensed': '[font-stretch:ultra-condensed]',
      'extra-condensed': '[font-stretch:extra-condensed]',
      'condensed': '[font-stretch:condensed]',
      'semi-condensed': '[font-stretch:semi-condensed]',
      'normal': '[font-stretch:normal]',
      'semi-expanded': '[font-stretch:semi-expanded]',
      'expanded': '[font-stretch:expanded]',
      'extra-expanded': '[font-stretch:extra-expanded]',
      'ultra-expanded': '[font-stretch:ultra-expanded]',
      'inherit': '[font-stretch:inherit]',
      'initial': '[font-stretch:initial]',
    },
  ],
  [
    'font-style',
    {
      italic: 'italic',
      normal: 'not-italic',
    },
  ],
  [
    'font-variant',
    {
      'normal': '[font-variant:normal]',
      'small-caps': '[font-variant:small-caps]',
      'inherit': '[font-variant:inherit]',
      'initial': '[font-variant:initial]',
    },
  ],
  [
    'font-variant-numeric',
    {
      'normal': 'normal-nums',
      'ordinal': 'ordinal',
      'slashed-zero': 'slashed-zero',
      'lining-nums': 'lining-nums',
      'oldstyle-nums': 'oldstyle-nums',
      'proportional-nums': 'proportional-nums',
      'tabular-nums': 'tabular-nums',
      'diagonal-fractions': 'diagonal-fractions',
      'stacked-fractions': 'stacked-fractions',
    },
  ],
  [
    'font-variation-settings',
    val => `[font-variation-settings:${getCustomVal(val)}]`,
  ],
  ['font-weight', val => (isUnit(val) ? `font-[${val}]` : '')],
]
