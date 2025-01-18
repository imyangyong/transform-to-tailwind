import { config } from '../config'
import { getCustomVal, getFilterDefaultVal, hasNegative } from '../utils'

export const backdrop: [string, (val: string) => string][] = [
  [
    'backdrop-filter',
    (val) => {
      const defaultVal = { none: 'backdrop-filter-none' }[val]
      if (defaultVal) {
        return defaultVal
      }

      const backdropFilterValConfig: Record<string, (v: string) => string> = {
        'blur': (v: string) =>
          `backdrop-blur-${config.customTheme['backdrop-blur']?.[v] ?? `[${v}]`}`,
        'brightness': (v: string) =>
          `backdrop-brightness-${
            config.customTheme['backdrop-brightness']?.[v] ?? `[${v}]`
          }`,
        'contrast': (v: string) =>
          `backdrop-contrast-${
            config.customTheme['backdrop-contrast']?.[v] ?? `[${v}]`
          }`,
        'grayscale': (v: string) =>
          `backdrop-grayscale-${
            config.customTheme['backdrop-grayscale']?.[v] ?? `[${v}]`
          }`,
        'hue-rotate': (v: string) => {
          const t = hasNegative(v)
          return `${t[0]}backdrop-hue-rotate-${
            config.customTheme['backdrop-grayscale']?.[t[1]] ?? `[${t[1]}]`
          }`
        },
        'invert': (v: string) =>
          `backdrop-invert-${config.customTheme['backdrop-invert']?.[v] ?? `[${v}]`}`,
        'opacity': (v: string) =>
          `backdrop-opacity-${
            config.customTheme['backdrop-opacity']?.[v] ?? `[${v}]`
          }`,
        'saturate': (v: string) =>
          `backdrop-saturate-${
            config.customTheme['backdrop-saturate']?.[v] ?? `[${v}]`
          }`,
        'sepia': (v: string) =>
          `backdrop-sepia-${config.customTheme['backdrop-sepia']?.[v] ?? `[${v}]`}`,
      }
      const vals = getCustomVal(val)
        .replace(/\(.+?\)/g, v => v.replace(/_/g, ''))
        .split(')_')
        .map(v => `${v})`)
      vals[vals.length - 1] = vals[vals.length - 1].slice(0, -1)

      let canUse = true
      const res = vals.map((v) => {
        let canUsePipeV = false
        let pipeV = ''
        if (config.useAllDefaultValues) {
          pipeV
            = (getFilterDefaultVal(v)
              || {
                'opacity(0)': 'backdrop-opacity-0',
                'opacity(0.05)': 'backdrop-opacity-5',
                'opacity(0.1)': 'backdrop-opacity-10',
                'opacity(0.2)': 'backdrop-opacity-20',
                'opacity(0.25)': 'backdrop-opacity-25',
                'opacity(0.3)': 'backdrop-opacity-30',
                'opacity(0.4)': 'backdrop-opacity-40',
                'opacity(0.5)': 'backdrop-opacity-50',
                'opacity(0.6)': 'backdrop-opacity-60',
                'opacity(0.7)': 'backdrop-opacity-70',
                'opacity(0.75)': 'backdrop-opacity-75',
                'opacity(0.8)': 'backdrop-opacity-80',
                'opacity(0.9)': 'backdrop-opacity-90',
                'opacity(0.95)': 'backdrop-opacity-95',
                'opacity(1)': 'backdrop-opacity-100',
              }[v])
              ?? ''
          if (pipeV.length > 0) {
            pipeV = pipeV.startsWith('backdrop-opacity')
              ? pipeV
              : `backdrop-${pipeV}`
            canUsePipeV = true
          }
        }
        pipeV
          = pipeV.length > 0
            ? pipeV
            : v.replace(/^([\w-]+)\((.+?)\)$/, (_r, k: string, v) => {
                canUsePipeV = true
                return backdropFilterValConfig[k]?.(v) ?? (canUse = false)
              })
        return canUsePipeV ? pipeV : ''
      })
      return canUse
        ? `backdrop-filter ${[...new Set(res)].join(' ')}`
        : `[backdrop-filter:${getCustomVal(val)}]`
    },
  ],
]
