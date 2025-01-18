import { getCustomVal, isUnit } from '../utils'

export const flex: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'flex',
    val =>
      ({
        '1 1 0%': 'flex-1',
        '1 1 auto': 'flex-auto',
        '0 1 auto': 'flex-initial',
        'none': 'flex-none',
      }[val] ?? `flex-[${getCustomVal(val)}]`),
  ],
  ['flex-basis', val => (isUnit(val) ? `[flex-basis:${val}]` : '')],
  [
    'flex-direction',
    {
      'row': 'flex-row',
      'row-reverse': 'flex-row-reverse',
      'column': 'flex-col',
      'column-reverse': 'flex-col-reverse',
    },
  ],
  ['flex-flow', val => `[flex-flow:${getCustomVal(val)}]`],
  [
    'flex-grow',
    val =>
      isUnit(val)
        ? { 0: 'flex-grow-0', 1: 'flex-grow' }[val] ?? `flex-grow-[${val}]`
        : '',
  ],
  [
    'flex-shrink',
    val =>
      isUnit(val)
        ? { 0: 'flex-shrink-0', 1: 'flex-shrink' }[val]
        ?? `flex-shrink-[${val}]`
        : '',
  ],
  [
    'flex-wrap',
    {
      'wrap': 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
      'nowrap': 'flex-nowrap',
    },
  ],
  [
    'gap',
    val => ({ 0: 'gap-0' }[val] ?? (isUnit(val) ? `gap-[${val}]` : '')),
  ],
  [
    'justify-content',
    {
      'flex-start': 'justify-start',
      'flex-end': 'justify-end',
      'center': 'justify-center',
      'space-between': 'justify-between',
      'space-around': 'justify-around',
      'space-evenly': 'justify-evenly',
    },
  ],
  [
    'justify-items',
    {
      start: 'justify-items-start',
      end: 'justify-items-end',
      center: 'justify-items-center',
      stretch: 'justify-items-stretch',
    },
  ],
  [
    'justify-self',
    {
      auto: 'justify-self-auto',
      start: 'justify-self-start',
      end: 'justify-self-end',
      center: 'justify-self-center',
      stretch: 'justify-self-stretch',
    },
  ],
  [
    'place-content',
    {
      'center': 'place-content-center',
      'start': 'place-content-start',
      'end': 'place-content-end',
      'space-between': 'place-content-between',
      'space-around': 'place-content-around',
      'space-evenly': 'place-content-evenly',
      'stretch': 'place-content-stretch',
    },
  ],
  [
    'place-items',
    {
      start: 'place-items-start',
      end: 'place-items-end',
      center: 'place-items-center',
      stretch: 'place-items-stretch',
    },
  ],
  [
    'place-self',
    {
      auto: 'place-self-auto',
      start: 'place-self-start',
      end: 'place-self-end',
      center: 'place-self-center',
      stretch: 'place-self-stretch',
    },
  ],
  [
    'align-content',
    {
      'center': 'content-center',
      'flex-start': 'content-start',
      'flex-end': 'content-end',
      'space-between': 'content-between',
      'space-around': 'content-around',
      'space-evenly': 'content-evenly',
    },
  ],
  [
    'align-items',
    {
      'flex-start': 'items-start',
      'flex-end': 'items-end',
      'center': 'items-center',
      'baseline': 'items-baseline',
      'stretch': 'items-stretch',
    },
  ],
  [
    'align-self',
    {
      'auto': 'self-auto',
      'flex-start': 'self-start',
      'flex-end': 'self-end',
      'center': 'self-center',
      'stretch': 'self-stretch',
      'baseline': 'self-baseline',
    },
  ],
]
