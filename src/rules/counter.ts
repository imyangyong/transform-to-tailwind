import { getCustomVal } from '../utils'

export const counter: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['counter-increment', val => `[content-increment:${getCustomVal(val)}]`],
  ['counter-reset', val => `[counter-reset:${getCustomVal(val)}]`],
  ['counter-set', val => `[counter-set:${getCustomVal(val)}]`],
]
