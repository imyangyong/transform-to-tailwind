import type { CssCodeParse, ResultCode, TranslatorConfig } from './types'
import { config as $config, specialAttribute } from './config'
import { rulesMap } from './rules'
import { getCustomVal, moreDefaultMediaVals, moreDefaultValuesMap } from './utils'

function parsingCssCode(code: string): CssCodeParse[] {
  code = code.replace(/[\n\r]/g, '').trim()
  const tmpCodes: CssCodeParse[] = []
  let index = 0
  let isSelectorName = true
  let bracketsCount = 0
  for (let i = 0; i < code.length; i++) {
    const char = code[i]
    if (['{', '}'].includes(char)) {
      if (char === '{') {
        if (bracketsCount++ === 0) {
          isSelectorName = false
        }
        else {
          tmpCodes[index][isSelectorName ? 'selector' : 'cssCode'] += char
        }
      }
      else {
        if (--bracketsCount === 0) {
          const cssCode = tmpCodes[index].cssCode
          if (typeof cssCode === 'string' && cssCode.includes('{')) {
            tmpCodes[index].cssCode = parsingCssCode(cssCode)
          }
          index++
          isSelectorName = true
        }
        else {
          tmpCodes[index][isSelectorName ? 'selector' : 'cssCode'] += char
        }
      }
    }
    else {
      if (!tmpCodes[index]) {
        tmpCodes[index] = {
          selector: '',
          cssCode: '',
        }
      }
      tmpCodes[index][isSelectorName ? 'selector' : 'cssCode'] += char
    }
  }
  return tmpCodes.map(v => ({
    selector: v.selector.trim(),
    cssCode: typeof v.cssCode === 'string' ? v.cssCode.trim() : v.cssCode,
  }))
}

function getResultCode(it: CssCodeParse, prefix = '', config: TranslatorConfig) {
  if (typeof it.cssCode !== 'string') {
    return null
  }

  const cssCodeList = it.cssCode
    .replace(/\/\*(.*?)\*\//g, '')
    .split(';')
    .filter(v => v !== '')

  const results = cssCodeList
    .map((v) => {
      let key = ''
      let val = ''
      for (let i = 0; i < v.length; i++) {
        const c = v[i]
        if (c !== ':') {
          key += c
        }
        else {
          val = v.slice(i + 1, v.length).trim()
          break
        }
      }
      const pipe = rulesMap.get(key.trim())
      let hasImportant = false
      if (val.includes('!important')) {
        val = val.replace('!important', '').trim()
        hasImportant = true
      }
      let pipeVal = ''

      if (val.includes('calc'))
        val = val.replace(/\s/g, '_')

      if (val === 'initial' || val === 'inherit') {
        pipeVal = `[${key.trim()}:${val}]`
      }
      else {
        config.customTheme = config.customTheme ?? {}
        pipeVal
          = typeof pipe === 'function'
            ? config.customTheme[key.trim()]?.[val]
            || (config.useAllDefaultValues
              && moreDefaultValuesMap[key.trim()]?.[val])
            || pipe(val)
            : config.customTheme[key.trim()]?.[val]
              || (config.useAllDefaultValues
                && moreDefaultValuesMap[key.trim()]?.[val])
              || (pipe?.[val] ?? '')
      }
      if ((config.prefix?.length ?? 0) > 0) {
        pipeVal = pipeVal
          .split(' ')
          .map(
            v =>
              `${v[0] === '-' ? '-' : ''}${config.prefix}${v.replace(/^-/, '')}`,
          )
          .join(' ')
      }
      if (hasImportant) {
        const getImportantVal = (v: string) => {
          if (v[0] === '[' && v[v.length - 1] === ']') {
            v = `${v.slice(0, -1)}!important]`
          }
          else {
            v = `!${v}`
          }
          return v
        }
        if (
          pipeVal.includes(' ')
          && ['backdrop-filter', 'filter', 'transform'].filter(v =>
            pipeVal.startsWith(v),
          ).length === 0
        ) {
          pipeVal = pipeVal
            .split(' ')
            .map(v => getImportantVal(v))
            .join(' ')
        }
        else if (pipeVal.length > 0) {
          pipeVal = getImportantVal(pipeVal)
        }
      }
      if (it.selector.endsWith(':hover') && pipeVal.length > 0) {
        if (
          ['backdrop-filter', 'filter', 'transform'].filter(v =>
            pipeVal.startsWith(v),
          ).length > 0
        ) {
          pipeVal = `hover:${pipeVal}`
        }
        else {
          pipeVal = pipeVal
            .split(' ')
            .map(v => `hover:${v}`)
            .join(' ')
        }
      }
      else if (it.selector.endsWith(':focus') && pipeVal.length > 0) {
        if (
          ['backdrop-filter', 'filter', 'transform'].filter(v =>
            pipeVal.startsWith(v),
          ).length > 0
        ) {
          pipeVal = `focus:${pipeVal}`
        }
        else {
          pipeVal = pipeVal
            .split(' ')
            .map(v => `focus:${v}`)
            .join(' ')
        }
      }
      else if (it.selector.endsWith(':active') && pipeVal.length > 0) {
        if (
          ['backdrop-filter', 'filter', 'transform'].filter(v =>
            pipeVal.startsWith(v),
          ).length > 0
        ) {
          pipeVal = `active:${pipeVal}`
        }
        else {
          pipeVal = pipeVal
            .split(' ')
            .map(v => `active:${v}`)
            .join(' ')
        }
      }
      else if (it.selector.endsWith('::before') && pipeVal.length > 0) {
        if (
          ['backdrop-filter', 'filter', 'transform'].filter(v =>
            pipeVal.startsWith(v),
          ).length > 0
        ) {
          pipeVal = `before:${pipeVal}`
        }
        else {
          pipeVal = pipeVal
            .split(' ')
            .map(v => `before:${v}`)
            .join(' ')
        }
      }
      else if (it.selector.endsWith('::after') && pipeVal.length > 0) {
        if (
          ['backdrop-filter', 'filter', 'transform'].filter(v =>
            pipeVal.startsWith(v),
          ).length > 0
        ) {
          pipeVal = `after:${pipeVal}`
        }
        else {
          pipeVal = pipeVal
            .split(' ')
            .map(v => `after:${v}`)
            .join(' ')
        }
      }
      if (prefix.length > 0) {
        if (
          ['backdrop-filter', 'filter', 'transform'].filter(v =>
            pipeVal.startsWith(v),
          ).length > 0
        ) {
          pipeVal = `${prefix}:${pipeVal}`
        }
        else {
          pipeVal = pipeVal
            .split(' ')
            .map(v => `${prefix}:${v}`)
            .join(' ')
        }
      }
      return pipeVal
    })
    .filter(v => v !== '')

  return {
    selector: it.selector,
    result: [...new Set(results)].join(' '),
  }
}

const defaultTranslatorConfig = {
  prefix: '',
  useAllDefaultValues: true,
  customTheme: {},
}

function transformCss(code: string, config: TranslatorConfig = defaultTranslatorConfig): {
  code: 'SyntaxError' | 'OK'
  data: ResultCode[]
} {
  if (
    specialAttribute.map(v => code.includes(v)).filter(v => v).length > 0
  ) {
    return {
      code: 'SyntaxError',
      data: [],
    }
  }
  $config.useAllDefaultValues = config.useAllDefaultValues ?? defaultTranslatorConfig.useAllDefaultValues
  $config.customTheme = config.customTheme ?? defaultTranslatorConfig.customTheme
  const dataArray: ResultCode[] = []
  parsingCssCode(code)
    .map((it) => {
      if (typeof it.cssCode === 'string') {
        return getResultCode(it, '', config)
      }
      else if (it.selector.includes('@media')) {
        return it.cssCode.map((v) => {
          const mediaName = getCustomVal(
            it.selector
              .replace(/\(.+\)/g, v => v.replace(/\s/g, ''))
              .replace(/\s+\(/g, '('),
          )
          const res = getResultCode(
            v,
            $config.customTheme.media?.[it.selector]
            || (config.useAllDefaultValues && moreDefaultMediaVals[mediaName])
            || `[${mediaName}]`,
            config,
          )
          return res
            ? {
                selector: `${it.selector}-->${res.selector}`,
                result: res.result,
              }
            : null
        })
      }
      else {
        return null
      }
    })
    .filter(v => v !== null)
    .forEach((v) => {
      if (Array.isArray(v)) {
        dataArray.push(...(v as ResultCode[]))
      }
      else {
        dataArray.push(v as ResultCode)
      }
    })
  return {
    code: 'OK',
    data: dataArray,
  }
}

function parseStyleCode(code: string): string[] {
  return code
    .replace(/\/\*(.*?)\*\//g, '')
    .split(';')
    .map(v => v.trim())
    .filter(v => v !== '')
}

function transformStyle(code: string, config: TranslatorConfig = defaultTranslatorConfig): {
  code: 'SyntaxError' | 'OK'
  data: string[]
} {
  if (
    specialAttribute.map(v => code.includes(v)).filter(v => v).length > 0
  ) {
    return {
      code: 'SyntaxError',
      data: [],
    }
  }
  $config.useAllDefaultValues = config.useAllDefaultValues ?? defaultTranslatorConfig.useAllDefaultValues
  $config.customTheme = config.customTheme ?? defaultTranslatorConfig.customTheme
  const dataArray: string[] = []
  parseStyleCode(code)
    .map((it) => {
      if (typeof it === 'string') {
        return getResultCode({
          selector: '',
          cssCode: it,
        }, '', config)
      }
      else {
        return null
      }
    })
    .filter(v => v !== null)
    .forEach((v) => {
      if (Array.isArray(v)) {
        dataArray.push(...(v as ResultCode[]).map(v => v.result))
      }
      else {
        dataArray.push(v.result)
      }
    })
  return {
    code: 'OK',
    data: dataArray,
  }
}

export { defaultTranslatorConfig, specialAttribute, transformCss, transformStyle }
