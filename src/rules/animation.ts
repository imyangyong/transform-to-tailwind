import { getCustomVal } from '../utils'

export const animation: [string, (val: string) => string][] = [
  [
    'animation',
    val =>
      ({ none: 'animate-none' }[val] ?? `animate-[${getCustomVal(val)}]`),
  ],
  ['animation-delay', val => `[animation-delay:${getCustomVal(val)}]`],
  [
    'animation-direction',
    val => `[animation-direction:${getCustomVal(val)}]`,
  ],
  ['animation-duration', val => `[animation-duration:${getCustomVal(val)}]`],
  [
    'animation-fill-mode',
    val => `[animation-fill-mode:${getCustomVal(val)}]`,
  ],
  [
    'animation-iteration-count',
    val => `[animation-iteration-count:${getCustomVal(val)}]`,
  ],
  ['animation-name', val => `[animation-name:${getCustomVal(val)}]`],
  [
    'animation-play-state',
    val => `[animation-play-state:${getCustomVal(val)}]`,
  ],
  [
    'animation-timing-function',
    val => `[animation-timing-function:${getCustomVal(val)}]`,
  ],
]
