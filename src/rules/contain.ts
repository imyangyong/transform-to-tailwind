import { getCustomVal } from '../utils'

export const contain: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'contain-intrinsic-size',
    val => `[contain-intrinsic-size:${getCustomVal(val)}]`,
  ],
]
