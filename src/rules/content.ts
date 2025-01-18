import { getCustomVal } from '../utils'

export const content: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['content', val => `content-[${getCustomVal(val)}]`],
  ['content-visibility', val => `[content-visibility:${getCustomVal(val)}]`],
]
