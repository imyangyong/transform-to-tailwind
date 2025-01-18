import { CustomSelect } from '../types'
import { getCustomVal, getUnitMetacharactersVal, hasNegative, isUnit } from '../utils'

export const position: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'bottom',
    (val) => {
      const t = hasNegative(val)
      return isUnit(val)
        ? `${t[0]}bottom-${
          getUnitMetacharactersVal(t[1], [
            CustomSelect.vw,
            CustomSelect.vh,
          ]) || `[${t[1]}]`
        }`
        : ''
    },
  ],
  [
    'left',
    (val) => {
      const t = hasNegative(val)
      return isUnit(val)
        ? `${t[0]}left-${
          getUnitMetacharactersVal(t[1], [
            CustomSelect.vw,
            CustomSelect.vh,
          ]) || `[${t[1]}]`
        }`
        : ''
    },
  ],
  [
    'right',
    (val) => {
      const t = hasNegative(val)
      return isUnit(val)
        ? `${t[0]}right-${
          getUnitMetacharactersVal(t[1], [
            CustomSelect.vw,
            CustomSelect.vh,
          ]) || `[${t[1]}]`
        }`
        : ''
    },
  ],
  [
    'top',
    (val) => {
      const t = hasNegative(val)
      return isUnit(val)
        ? `${t[0]}top-${
          getUnitMetacharactersVal(t[1], [
            CustomSelect.vw,
            CustomSelect.vh,
          ]) || `[${t[1]}]`
        }`
        : ''
    },
  ],
  [
    'inset',
    val =>
      ({
        '0': 'inset-0',
        '0px': 'inset-0',
      }[val] ?? `inset-[${getCustomVal(val)}]`),
  ],
]
