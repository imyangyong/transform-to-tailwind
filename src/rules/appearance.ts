import { getCustomVal } from '../utils'

export const appearance: [string, (val: string) => string][] = [
  [
    'appearance',
    val =>
      ({ none: 'appearance-none' }[val] ?? `[appearance:${getCustomVal(val)}]`),
  ],
]
