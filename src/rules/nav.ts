import { getCustomVal, isUnit } from '../utils'

export const nav: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['nav-down', val => `[nav-down:${getCustomVal(val)}]`],
  ['nav-index', val => (isUnit(val) ? `[nav-index:${val}]` : '')],
  ['nav-left', val => (isUnit(val) ? `[nav-left:${val}]` : '')],
  ['nav-right', val => (isUnit(val) ? `[nav-right:${val}]` : '')],
  ['nav-up', val => (isUnit(val) ? `[nav-up:${val}]` : '')],
]
