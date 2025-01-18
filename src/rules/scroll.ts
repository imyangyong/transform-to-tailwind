import { getCustomVal, isUnit } from '../utils'

export const scroll: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['scroll-snap-align', val => `[scroll-snap-align:${getCustomVal(val)}]`],
  ['scroll-snap-stop', val => `[scroll-snap-stop:${getCustomVal(val)}]`],
  ['scroll-snap-type', val => `[scroll-snap-type:${getCustomVal(val)}]`],
  ['scrollbar-width', val => (isUnit(val) ? `[scrollbar-width:${val}]` : '')],
]
