import { config } from '../config'
import { getCustomVal, hasNegative } from '../utils'

export const transform: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['rotation', val => `[rotation:${getCustomVal(val)}]`],
  [
    'transform',
    (val) => {
      const defaultVal = { none: 'transform-none' }[val]
      if (defaultVal) {
        return defaultVal
      }

      const scaleDefaultVs: Record<string, string> = {
        '0': '0',
        '1': '100',
        '.5': '50',
        '.75': '75',
        '.9': '90',
        '.95': '95',
        '1.05': '105',
        '1.1': '110',
        '1.25': '125',
        '1.5': '150',
      }
      const rotateDefaultVs: Record<string, string> = {
        '0deg': '0',
        '1deg': '1',
        '2deg': '2',
        '3deg': '3',
        '6deg': '6',
        '12deg': '12',
        '45deg': '45',
        '90deg': '90',
        '180deg': '180',
      }
      const skewDefaultVs: Record<string, string> = {
        '0deg': '0',
        '1deg': '1',
        '2deg': '2',
        '3deg': '3',
        '6deg': '6',
        '12deg': '12',
      }
      const translateDefaultVs: Record<string, string> = {
        '0px': '0',
        '1px': 'px',
        '0.125rem': '0.5',
        '0.25rem': '1',
        '0.375rem': '1.5',
        '0.5rem': '2',
        '0.625rem': '2.5',
        '0.75rem': '3',
        '0.875rem': '3.5',
        '1rem': '4',
        '1.25rem': '5',
        '1.5rem': '6',
        '1.75rem': '7',
        '2rem': '8',
        '2.25rem': '9',
        '2.5rem': '10',
        '2.75rem': '11',
        '3rem': '12',
        '3.5rem': '14',
        '4rem': '16',
        '5rem': '20',
        '6rem': '24',
        '7rem': '28',
        '8rem': '32',
        '9rem': '36',
        '10rem': '40',
        '11rem': '44',
        '12rem': '48',
        '13rem': '52',
        '14rem': '56',
        '15rem': '60',
        '16rem': '64',
        '18rem': '72',
        '20rem': '80',
        '24rem': '96',
        '50%': '1/2',
        '33.33%': '1/3',
        '66.66%': '2/3',
        '25%': '1/4',
        '75%': '3/4',
        '100%': 'full',
      }
      const transformValConfig: Record<
        string,
        (v: string) => string | undefined
      > = {
        scale: (v: string) => {
          const vs = v.split(',')
          if (vs.length === 3) {
            return undefined
          }
          if (vs[0] === vs[1] || vs.length === 1) {
            return `scale-${
              config.customTheme.scale?.[vs[0]]
              || (config.useAllDefaultValues && scaleDefaultVs[vs[0]])
              || `[${vs[0]}]`
            }`
          }
          return vs
            .map((v, idx) => {
              return `scale-${idx === 0 ? 'x' : 'y'}-${
                config.customTheme.scale?.[v]
                || (config.useAllDefaultValues && scaleDefaultVs[v])
                || `[${v}]`
              }`
            })
            .join(' ')
        },
        scaleX: (v: string) =>
          `scale-x-${
            config.customTheme.scale?.[v]
            || (config.useAllDefaultValues && scaleDefaultVs[v])
            || `[${v}]`
          }`,
        scaleY: (v: string) =>
          `scale-y-${
            config.customTheme.scale?.[v]
            || (config.useAllDefaultValues && scaleDefaultVs[v])
            || `[${v}]`
          }`,
        rotate: (v: string) => {
          const vs = v.split(',')
          if (vs.length > 1) {
            if (
              vs.length === 3
              && ['0', '0deg'].findIndex(v => v === vs[0]) > -1
              && ['0', '0deg'].findIndex(v => v === vs[1]) > -1
            ) {
              const t = hasNegative(vs[2])
              return `${t[0]}rotate-${
                config.customTheme.rotate?.[t[1]]
                || (config.useAllDefaultValues && rotateDefaultVs[t[1]])
                || `[${t[1]}]`
              }`
            }
            return undefined
          }
          const t = hasNegative(vs[0])
          return `${t[0]}rotate-${
            config.customTheme.rotate?.[t[1]]
            || (config.useAllDefaultValues && rotateDefaultVs[t[1]])
            || `[${t[1]}]`
          }`
        },
        rotateZ: (v: string) => {
          const t = hasNegative(v)
          return `${t[0]}rotate-${
            config.customTheme.rotate?.[t[1]]
            || (config.useAllDefaultValues && rotateDefaultVs[t[1]])
            || `[${t[1]}]`
          }`
        },
        translate: (v: string) => {
          const vs = v.split(',')
          if (vs.length === 3) {
            return undefined
          }
          return vs
            .map((v, idx) => {
              const t = hasNegative(v)
              if (/^\d+\.[1-9]{2,}%$/.test(t[1])) {
                t[1] = `${Number(t[1].slice(0, -1))
                  .toFixed(6)
                  .replace(/(\.[1-9]{2})\d+/, '$1')}%`
              }
              return `${t[0]}translate-${idx === 0 ? 'x' : 'y'}-${
                config.customTheme.translate?.[t[1]]
                || (config.useAllDefaultValues && translateDefaultVs[t[1]])
                || `[${t[1]}]`
              }`
            })
            .join(' ')
        },
        translateX: (v: string) => {
          const t = hasNegative(v)
          if (/^\d+\.[1-9]{2,}%$/.test(t[1])) {
            t[1] = `${Number(t[1].slice(0, -1))
              .toFixed(6)
              .replace(/(\.[1-9]{2})\d+/, '$1')}%`
          }
          return `${t[0]}translate-x-${
            config.customTheme.translate?.[t[1]]
            || (config.useAllDefaultValues && translateDefaultVs[t[1]])
            || `[${t[1]}]`
          }`
        },
        translateY: (v: string) => {
          const t = hasNegative(v)
          if (/^\d+\.[1-9]{2,}%$/.test(t[1])) {
            t[1] = `${Number(t[1].slice(0, -1))
              .toFixed(6)
              .replace(/(\.[1-9]{2})\d+/, '$1')}%`
          }
          return `${t[0]}translate-y-${
            config.customTheme.translate?.[t[1]]
            || (config.useAllDefaultValues && translateDefaultVs[t[1]])
            || `[${t[1]}]`
          }`
        },
        skew: (v: string) => {
          const vs = v.split(',')
          if (vs.length === 3) {
            return undefined
          }
          return vs
            .map((v, idx) => {
              const t = hasNegative(v)
              return `${t[0]}skew-${idx === 0 ? 'x' : 'y'}-${
                config.customTheme.skew?.[t[1]]
                || (config.useAllDefaultValues && skewDefaultVs[t[1]])
                || `[${t[1]}]`
              }`
            })
            .join(' ')
        },
        skewX: (v: string) => {
          const t = hasNegative(v)
          return `${t[0]}skew-x-${
            config.customTheme.skew?.[t[1]]
            || (config.useAllDefaultValues && skewDefaultVs[t[1]])
            || `[${t[1]}]`
          }`
        },
        skewY: (v: string) => {
          const t = hasNegative(v)
          return `${t[0]}skew-y-${
            config.customTheme.skew?.[t[1]]
            || (config.useAllDefaultValues && skewDefaultVs[t[1]])
            || `[${t[1]}]`
          }`
        },
      }
      const vals = getCustomVal(val)
        .replace(/\(.+?\)/g, v => v.replace(/_/g, ''))
        .split(')_')
        .map(v => `${v})`)
      vals[vals.length - 1] = vals[vals.length - 1].slice(0, -1)

      let canUse = true
      const res = vals.map((v) => {
        let canUsePipeV = false
        const pipeV = v.replace(
          /^([\w-]+)\((.+?)\)$/,
          (_r, k: string, v) => {
            canUsePipeV = true
            const tmpRes = transformValConfig[k]?.(v) ?? (canUse = false)
            return typeof tmpRes === 'string' ? tmpRes : ''
          },
        )
        return canUsePipeV ? pipeV : ''
      })
      return canUse
        ? `transform ${[...new Set(res)].join(' ')}`
        : `[transform:${getCustomVal(val)}]`
    },
  ],
  [
    'transform-origin',
    val =>
      ({
        center: 'origin-center',
        top: 'origin-top',
        top_right: 'origin-top-right',
        right: 'origin-right',
        bottom_right: 'origin-bottom-right',
        bottom: 'origin-bottom',
        bottom_left: 'origin-bottom-left',
        left: 'origin-left',
        top_left: 'origin-top-left',
      }[getCustomVal(val)] ?? `origin-[${getCustomVal(val)}]`),
  ],
  [
    'transform-style',
    {
      'flat': '[transform-style:flat]',
      'preserve-3d': '[transform-style:preserve-3d]',
      'initial': '[transform-style:initial]',
    },
  ],
]
