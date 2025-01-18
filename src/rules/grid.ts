import { getCustomVal, isUnit } from '../utils'

export const grid: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['grid', val => `[grid:${getCustomVal(val)}]`],
  ['grid-area', val => `[grid-area:${getCustomVal(val)}]`],
  [
    'grid-auto-columns',
    val =>
      ({
        'auto': 'auto-cols-auto',
        'min-content': 'auto-cols-min',
        'max-content': 'auto-cols-max',
        'minmax(0, 1fr)': 'auto-cols-fr',
      }[val] ?? `auto-cols-[${getCustomVal(val)}]`),
  ],
  [
    'grid-auto-flow',
    val =>
      ({
        row: 'grid-flow-row',
        column: 'grid-flow-col',
        row_dense: 'grid-flow-row-dense',
        column_dense: 'grid-flow-col-dense',
      }[getCustomVal(val)] ?? ''),
  ],
  [
    'grid-auto-rows',
    val =>
      ({
        'auto': 'auto-rows-auto',
        'min-content': 'auto-rows-min',
        'max-content': 'auto-rows-max',
        'minmax(0, 1fr)': 'auto-rows-fr',
      }[val] ?? `auto-rows-[${getCustomVal(val)}]`),
  ],
  [
    'grid-column',
    val =>
      ({
        'auto': 'col-auto',
        'span 1 / span 1': 'col-span-1',
        'span 2 / span 2': 'col-span-2',
        'span 3 / span 3': 'col-span-3',
        'span 4 / span 4': 'col-span-4',
        'span 5 / span 5': 'col-span-5',
        'span 6 / span 6': 'col-span-6',
        'span 7 / span 7': 'col-span-7',
        'span 8 / span 8': 'col-span-8',
        'span 9 / span 9': 'col-span-9',
        'span 10 / span 10': 'col-span-10',
        'span 11 / span 11': 'col-span-11',
        'span 12 / span 12': 'col-span-12',
        '1 / -1': 'col-span-full',
      }[val] ?? `col-[${getCustomVal(val)}]`),
  ],
  [
    'grid-column-end',
    val =>
      ({
        1: 'col-end-1',
        2: 'col-end-2',
        3: 'col-end-3',
        4: 'col-end-4',
        5: 'col-end-5',
        6: 'col-end-6',
        7: 'col-end-7',
        8: 'col-end-8',
        9: 'col-end-9',
        10: 'col-end-10',
        11: 'col-end-11',
        12: 'col-end-12',
        13: 'col-end-13',
        auto: 'col-end-auto',
      }[val] ?? `col-end-[${getCustomVal(val)}]`),
  ],
  [
    'grid-column-gap',
    val => ({ 0: 'gap-x-0' }[val] ?? (isUnit(val) ? `gap-x-[${val}]` : '')),
  ],
  [
    'grid-column-start',
    val =>
      ({
        1: 'col-start-1',
        2: 'col-start-2',
        3: 'col-start-3',
        4: 'col-start-4',
        5: 'col-start-5',
        6: 'col-start-6',
        7: 'col-start-7',
        8: 'col-start-8',
        9: 'col-start-9',
        10: 'col-start-10',
        11: 'col-start-11',
        12: 'col-start-12',
        13: 'col-start-13',
        auto: 'col-start-auto',
      }[val] ?? `col-start-[${getCustomVal(val)}]`),
  ],
  [
    'grid-gap',
    val => ({ 0: 'gap-0' }[val] ?? (isUnit(val) ? `gap-[${val}]` : '')),
  ],
  [
    'grid-row',
    val =>
      ({
        'auto': 'row-auto',
        'span 1 / span 1': 'row-span-1',
        'span 2 / span 2': 'row-span-2',
        'span 3 / span 3': 'row-span-3',
        'span 4 / span 4': 'row-span-4',
        'span 5 / span 5': 'row-span-5',
        'span 6 / span 6': 'row-span-6',
        '1 / -1': 'row-span-full',
      }[val] ?? `row-[${getCustomVal(val)}]`),
  ],
  [
    'grid-row-end',
    val =>
      ({
        1: 'row-end-1',
        2: 'row-end-2',
        3: 'row-end-3',
        4: 'row-end-4',
        5: 'row-end-5',
        6: 'row-end-6',
        7: 'row-end-7',
        auto: 'row-end-auto',
      }[val] ?? `row-end-[${getCustomVal(val)}]`),
  ],
  [
    'grid-row-gap',
    val => ({ 0: 'gap-y-0' }[val] ?? (isUnit(val) ? `gap-y-[${val}]` : '')),
  ],
  [
    'grid-row-start',
    val =>
      ({
        1: 'row-start-1',
        2: 'row-start-2',
        3: 'row-start-3',
        4: 'row-start-4',
        5: 'row-start-5',
        6: 'row-start-6',
        7: 'row-start-7',
        auto: 'row-start-auto',
      }[val] ?? `row-start-[${getCustomVal(val)}]`),
  ],
  ['grid-rows', val => `[grid-rows:${getCustomVal(val)}]`],
  ['grid-template', val => `[grid-template:${getCustomVal(val)}]`],
  [
    'grid-template-areas',
    val => `[grid-template-areas:${getCustomVal(val)}]`,
  ],
  [
    'grid-template-columns',
    val =>
      ({
        'repeat(1,minmax(0,1fr))': 'grid-cols-1',
        'repeat(2,minmax(0,1fr))': 'grid-cols-2',
        'repeat(3,minmax(0,1fr))': 'grid-cols-3',
        'repeat(4,minmax(0,1fr))': 'grid-cols-4',
        'repeat(5,minmax(0,1fr))': 'grid-cols-5',
        'repeat(6,minmax(0,1fr))': 'grid-cols-6',
        'repeat(7,minmax(0,1fr))': 'grid-cols-7',
        'repeat(8,minmax(0,1fr))': 'grid-cols-8',
        'repeat(9,minmax(0,1fr))': 'grid-cols-9',
        'repeat(10,minmax(0,1fr))': 'grid-cols-10',
        'repeat(11,minmax(0,1fr))': 'grid-cols-11',
        'repeat(12,minmax(0,1fr))': 'grid-cols-12',
        'none': 'grid-cols-none',
      }[getCustomVal(val).replace(/_/g, '')]
      ?? `grid-cols-[${getCustomVal(val)}]`),
  ],
  [
    'grid-template-rows',
    val =>
      ({
        'repeat(1,minmax(0,1fr))': 'grid-rows-1',
        'repeat(2,minmax(0,1fr))': 'grid-rows-2',
        'repeat(3,minmax(0,1fr))': 'grid-rows-3',
        'repeat(4,minmax(0,1fr))': 'grid-rows-4',
        'repeat(5,minmax(0,1fr))': 'grid-rows-5',
        'repeat(6,minmax(0,1fr))': 'grid-rows-6',
        'none': 'grid-rows-none',
      }[getCustomVal(val).replace(/_/g, '')]
      ?? `grid-rows-[${getCustomVal(val)}]`),
  ],
  [
    'row-gap',
    val => ({ 0: 'gap-y-0' }[val] ?? (isUnit(val) ? `gap-y-[${val}]` : '')),
  ],
]
