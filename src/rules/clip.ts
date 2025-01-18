import { getCustomVal } from '../utils'

export const clip: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['clip', val => `[clip:${getCustomVal(val)}]`],
  ['clip-path', val => `[clip-path:${getCustomVal(val)}]`],
]
