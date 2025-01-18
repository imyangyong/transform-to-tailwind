import { getCustomVal } from '../utils'

export const transition: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'transition',
    (val) => {
      if (val === 'none') {
        return 'transition-none'
      }
      return `[transition:${getCustomVal(val)}]`
    },
  ],
  [
    'transition-delay',
    (val) => {
      val = val.replace(
        /^([.\d]+)s$/,
        (_v, $1) => `${($1 * 1000).toFixed(6).replace(/\.?0+$/, '')}ms`,
      )
      return (
        {
          '75ms': 'delay-75',
          '100ms': 'delay-100',
          '150ms': 'delay-150',
          '200ms': 'delay-200',
          '300ms': 'delay-300',
          '500ms': 'delay-500',
          '700ms': 'delay-700',
          '1000ms': 'delay-1000',
        }[val]
        ?? (/^[.\d]+[ms]{1,2}$/.test(val) ? `delay-[${getCustomVal(val)}]` : '')
      )
    },
  ],
  [
    'transition-duration',
    (val) => {
      val = val.replace(
        /^([.\d]+)s$/,
        (_v, $1) => `${($1 * 1000).toFixed(6).replace(/\.?0+$/, '')}ms`,
      )
      return (
        {
          '75ms': 'duration-75',
          '100ms': 'duration-100',
          '150ms': 'duration-150',
          '200ms': 'duration-200',
          '300ms': 'duration-300',
          '500ms': 'duration-500',
          '700ms': 'duration-700',
          '1000ms': 'duration-1000',
        }[val]
        ?? (/^[.\d]+[ms]{1,2}$/.test(val) ? `duration-[${getCustomVal(val)}]` : '')
      )
    },
  ],
  [
    'transition-property',
    val => `[transition-property:${getCustomVal(val)}]`,
  ],
  [
    'transition-timing-function',
    (val) => {
      val = val.replace(/\s/g, '')
      return (
        {
          'linear': 'ease-linear',
          'cubic-bezier(0.4,0,1,1)': 'ease-in',
          'cubic-bezier(0,0,0.2,1)': 'ease-out',
          'cubic-bezier(0.4,0,0.2,1)': 'ease-in-out',
          'ease': 'ease-[ease]',
          'ease-in': 'ease-in',
          'ease-out': 'ease-out',
          'ease-in-out': 'ease-in-out',
        }[val]
        ?? (val.startsWith('cubic-bezier') ? `ease-[${getCustomVal(val)}]` : '')
      )
    },
  ],
]
