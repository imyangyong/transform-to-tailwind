import { getCustomVal } from '../utils'

export const target: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['target', val => `[target:${getCustomVal(val)}]`],
  ['target-name', val => `[target-name:${getCustomVal(val)}]`],
  [
    'target-new',
    {
      window: '[target-new:window]',
      tab: '[target-new:tab]',
      none: '[target-new:none]',
      initial: '[target-new:initial]',
    },
  ],
  [
    'target-position',
    {
      above: '[target-position:above]',
      behind: '[target-position:behind]',
      front: '[target-position:front]',
      back: '[target-position:back]',
      initial: '[target-position:initial]',
    },
  ],
]
