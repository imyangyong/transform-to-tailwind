import { config } from '../config'
import { CustomSelect } from '../types'
import { getRemDefaultVal, getUnitMetacharactersVal, isUnit } from '../utils'

export const size: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'height',
    val =>
      isUnit(val)
        ? `h-${getUnitMetacharactersVal(val, [CustomSelect.vw]) || `[${val}]`}`
        : '',
  ],
  [
    'width',
    val =>
      isUnit(val)
        ? `w-${
          (config.useAllDefaultValues && getRemDefaultVal(val))
          || getUnitMetacharactersVal(val, [CustomSelect.vh])
          || `[${val}]`
        }`
        : '',
  ],
  ['logical-height', val => (isUnit(val) ? `[logical-height:${val}]` : '')],
  ['logical-width', val => (isUnit(val) ? `[logical-width:${val}]` : '')],
  [
    'max-height',
    val =>
      isUnit(val)
        ? {
            '0px': 'max-h-0',
            '0': 'max-h-0',
            '100%': 'max-h-full',
            '100vh': 'max-h-screen',
            'min-content': 'max-h-min',
            'max-content': 'max-h-max',
            'fit-content': 'max-h-fit',
          }[val] ?? `max-h-[${val}]`
        : '',
  ],
  [
    'max-width',
    val =>
      isUnit(val)
        ? {
            '0px': 'max-w-0',
            '0': 'max-w-0',
            'none': 'max-w-none',
            '100%': 'max-w-full',
            'min-content': 'max-w-min',
            'max-content': 'max-w-max',
            'fit-content': 'max-w-fit',
          }[val] ?? `max-w-[${val}]`
        : '',
  ],
  [
    'min-height',
    (val) => {
      return isUnit(val)
        ? {
            '0': 'min-h-0',
            '0px': 'min-h-0',
            '100%': 'min-h-full',
            '100vh': 'min-h-screen',
            'min-content': 'min-h-min',
            'max-content': 'min-h-max',
            'fit-content': 'min-h-fit',
          }[val] ?? `min-h-[${val}]`
        : ''
    },
  ],
  [
    'min-width',
    val =>
      isUnit(val)
        ? {
            '0px': 'min-w-0',
            '0': 'min-w-0',
            '100%': 'min-w-full',
            'min-content': 'min-w-min',
            'max-content': 'min-w-max',
            'fit-content': 'min-w-fit',
          }[val] ?? `min-w-[${val}]`
        : '',
  ],
]
