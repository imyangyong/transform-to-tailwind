import { config } from '../config'
import { getCustomVal, getFilterDefaultVal, hasNegative } from '../utils'

export const filter: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'filter',
    (val) => {
      const defaultVal = { none: 'filter-none' }[val]
      if (defaultVal) {
        return defaultVal
      }
      const filterValConfig: Record<string, (v: string) => string> = {
        'blur': (v: string) => `blur-${config.customTheme.blur?.[v] ?? `[${v}]`}`,
        'brightness': (v: string) =>
          `brightness-${config.customTheme.brightness?.[v] ?? `[${v}]`}`,
        'contrast': (v: string) =>
          `contrast-${config.customTheme.contrast?.[v] ?? `[${v}]`}`,
        'grayscale': (v: string) =>
          `grayscale-${config.customTheme.grayscale?.[v] ?? `[${v}]`}`,
        'hue-rotate': (v: string) => {
          const t = hasNegative(v)
          return `${t[0]}hue-rotate-${
            config.customTheme.grayscale?.[t[1]] ?? `[${t[1]}]`
          }`
        },
        'invert': (v: string) =>
          `invert-${config.customTheme.invert?.[v] ?? `[${v}]`}`,
        'saturate': (v: string) =>
          `saturate-${config.customTheme.saturate?.[v] ?? `[${v}]`}`,
        'sepia': (v: string) => `sepia-${config.customTheme.sepia?.[v] ?? `[${v}]`}`,
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
          pipeV = getFilterDefaultVal(v) ?? ''
          if (pipeV.length > 0) {
            canUsePipeV = true
          }
        }
        pipeV
          = pipeV.length > 0
            ? pipeV
            : v.replace(/^([\w-]+)\((.+?)\)$/, (_r, k: string, v) => {
                canUsePipeV = true
                return filterValConfig[k]?.(v) ?? (canUse = false)
              })
        return canUsePipeV ? pipeV : ''
      })
      return canUse
        ? `filter ${[...new Set(res)].join(' ')}`
        : `[filter:${getCustomVal(val)}]`
    },
  ],
]
