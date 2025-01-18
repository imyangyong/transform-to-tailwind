import { config } from '../config'
import { getCustomVal, getRemDefaultVal, hasNegative, isColor, isUnit } from '../utils'

export const boxModel: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'margin',
    (val) => {
      const getPipeVal = (val: string) => {
        const r = { '0': 'm_0', '0px': 'm_0', 'auto': 'm_auto' }[val]
        if (r) {
          return r
        }
        let vals = val.split(' ').filter(v => v !== '')
        if (vals.filter(v => !isUnit(v)).length > 0) {
          return ''
        }
        if (config.useAllDefaultValues) {
          vals = vals.map(v => getRemDefaultVal(v) ?? `[${v}]`)
        }
        else {
          vals = vals.map(v => `[${v}]`)
        }
        if (vals.length === 1 || new Set(vals).size === 1) {
          return `m_${vals[0]}`
        }
        else if (vals.length === 2) {
          return `mx_${vals[1]} my_${vals[0]}`
        }
        else if (vals.length === 3) {
          if (vals[0] === vals[2]) {
            return `mx_${vals[1]} my_${vals[0]}`
          }
          return `mt_${vals[0]} mx_${vals[1]} mb_${vals[2]}`
        }
        else if (vals.length === 4) {
          if (vals[0] === vals[2]) {
            if (vals[1] === vals[3]) {
              return `mx_${vals[1]} my_${vals[0]}`
            }
            return `ml_${vals[3]} mr_${vals[1]} my_${vals[0]}`
          }
          if (vals[1] === vals[3]) {
            if (vals[0] === vals[2]) {
              return `mx_${vals[1]} my_${vals[0]}`
            }
            return `ml_${vals[3]} mr_${vals[1]} my_${vals[0]}`
          }
          return `mt_${vals[0]} mr_${vals[1]} mb_${vals[2]} ml_${vals[3]}`
        }
        return ''
      }
      const v = getPipeVal(val)
      return v === ''
        ? ''
        : v
            .split(' ')
            .map(t =>
              t.includes('-')
                ? `-${t.replace('-', '').replace('_', '-')}`
                : t.replace('_', '-'),
            )
            .join(' ')
    },
  ],
  [
    'margin-bottom',
    (val) => {
      const t = hasNegative(val)
      return (
        { '0': 'mb-0', '0px': 'mb-0', 'auto': 'mb-auto' }[val]
        ?? (isUnit(val)
          ? `${t[0]}mb-${
            (config.useAllDefaultValues && getRemDefaultVal(t[1])) || `[${t[1]}]`
          }`
          : '')
      )
    },
  ],
  [
    'margin-left',
    (val) => {
      const t = hasNegative(val)
      return (
        { '0': 'ml-0', '0px': 'ml-0', 'auto': 'ml-auto' }[val]
        ?? (isUnit(val)
          ? `${t[0]}ml-${
            (config.useAllDefaultValues && getRemDefaultVal(t[1])) || `[${t[1]}]`
          }`
          : '')
      )
    },
  ],
  [
    'margin-right',
    (val) => {
      const t = hasNegative(val)
      return (
        { '0': 'mr-0', '0px': 'mr-0', 'auto': 'mr-auto' }[val]
        ?? (isUnit(val)
          ? `${t[0]}mr-${
            (config.useAllDefaultValues && getRemDefaultVal(t[1])) || `[${t[1]}]`
          }`
          : '')
      )
    },
  ],
  [
    'margin-top',
    (val) => {
      const t = hasNegative(val)
      return (
        { '0': 'mt-0', '0px': 'mt-0', 'auto': 'mt-auto' }[val]
        ?? (isUnit(val)
          ? `${t[0]}mt-${
            (config.useAllDefaultValues && getRemDefaultVal(t[1])) || `[${t[1]}]`
          }`
          : '')
      )
    },
  ],
  ['outline', val => `outline-[${getCustomVal(val)}]`],
  [
    'outline-color',
    val => (isColor(val, true) ? `outline-[${getCustomVal(val)}]` : ''),
  ],
  ['outline-offset', val => (isUnit(val) ? `outline-offset-[${val}]` : '')],
  [
    'outline-style',
    {
      none: 'outline-[none]',
      dotted: 'outline-dotted',
      dashed: 'outline-dashed',
      solid: '[outline-style:solid]',
      double: 'outline-double',
      groove: '[outline-style:groove]',
      ridge: '[outline-style:ridge]',
      inset: '[outline-style:inset]',
      outset: '[outline-style:outset]',
    },
  ],
  ['outline-width', val => (isUnit(val) ? `outline-[${val}]` : '')],
  [
    'padding',
    (val) => {
      const r = { '0': 'p-0', '0px': 'p-0' }[val]
      if (r) {
        return r
      }
      let vals = val.split(' ').filter(v => v !== '')
      if (vals.filter(v => !isUnit(v)).length > 0) {
        return ''
      }
      if (config.useAllDefaultValues) {
        vals = vals.map(v => getRemDefaultVal(v) ?? `[${v}]`)
      }
      else {
        vals = vals.map(v => `[${v}]`)
      }
      if (vals.length === 1 || new Set(vals).size === 1) {
        return `p-${vals[0]}`
      }
      else if (vals.length === 2) {
        return `px-${vals[1]} py-${vals[0]}`
      }
      else if (vals.length === 3) {
        if (vals[0] === vals[2]) {
          return `px-${vals[1]} py-${vals[0]}`
        }
        return `pt-${vals[0]} px-${vals[1]} pb-${vals[2]}`
      }
      else if (vals.length === 4) {
        if (vals[0] === vals[2]) {
          if (vals[1] === vals[3]) {
            return `px-${vals[1]} py-${vals[0]}`
          }
          return `pl-${vals[3]} pr-${vals[1]} py-${vals[0]}`
        }
        if (vals[1] === vals[3]) {
          if (vals[0] === vals[2]) {
            return `px-${vals[1]} py-${vals[0]}`
          }
          return `pl-${vals[3]} pr-${vals[1]} py-${vals[0]}`
        }
        return `pt-${vals[0]} pr-${vals[1]} pb-${vals[2]} pl-${vals[3]}`
      }
      return ''
    },
  ],
  [
    'padding-bottom',
    val =>
      ({ '0': 'pb-0', '0px': 'pb-0' }[val]
        ?? (isUnit(val)
          ? `pb-${(config.useAllDefaultValues && getRemDefaultVal(val)) || `[${val}]`}`
          : '')),
  ],
  [
    'padding-left',
    val =>
      ({ '0': 'pl-0', '0px': 'pl-0' }[val]
        ?? (isUnit(val)
          ? `pl-${(config.useAllDefaultValues && getRemDefaultVal(val)) || `[${val}]`}`
          : '')),
  ],
  [
    'padding-right',
    val =>
      ({ '0': 'pr-0', '0px': 'pr-0' }[val]
        ?? (isUnit(val)
          ? `pr-${(config.useAllDefaultValues && getRemDefaultVal(val)) || `[${val}]`}`
          : '')),
  ],
  [
    'padding-top',
    val =>
      ({ '0': 'pt-0', '0px': 'pt-0' }[val]
        ?? (isUnit(val)
          ? `pt-${(config.useAllDefaultValues && getRemDefaultVal(val)) || `[${val}]`}`
          : '')),
  ],
]
