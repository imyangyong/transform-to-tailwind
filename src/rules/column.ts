import { getCustomVal, isColor, isUnit } from '../utils'

export const column: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['column-count', val => `[column-count:${getCustomVal(val)}]`],
  [
    'column-fill',
    {
      balance: '[column-fill:balance]',
      auto: '[column-fill:auto]',
      initial: '[column-fill:initial]',
    },
  ],
  [
    'column-gap',
    val => ({ 0: 'gap-x-0' }[val] ?? (isUnit(val) ? `gap-x-[${val}]` : '')),
  ],
  ['column-rule', val => `[column-rule:${getCustomVal(val)}]`],
  [
    'column-rule-color',
    val =>
      isColor(val, true) ? `[column-rule-color:${getCustomVal(val)}]` : '',
  ],
  [
    'column-rule-style',
    {
      none: '[column-rule-style:none]',
      hidden: '[column-rule-style:hidden]',
      dotted: '[column-rule-style:dotted]',
      dashed: '[column-rule-style:dashed]',
      solid: '[column-rule-style:solid]',
      double: '[column-rule-style:double]',
      groove: '[column-rule-style:groove]',
      ridge: '[column-rule-style:ridge]',
      inset: '[column-rule-style:inset]',
      outset: '[column-rule-style:outset]',
      initial: '[column-rule-style:initial]',
    },
  ],
  [
    'column-rule-width',
    val => (isUnit(val) ? `[column-rule-width:${val}]` : ''),
  ],
  ['column-span', val => `[column-span:${getCustomVal(val)}]`],
  ['column-width', val => (isUnit(val) ? `[column-width:${val}]` : '')],
  ['columns', val => `[columns:${getCustomVal(val)}]`],
]
