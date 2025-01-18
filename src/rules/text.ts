import { getCustomVal, isColor, isUnit } from '../utils'

export const text: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'letter-spacing',
    val =>
      ({
        '-0.05em': 'tracking-tighter',
        '-0.025em': 'tracking-tight',
        '0em': 'tracking-normal',
        '0.025em': 'tracking-wide',
        '0.05em': 'tracking-wider',
        '0.1em': 'tracking-widest',
      }[val] ?? (isUnit(val) ? `tracking-[${val}]` : '')),
  ],
  [
    'line-height',
    val =>
      ({
        1: 'leading-none',
        2: 'leading-loose',
        1.25: 'leading-tight',
        1.375: 'leading-snug',
        1.5: 'leading-normal',
        1.625: 'leading-relaxed',
      }[val] ?? (isUnit(val) ? `leading-[${val}]` : '')),
  ],
  [
    'punctuation-trim',
    {
      'none': '[punctuation-trim:none]',
      'start': '[punctuation-trim:start]',
      'end': '[punctuation-trim:end]',
      'allow-end': '[punctuation-trim:allow-end]',
      'adjacent': '[punctuation-trim:adjacent]',
      'initial': '[punctuation-trim:initial]',
    },
  ],
  ['quotes', val => `[quotes:${getCustomVal(val)}]`],
  ['tab-size', val => (isUnit(val) ? `[tab-size:${val}]` : '')],
  [
    'text-align',
    {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      start: 'text-start',
      end: 'text-end',
      justify: 'text-justify',
    },
  ],
  [
    'text-align-last',
    {
      auto: '[text-align-last:auto]',
      left: '[text-align-last:left]',
      right: '[text-align-last:right]',
      center: '[text-align-last:center]',
      justify: '[text-align-last:justify]',
      start: '[text-align-last:start]',
      end: '[text-align-last:end]',
      initial: '[text-align-last:initial]',
      inherit: '[text-align-last:inherit]',
    },
  ],
  [
    'text-decoration',
    {
      'underline': 'underline',
      'line-through': 'line-through',
      'none': 'no-underline',
    },
  ],
  [
    'text-decoration-color',
    val =>
      isColor(val, true) ? `[text-decoration-color:${getCustomVal(val)}]` : '',
  ],
  [
    'text-decoration-line',
    {
      'none': '[text-decoration-line:none]',
      'underline': '[text-decoration-line:underline]',
      'overline': '[text-decoration-line:overline]',
      'line-through': '[text-decoration-line:line-through]',
      'initial': '[text-decoration-line:initial]',
      'inherit': '[text-decoration-line:inherit]',
    },
  ],
  [
    'text-decoration-skip-ink',
    val => `[text-decoration-skip-ink:${getCustomVal(val)}]`,
  ],
  [
    'text-decoration-style',
    {
      solid: '[text-decoration-style:solid]',
      double: '[text-decoration-style:double]',
      dotted: '[text-decoration-style:dotted]',
      dashed: '[text-decoration-style:dashed]',
      wavy: '[text-decoration-style:wavy]',
      initial: '[text-decoration-style:initial]',
      inherit: '[text-decoration-style:inherit]',
    },
  ],
  [
    'text-emphasis-color',
    val =>
      isColor(val, true) ? `[text-emphasis-color:${getCustomVal(val)}]` : '',
  ],
  [
    'text-emphasis-position',
    val => `[text-emphasis-position:${getCustomVal(val)}]`,
  ],
  [
    'text-emphasis-style',
    val => `[text-emphasis-style:${getCustomVal(val)}]`,
  ],
  ['text-indent', val => (isUnit(val) ? `[text-indent:${val}]` : '')],
  [
    'text-justify',
    {
      'auto': '[text-justify:auto]',
      'none': '[text-justify:none]',
      'inter-word': '[text-justify:inter-word]',
      'inter-ideograph': '[text-justify:inter-ideograph]',
      'inter-cluster': '[text-justify:inter-cluster]',
      'distribute': '[text-justify:distribute]',
      'kashida': '[text-justify:kashida]',
      'initial': '[text-justify:initial]',
    },
  ],
  ['text-orientation', val => `[text-orientation:${getCustomVal(val)}]`],
  ['text-outline', val => `[text-outline:${getCustomVal(val)}]`],
  [
    'text-overflow',
    val =>
      ({
        ellipsis: 'overflow-ellipsis',
        clip: 'overflow-clip',
      }[val] ?? `[text-overflow:${getCustomVal(val)}]`),
  ],
  ['text-shadow', val => `[text-shadow:${getCustomVal(val)}]`],
  [
    'text-transform',
    {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      none: 'normal-case',
    },
  ],
  [
    'text-underline-offset',
    val => `[text-underline-offset:${getCustomVal(val)}]`,
  ],
  [
    'text-underline-position',
    val => `[text-underline-position:${getCustomVal(val)}]`,
  ],
  [
    'text-wrap',
    {
      normal: '[text-wrap:normal]',
      none: '[text-wrap:none]',
      unrestricted: '[text-wrap:unrestricted]',
      suppress: '[text-wrap:suppress]',
      initial: '[text-wrap:initial]',
    },
  ],
  [
    'user-select',
    {
      none: 'select-none',
      text: 'select-text',
      all: 'select-all',
      auto: 'select-auto',
    },
  ],
  [
    'white-space',
    {
      'normal': 'whitespace-normal',
      'nowrap': 'whitespace-nowrap',
      'pre': 'whitespace-pre',
      'pre-line': 'whitespace-pre-line',
      'pre-wrap': 'whitespace-pre-wrap',
    },
  ],
  [
    'word-break',
    {
      'break-all': 'break-all',
      'normal': '[word-break:normal]',
      'keep-all': '[word-break:keep-all]',
      'initial': '[word-break:initial]',
    },
  ],
  ['word-spacing', val => (isUnit(val) ? `[word-spacing:${val}]` : '')],
  [
    'word-wrap',
    {
      'normal': '[word-wrap:normal]',
      'break-word': '[word-wrap:break-word]',
      'initial': '[word-wrap:initial]',
    },
  ],
  ['writing-mode', val => `[writing-mode:${getCustomVal(val)}]`],
  [
    'color',
    val =>
      ({
        transparent: 'text-transparent',
        currentColor: 'text-current',
        currentcolor: 'text-current',
      }[val] ?? (isColor(val, true) ? `text-[${getCustomVal(val)}]` : '')),
  ],
]
