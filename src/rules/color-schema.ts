import { getCustomVal } from '../utils'

export const colorSchema: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['color-scheme', val => `[color-scheme:${getCustomVal(val)}]`],
]
