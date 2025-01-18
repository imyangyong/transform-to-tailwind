import { getCustomVal, isUnit } from '../utils'

export const list: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['list-style', val => `[list-style:${getCustomVal(val)}]`],
  ['list-style-image', val => `[list-style-image:${getCustomVal(val)}]`],
  [
    'list-style-position',
    val =>
      ({
        inside: 'list-inside',
        outside: 'list-outside',
      }[val] ?? `[list-style-position:${getCustomVal(val)}]`),
  ],
  [
    'list-style-type',
    val =>
      ({
        none: 'list-none',
        disc: 'list-disc',
        decimal: 'list-decimal',
      }[val] ?? `list-[${getCustomVal(val)}]`),
  ],
  [
    'order',
    val =>
      ({
        '0': 'order-none',
        '1': 'order-1',
        '2': 'order-2',
        '3': 'order-3',
        '4': 'order-4',
        '5': 'order-5',
        '6': 'order-6',
        '7': 'order-7',
        '8': 'order-8',
        '9': 'order-9',
        '10': 'order-10',
        '11': 'order-11',
        '12': 'order-12',
        '9999': 'order-last',
        '-9999': 'order-first',
      }[val] ?? (isUnit(val) ? `order-[${val}]` : '')),
  ],
  [
    'table-layout',
    {
      auto: 'table-auto',
      fixed: 'table-fixed',
    },
  ],
]
