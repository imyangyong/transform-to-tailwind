import { isUnit } from '../utils'

export const color: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'opacity',
    val =>
      ({
        0: 'opacity-0',
        1: 'opacity-100',
        0.05: 'opacity-5',
        0.1: 'opacity-10',
        0.2: 'opacity-20',
        0.25: 'opacity-25',
        0.3: 'opacity-30',
        0.4: 'opacity-40',
        0.5: 'opacity-50',
        0.6: 'opacity-60',
        0.7: 'opacity-70',
        0.75: 'opacity-75',
        0.8: 'opacity-80',
        0.9: 'opacity-90',
        0.95: 'opacity-95',
      }[val] ?? (isUnit(val) ? `opacity-[${val}]` : '')),
  ],
]
