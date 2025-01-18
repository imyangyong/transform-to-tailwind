import { getCustomVal, isColor, isUnit } from '../utils'

export const icon: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['icon', val => `[icon:${getCustomVal(val)}]`],
  [
    'fill',
    val =>
      ({ currentColor: 'fill-current', currentcolor: 'fill-current' }[val]
        ?? (isColor(val, true) ? `fill-[${getCustomVal(val)}]` : '')),
  ],
  [
    'stroke',
    val =>
      ({
        currentColor: 'stroke-current',
        currentcolor: 'stroke-current',
      }[val] ?? (isColor(val, true) ? `stroke-[${getCustomVal(val)}]` : '')),
  ],
  ['stroke-width', val => (isUnit(val) ? `stroke-[${val}]` : '')],
]
