import { getCustomVal } from '../utils'

export const visible: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'overflow',
    {
      auto: 'overflow-auto',
      hidden: 'overflow-hidden',
      visible: 'overflow-visible',
      scroll: 'overflow-scroll',
    },
  ],
  ['overflow-anchor', val => `[overflow-anchor:${getCustomVal(val)}]`],
  [
    'overflow-wrap',
    val =>
      ({ 'break-word': 'break-words' }[val]
        ?? `[overflow-wrap:${getCustomVal(val)}]`),
  ],
  [
    'overflow-x',
    {
      auto: 'overflow-x-auto',
      hidden: 'overflow-x-hidden',
      visible: 'overflow-x-visible',
      scroll: 'overflow-x-scroll',
    },
  ],
  [
    'overflow-y',
    {
      auto: 'overflow-y-auto',
      hidden: 'overflow-y-hidden',
      visible: 'overflow-y-visible',
      scroll: 'overflow-y-scroll',
    },
  ],
  [
    'overscroll-behavior',
    {
      auto: 'overscroll-auto',
      contain: 'overscroll-contain',
      none: 'overscroll-none',
    },
  ],
  [
    'overscroll-behavior-x',
    {
      auto: 'overscroll-x-auto',
      contain: 'overscroll-x-contain',
      none: 'overscroll-x-none',
    },
  ],
  [
    'overscroll-behavior-y',
    {
      auto: 'overscroll-y-auto',
      contain: 'overscroll-y-contain',
      none: 'overscroll-y-none',
    },
  ],
  [
    'visibility',
    {
      visible: 'visible',
      hidden: 'invisible',
      collapse: 'collapse',
    },
  ],
]
