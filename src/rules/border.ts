import { config } from '../config'
import { getBorderRadiusDefaultVal, getCustomVal, isColor, isUnit } from '../utils'

const borderStyle: Record<string, string> = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  double: 'border-double',
  none: 'border-none',
}

export const border: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'border',
    (val) => {
      val = val.replace(/\(.+?\)/, v => v.replace(/\s/g, ''))
      const vals: string = val
        .split(' ')
        .filter(v => v !== '')
        .map(v =>
          isUnit(v) || isColor(v)
            ? {
                transparent: 'border-transparent',
                currentColor: 'border-current',
                currentcolor: 'border-current',
              }[val] ?? `border-[${v}]`
            : borderStyle[v]
              ?? '',
        )
        .filter(v => v !== '')
        .join(' ')
      return vals
    },
  ],
  [
    'border-bottom',
    (val) => {
      if (isUnit(val)) {
        return `border-b-[${getCustomVal(val)}]`
      }
      else {
        return `[border-bottom:${getCustomVal(val)}]`
      }
    },
  ],
  [
    'border-bottom-color',
    val =>
      isColor(val, true) ? `[border-bottom-color:${getCustomVal(val)}]` : '',
  ],
  [
    'border-bottom-left-radius',
    val =>
      ({ '0': 'rounded-bl-none', '0px': 'rounded-bl-none' }[val]
        ?? (isUnit(val)
          ? `rounded-bl${(
            (config.useAllDefaultValues && getBorderRadiusDefaultVal(val))
            || `-[${getCustomVal(val)}]`
          ).replace(/null$/, '')}`
          : '')),
  ],
  [
    'border-bottom-right-radius',
    val =>
      ({ '0': 'rounded-br-none', '0px': 'rounded-br-none' }[val]
        ?? (isUnit(val)
          ? `rounded-br${(
            (config.useAllDefaultValues && getBorderRadiusDefaultVal(val))
            || `-[${getCustomVal(val)}]`
          ).replace(/null$/, '')}`
          : '')),
  ],
  [
    'border-bottom-style',
    val =>
      borderStyle[val]
        ? `[border-bottom-style:${val}]`
        : '',
  ],
  [
    'border-bottom-width',
    val => (isUnit(val) ? `border-b-[${getCustomVal(val)}]` : ''),
  ],
  [
    'border-collapse',
    {
      collapse: 'border-collapse',
      separate: 'border-separate',
    },
  ],
  [
    'border-color',
    val =>
      ({
        transparent: 'border-t ransparent',
        currentColor: 'border-current',
        currentcolor: 'border-current',
      }[val] ?? (isColor(val) ? `border-[${getCustomVal(val)}]` : '')),
  ],
  ['border-image', val => `[border-image:${getCustomVal(val)}]`],
  [
    'border-image-outset',
    val => `[border-image-outset:${getCustomVal(val)}]`,
  ],
  [
    'border-image-repeat',
    val => `[border-image-repeat:${getCustomVal(val)}]`,
  ],
  ['border-image-slice', val => `[border-image-slice:${getCustomVal(val)}]`],
  [
    'border-image-source',
    val => `[border-image-source:${getCustomVal(val)}]`,
  ],
  [
    'border-image-width',
    val => (isUnit(val) ? `[border-image-width:${getCustomVal(val)}]` : ''),
  ],
  [
    'border-left',
    (val) => {
      if (isUnit(val)) {
        return `border-l-[${getCustomVal(val)}]`
      }
      else {
        return `[border-left:${getCustomVal(val)}]`
      }
    },
  ],
  [
    'border-left-color',
    val =>
      isColor(val, true) ? `[border-left-color:${getCustomVal(val)}]` : '',
  ],
  [
    'border-left-style',
    val =>
      borderStyle[val]
        ? `[border-left-style:${val}]`
        : '',
  ],
  [
    'border-left-width',
    val => (isUnit(val) ? `border-l-[${getCustomVal(val)}]` : ''),
  ],
  [
    'border-radius',
    (val) => {
      const r = { '0': 'rounded-none', '0px': 'rounded-none' }[val]
      if (r) {
        return r
      }
      if (val.includes('/')) {
        return `rounded-[${getCustomVal(val)}]`
      }
      let vals = val.split(' ').filter(v => v !== '')
      if (vals.filter(v => !isUnit(v)).length > 0) {
        return ''
      }
      vals = vals.map(v =>
        (
          (config.useAllDefaultValues && getBorderRadiusDefaultVal(v))
          || `-[${v}]`
        ).replace(/null$/, ''),
      )
      if (vals.length === 1) {
        return `rounded${vals[0]}`
      }
      else if (vals.length === 2) {
        return `rounded-tl${vals[0]} rounded-br${vals[0]} rounded-tr${vals[1]} rounded-bl${vals[1]}`
      }
      else if (vals.length === 3) {
        return `rounded-tl${vals[0]} rounded-br${vals[2]} rounded-tr${vals[1]} rounded-bl${vals[1]}`
      }
      else if (vals.length === 4) {
        return `rounded-tl${vals[0]} rounded-br${vals[2]} rounded-tr${vals[1]} rounded-bl${vals[3]}`
      }
      return ''
    },
  ],
  [
    'border-right',
    (val) => {
      if (isUnit(val)) {
        return `border-r-[${getCustomVal(val)}]`
      }
      else {
        return `[border-right:${getCustomVal(val)}]`
      }
    },
  ],
  [
    'border-right-color',
    val =>
      isColor(val, true) ? `[border-right-color:${getCustomVal(val)}]` : '',
  ],
  [
    'border-right-style',
    val =>
      borderStyle[val]
        ? `[border-right-style:${val}]`
        : '',
  ],
  [
    'border-right-width',
    val => (isUnit(val) ? `border-r-[${getCustomVal(val)}]` : ''),
  ],
  [
    'border-spacing',
    val => (isUnit(val) ? `[border-spacing:${getCustomVal(val)}]` : ''),
  ],
  [
    'border-style',
    borderStyle,
  ],
  [
    'border-top',
    (val) => {
      if (isUnit(val)) {
        return `border-t-[${getCustomVal(val)}]`
      }
      else {
        return `[border-top:${getCustomVal(val)}]`
      }
    },
  ],
  [
    'border-top-color',
    val =>
      isColor(val, true) ? `[border-top-color:${getCustomVal(val)}]` : '',
  ],
  [
    'border-top-left-radius',
    val =>
      ({ '0': 'rounded-tl-none', '0px': 'rounded-tl-none' }[val]
        ?? (isUnit(val)
          ? `rounded-tl${(
            (config.useAllDefaultValues && getBorderRadiusDefaultVal(val))
            || `-[${getCustomVal(val)}]`
          ).replace(/null$/, '')}`
          : '')),
  ],
  [
    'border-top-right-radius',
    val =>
      ({ '0': 'rounded-tr-none', '0px': 'rounded-tr-none' }[val]
        ?? (isUnit(val)
          ? `rounded-tr${(
            (config.useAllDefaultValues && getBorderRadiusDefaultVal(val))
            || `-[${getCustomVal(val)}]`
          ).replace(/null$/, '')}`
          : '')),
  ],
  [
    'border-top-style',
    val =>
      borderStyle[val]
        ? `[border-top-style:${val}]`
        : '',
  ],
  [
    'border-top-width',
    val => (isUnit(val) ? `border-t-[${getCustomVal(val)}]` : ''),
  ],
  [
    'border-width',
    val => (isUnit(val) ? `border-[${getCustomVal(val)}]` : ''),
  ],
]
