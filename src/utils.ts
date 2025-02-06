import type { CustomSelect } from './types'

export function hasNegative(val: string): ['-' | '', string] {
  return [
    val[0] === '-' ? '-' : '',
    val[0] === '-' ? val.slice(1) : val,
  ]
}

export function getCustomVal(val: string) {
  // FIGMA: color: var(--neutral-1, #2F2F2F)
  if (val.startsWith('var') && val.includes(','))
    return val?.match(/#[0-9a-z]{3,6}/gi)?.[0] ?? val

  val = val.replace(/\s/g, '_')
  for (let index = 1; index < val.length; index) {
    const char = val[index]
    if (char === '_' && char === val[index - 1]) {
      val = val.slice(0, index) + val.slice(index + 1)
    }
    else {
      index++
    }
  }
  return val
}

export function isColor(str: string, joinLinearGradient = false) {
  if (str.startsWith('var'))
    return true

  const namedColors = [
    'initial',
    'inherit',
    'currentColor',
    'currentcolor',
    'transparent',
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgrey',
    'darkgreen',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'grey',
    'green',
    'greenyellow',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgrey',
    'lightgreen',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightslategrey',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'rebeccapurple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'slategrey',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen',
  ]
  const regexp
    // eslint-disable-next-line regexp/no-super-linear-backtracking
    = /^\s*#([0-9a-f]{3}|[0-9a-f]{6})\s*$|^\s*rgb\(\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*\)\s*$|^\s*rgba\(\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*,\s*(\d*(\.\d+)?)\s*\)\s*$|^\s*hsl\(\s*(\d+)\s*,\s*(\d*(\.\d+)?%)\s*,\s*(\d*(\.\d+)?%)\)\s*$|^\s*hsla\((\d+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*,\s*(\d*(\.\d+)?)\)\s*$/i
  return (
    regexp.test(str)
    || namedColors.includes(str)
    || (joinLinearGradient && /^\s*linear-gradient\([\s\S]+?\)\s*$/.test(str))
  )
}

export function isUnit(str: string) {
  if (str.includes('calc'))
    return true
  if (str.startsWith('var'))
    return true

  return (
    [
      'em',
      'ex',
      'ch',
      'rem',
      'vw',
      'vh',
      'vmin',
      'vmax',
      'cm',
      'mm',
      'in',
      'pt',
      'pc',
      'px',
      'min-content',
      'mincontent',
      'max-content',
      'maxcontent',
      'fit-content',
      'fitcontent',
      'deg',
      'grad',
      'rad',
      'turn',
      'ms',
      's',
      'Hz',
      'kHz',
      '%',
      'length',
      'inherit',
      'thick',
      'medium',
      'thin',
      'initial',
      'auto',
    ].includes(str.replace(/[.\d\s-]/g, ''))
    || /^[-.\d]+$/.test(str.trim())
    || /^var\(.+\)$/.test(str)
  )
}

export function getUnitMetacharactersVal(val: string, excludes: CustomSelect[] = []): string | undefined {
  if (/^\d+\.[1-9]{2,}%$/.test(val)) {
    val = `${Number(val.slice(0, -1))
      .toFixed(6)
      .replace(/(\.[1-9]{2})\d+/, '$1')}%`
  }
  const config: Record<string, string> = {
    'auto': 'auto',
    '50%': '1/2',
    '33.33%': '1/3',
    '66.66%': '2/3',
    '25%': '1/4',
    '75%': '3/4',
    '20%': '1/5',
    '40%': '2/5',
    '60%': '3/5',
    '80%': '4/5',
    '16.66%': '1/6',
    '83.33%': '5/6',
    '8.33%': '1/12',
    '41.66%': '5/12',
    '58.33%': '7/12',
    '91.66%': '11/12',
    '100%': 'full',
    '100vw': 'screen',
    '100vh': 'screen',
    'min-content': 'min',
    'max-content': 'max',
  }
  excludes.forEach((key) => {
    delete config[key]
  })
  return config[val]
}

export function getRemDefaultVal(val: string) {
  return {
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
  }[val]
}

export function getBorderRadiusDefaultVal(val: string) {
  return {
    '0px': '-none',
    '0.125rem': '-sm',
    '0.25rem': 'null',
    '0.375rem': '-md',
    '0.5rem': '-lg',
    '0.75rem': '-xl',
    '1rem': '-2xl',
    '1.5rem': '-3xl',
    '9999px': '-full',
  }[val]
}

export function getFilterDefaultVal(val: string) {
  return {
    'blur(0)': 'blur-none',
    'blur(4px)': 'blur-sm',
    'blur(8px)': 'blur',
    'blur(12px)': 'blur-md',
    'blur(16px)': 'blur-lg',
    'blur(24px)': 'blur-xl',
    'blur(40px)': 'blur-2xl',
    'blur(64px)': 'blur-3xl',
    'brightness(0)': 'brightness-0',
    'brightness(.5)': 'brightness-50',
    'brightness(.75)': 'brightness-75',
    'brightness(.9)': 'brightness-90',
    'brightness(.95)': 'brightness-95',
    'brightness(1)': 'brightness-100',
    'brightness(1.05)': 'brightness-105',
    'brightness(1.1)': 'brightness-110',
    'brightness(1.25)': 'brightness-125',
    'brightness(1.5)': 'brightness-150',
    'brightness(2)': 'brightness-200',
    'contrast(0)': 'contrast-0',
    'contrast(.5)': 'contrast-50',
    'contrast(.75)': 'contrast-75',
    'contrast(1)': 'contrast-100',
    'contrast(1.25)': 'contrast-125',
    'contrast(1.5)': 'contrast-150',
    'contrast(2)': 'contrast-200',
    'drop-shadow(0 1px 1px rgba(0,0,0,0.05))': 'drop-shadow-sm',
    'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))':
      'drop-shadow',
    'drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))':
      'drop-shadow-md',
    'drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))':
      'drop-shadow-lg',
    'drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))':
      'drop-shadow-xl',
    'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))': 'drop-shadow-2xl',
    'drop-shadow(0 0 #0000)': 'drop-shadow-none',
    'grayscale(0)': 'grayscale-0',
    'grayscale(1)': 'grayscale',
    'hue-rotate(-180deg)': '-hue-rotate-180',
    'hue-rotate(-90deg)': '-hue-rotate-90',
    'hue-rotate(-60deg)': '-hue-rotate-60',
    'hue-rotate(-30deg)': '-hue-rotate-30',
    'hue-rotate(-15deg)': '-hue-rotate-15',
    'hue-rotate(0deg)': 'hue-rotate-0',
    'hue-rotate(15deg)': 'hue-rotate-15',
    'hue-rotate(30deg)': 'hue-rotate-30',
    'hue-rotate(60deg)': 'hue-rotate-60',
    'hue-rotate(90deg)': 'hue-rotate-90',
    'hue-rotate(180deg)': 'hue-rotate-180',
    'invert(0)': 'invert-0',
    'invert(1)': 'invert',
    'saturate(0)': 'saturate-0',
    'saturate(.5)': 'saturate-50',
    'saturate(1)': 'saturate-100',
    'saturate(1.5)': 'saturate-150',
    'saturate(2)': 'saturate-200',
    'sepia(0)': 'sepia-0',
    'sepia(1)': 'sepia',
  }[val]
}

export function getFontSizeDefaultVal(val: string) {
  const fontSize: Record<string, string> = {
    '12px': 'text-xs',
    '14px': 'text-sm',
    '16px': 'text-base',
    '18px': 'text-lg',
    '20px': 'text-xl',
    '24px': 'text-2xl',
    '30px': 'text-3xl',
    '36px': 'text-4xl',
    '48px': 'text-5xl',
    '60px': 'text-6xl',
    '72px': 'text-7xl',
    '96px': 'text-8xl',
    '128px': 'text-9xl',
  }

  return fontSize[val] ?? `text-[${val}]`
}

export function removeSpace(str: string) {
  return str.replace(/\s/g, '')
}

export const moreDefaultMediaVals: Record<string, string> = {
  '@media(min-width:640px)': 'sm',
  '@media(min-width:768px)': 'md',
  '@media(min-width:1024px)': 'lg',
  '@media(min-width:1280px)': 'xl',
  '@media(min-width:1536px)': '2xl',
  '@media_not_all_and(min-width:640px)': 'max-sm',
  '@media_not_all_and(min-width:768px)': 'max-md',
  '@media_not_all_and(min-width:1024px)': 'max-lg',
  '@media_not_all_and(min-width:1280px)': 'max-xl',
  '@media_not_all_and(min-width:1536px)': 'max-2xl',
}

export const moreDefaultValuesMap: Record<string, Record<string, string>> = {
  'top': {
    '0px': 'top-0',
    '1px': 'top-px',
    '0.125rem': 'top-0.5',
    '0.25rem': 'top-1',
    '0.375rem': 'top-1.5',
    '0.5rem': 'top-2',
    '0.625rem': 'top-2.5',
    '0.75rem': 'top-3',
    '0.875rem': 'top-3.5',
    '1rem': 'top-4',
    '1.25rem': 'top-5',
    '1.5rem': 'top-6',
    '1.75rem': 'top-7',
    '2rem': 'top-8',
    '2.25rem': 'top-9',
    '2.5rem': 'top-10',
    '2.75rem': 'top-11',
    '3rem': 'top-12',
    '3.5rem': 'top-14',
    '4rem': 'top-16',
    '5rem': 'top-20',
    '6rem': 'top-24',
    '7rem': 'top-28',
    '8rem': 'top-32',
    '9rem': 'top-36',
    '10rem': 'top-40',
    '11rem': 'top-44',
    '12rem': 'top-48',
    '13rem': 'top-52',
    '14rem': 'top-56',
    '15rem': 'top-60',
    '16rem': 'top-64',
    '18rem': 'top-72',
    '20rem': 'top-80',
    '24rem': 'top-96',
    'auto': 'top-auto',
    '50%': 'top-2/4',
    '33.333333%': 'top-1/3',
    '66.666667%': 'top-2/3',
    '25%': 'top-1/4',
    '75%': 'top-3/4',
    '100%': 'top-full',
    '-1px': '-top-px',
    '-0.125rem': '-top-0.5',
    '-0.25rem': '-top-1',
    '-0.375rem': '-top-1.5',
    '-0.5rem': '-top-2',
    '-0.625rem': '-top-2.5',
    '-0.75rem': '-top-3',
    '-0.875rem': '-top-3.5',
    '-1rem': '-top-4',
    '-1.25rem': '-top-5',
    '-1.5rem': '-top-6',
    '-1.75rem': '-top-7',
    '-2rem': '-top-8',
    '-2.25rem': '-top-9',
    '-2.5rem': '-top-10',
    '-2.75rem': '-top-11',
    '-3rem': '-top-12',
    '-3.5rem': '-top-14',
    '-4rem': '-top-16',
    '-5rem': '-top-20',
    '-6rem': '-top-24',
    '-7rem': '-top-28',
    '-8rem': '-top-32',
    '-9rem': '-top-36',
    '-10rem': '-top-40',
    '-11rem': '-top-44',
    '-12rem': '-top-48',
    '-13rem': '-top-52',
    '-14rem': '-top-56',
    '-15rem': '-top-60',
    '-16rem': '-top-64',
    '-18rem': '-top-72',
    '-20rem': '-top-80',
    '-24rem': '-top-96',
    '-50%': '-top-2/4',
    '-33.333333%': '-top-1/3',
    '-66.666667%': '-top-2/3',
    '-25%': '-top-1/4',
    '-75%': '-top-3/4',
    '-100%': '-top-full',
  },
  'bottom': {
    '0px': 'bottom-0',
    '1px': 'bottom-px',
    '0.125rem': 'bottom-0.5',
    '0.25rem': 'bottom-1',
    '0.375rem': 'bottom-1.5',
    '0.5rem': 'bottom-2',
    '0.625rem': 'bottom-2.5',
    '0.75rem': 'bottom-3',
    '0.875rem': 'bottom-3.5',
    '1rem': 'bottom-4',
    '1.25rem': 'bottom-5',
    '1.5rem': 'bottom-6',
    '1.75rem': 'bottom-7',
    '2rem': 'bottom-8',
    '2.25rem': 'bottom-9',
    '2.5rem': 'bottom-10',
    '2.75rem': 'bottom-11',
    '3rem': 'bottom-12',
    '3.5rem': 'bottom-14',
    '4rem': 'bottom-16',
    '5rem': 'bottom-20',
    '6rem': 'bottom-24',
    '7rem': 'bottom-28',
    '8rem': 'bottom-32',
    '9rem': 'bottom-36',
    '10rem': 'bottom-40',
    '11rem': 'bottom-44',
    '12rem': 'bottom-48',
    '13rem': 'bottom-52',
    '14rem': 'bottom-56',
    '15rem': 'bottom-60',
    '16rem': 'bottom-64',
    '18rem': 'bottom-72',
    '20rem': 'bottom-80',
    '24rem': 'bottom-96',
    'auto': 'bottom-auto',
    '50%': 'bottom-2/4',
    '33.333333%': 'bottom-1/3',
    '66.666667%': 'bottom-2/3',
    '25%': 'bottom-1/4',
    '75%': 'bottom-3/4',
    '100%': 'bottom-full',
    '-1px': '-bottom-px',
    '-0.125rem': '-bottom-0.5',
    '-0.25rem': '-bottom-1',
    '-0.375rem': '-bottom-1.5',
    '-0.5rem': '-bottom-2',
    '-0.625rem': '-bottom-2.5',
    '-0.75rem': '-bottom-3',
    '-0.875rem': '-bottom-3.5',
    '-1rem': '-bottom-4',
    '-1.25rem': '-bottom-5',
    '-1.5rem': '-bottom-6',
    '-1.75rem': '-bottom-7',
    '-2rem': '-bottom-8',
    '-2.25rem': '-bottom-9',
    '-2.5rem': '-bottom-10',
    '-2.75rem': '-bottom-11',
    '-3rem': '-bottom-12',
    '-3.5rem': '-bottom-14',
    '-4rem': '-bottom-16',
    '-5rem': '-bottom-20',
    '-6rem': '-bottom-24',
    '-7rem': '-bottom-28',
    '-8rem': '-bottom-32',
    '-9rem': '-bottom-36',
    '-10rem': '-bottom-40',
    '-11rem': '-bottom-44',
    '-12rem': '-bottom-48',
    '-13rem': '-bottom-52',
    '-14rem': '-bottom-56',
    '-15rem': '-bottom-60',
    '-16rem': '-bottom-64',
    '-18rem': '-bottom-72',
    '-20rem': '-bottom-80',
    '-24rem': '-bottom-96',
    '-50%': '-bottom-2/4',
    '-33.333333%': '-bottom-1/3',
    '-66.666667%': '-bottom-2/3',
    '-25%': '-bottom-1/4',
    '-75%': '-bottom-3/4',
    '-100%': '-bottom-full',
  },
  'left': {
    '0px': 'left-0',
    '1px': 'left-px',
    '0.125rem': 'left-0.5',
    '0.25rem': 'left-1',
    '0.375rem': 'left-1.5',
    '0.5rem': 'left-2',
    '0.625rem': 'left-2.5',
    '0.75rem': 'left-3',
    '0.875rem': 'left-3.5',
    '1rem': 'left-4',
    '1.25rem': 'left-5',
    '1.5rem': 'left-6',
    '1.75rem': 'left-7',
    '2rem': 'left-8',
    '2.25rem': 'left-9',
    '2.5rem': 'left-10',
    '2.75rem': 'left-11',
    '3rem': 'left-12',
    '3.5rem': 'left-14',
    '4rem': 'left-16',
    '5rem': 'left-20',
    '6rem': 'left-24',
    '7rem': 'left-28',
    '8rem': 'left-32',
    '9rem': 'left-36',
    '10rem': 'left-40',
    '11rem': 'left-44',
    '12rem': 'left-48',
    '13rem': 'left-52',
    '14rem': 'left-56',
    '15rem': 'left-60',
    '16rem': 'left-64',
    '18rem': 'left-72',
    '20rem': 'left-80',
    '24rem': 'left-96',
    'auto': 'left-auto',
    '50%': 'left-2/4',
    '33.333333%': 'left-1/3',
    '66.666667%': 'left-2/3',
    '25%': 'left-1/4',
    '75%': 'left-3/4',
    '100%': 'left-full',
    '-1px': '-left-px',
    '-0.125rem': '-left-0.5',
    '-0.25rem': '-left-1',
    '-0.375rem': '-left-1.5',
    '-0.5rem': '-left-2',
    '-0.625rem': '-left-2.5',
    '-0.75rem': '-left-3',
    '-0.875rem': '-left-3.5',
    '-1rem': '-left-4',
    '-1.25rem': '-left-5',
    '-1.5rem': '-left-6',
    '-1.75rem': '-left-7',
    '-2rem': '-left-8',
    '-2.25rem': '-left-9',
    '-2.5rem': '-left-10',
    '-2.75rem': '-left-11',
    '-3rem': '-left-12',
    '-3.5rem': '-left-14',
    '-4rem': '-left-16',
    '-5rem': '-left-20',
    '-6rem': '-left-24',
    '-7rem': '-left-28',
    '-8rem': '-left-32',
    '-9rem': '-left-36',
    '-10rem': '-left-40',
    '-11rem': '-left-44',
    '-12rem': '-left-48',
    '-13rem': '-left-52',
    '-14rem': '-left-56',
    '-15rem': '-left-60',
    '-16rem': '-left-64',
    '-18rem': '-left-72',
    '-20rem': '-left-80',
    '-24rem': '-left-96',
    '-50%': '-left-2/4',
    '-33.333333%': '-left-1/3',
    '-66.666667%': '-left-2/3',
    '-25%': '-left-1/4',
    '-75%': '-left-3/4',
    '-100%': '-left-full',
  },
  'right': {
    '0px': 'right-0',
    '1px': 'right-px',
    '0.125rem': 'right-0.5',
    '0.25rem': 'right-1',
    '0.375rem': 'right-1.5',
    '0.5rem': 'right-2',
    '0.625rem': 'right-2.5',
    '0.75rem': 'right-3',
    '0.875rem': 'right-3.5',
    '1rem': 'right-4',
    '1.25rem': 'right-5',
    '1.5rem': 'right-6',
    '1.75rem': 'right-7',
    '2rem': 'right-8',
    '2.25rem': 'right-9',
    '2.5rem': 'right-10',
    '2.75rem': 'right-11',
    '3rem': 'right-12',
    '3.5rem': 'right-14',
    '4rem': 'right-16',
    '5rem': 'right-20',
    '6rem': 'right-24',
    '7rem': 'right-28',
    '8rem': 'right-32',
    '9rem': 'right-36',
    '10rem': 'right-40',
    '11rem': 'right-44',
    '12rem': 'right-48',
    '13rem': 'right-52',
    '14rem': 'right-56',
    '15rem': 'right-60',
    '16rem': 'right-64',
    '18rem': 'right-72',
    '20rem': 'right-80',
    '24rem': 'right-96',
    'auto': 'right-auto',
    '50%': 'right-2/4',
    '33.333333%': 'right-1/3',
    '66.666667%': 'right-2/3',
    '25%': 'right-1/4',
    '75%': 'right-3/4',
    '100%': 'right-full',
    '-1px': '-right-px',
    '-0.125rem': '-right-0.5',
    '-0.25rem': '-right-1',
    '-0.375rem': '-right-1.5',
    '-0.5rem': '-right-2',
    '-0.625rem': '-right-2.5',
    '-0.75rem': '-right-3',
    '-0.875rem': '-right-3.5',
    '-1rem': '-right-4',
    '-1.25rem': '-right-5',
    '-1.5rem': '-right-6',
    '-1.75rem': '-right-7',
    '-2rem': '-right-8',
    '-2.25rem': '-right-9',
    '-2.5rem': '-right-10',
    '-2.75rem': '-right-11',
    '-3rem': '-right-12',
    '-3.5rem': '-right-14',
    '-4rem': '-right-16',
    '-5rem': '-right-20',
    '-6rem': '-right-24',
    '-7rem': '-right-28',
    '-8rem': '-right-32',
    '-9rem': '-right-36',
    '-10rem': '-right-40',
    '-11rem': '-right-44',
    '-12rem': '-right-48',
    '-13rem': '-right-52',
    '-14rem': '-right-56',
    '-15rem': '-right-60',
    '-16rem': '-right-64',
    '-18rem': '-right-72',
    '-20rem': '-right-80',
    '-24rem': '-right-96',
    '-50%': '-right-2/4',
    '-33.333333%': '-right-1/3',
    '-66.666667%': '-right-2/3',
    '-25%': '-right-1/4',
    '-75%': '-right-3/4',
    '-100%': '-right-full',
  },
  'gap': {
    '0px': 'gap-0',
    '0.125rem': 'gap-0.5',
    '0.25rem': 'gap-1',
    '0.375rem': 'gap-1.5',
    '0.5rem': 'gap-2',
    '0.625rem': 'gap-2.5',
    '0.75rem': 'gap-3',
    '0.875rem': 'gap-3.5',
    '1rem': 'gap-4',
    '1.25rem': 'gap-5',
    '1.5rem': 'gap-6',
    '1.75rem': 'gap-7',
    '2rem': 'gap-8',
    '2.25rem': 'gap-9',
    '2.5rem': 'gap-10',
    '2.75rem': 'gap-11',
    '3rem': 'gap-12',
    '3.5rem': 'gap-14',
    '4rem': 'gap-16',
    '5rem': 'gap-20',
    '6rem': 'gap-24',
    '7rem': 'gap-28',
    '8rem': 'gap-32',
    '9rem': 'gap-36',
    '10rem': 'gap-40',
    '11rem': 'gap-44',
    '12rem': 'gap-48',
    '13rem': 'gap-52',
    '14rem': 'gap-56',
    '15rem': 'gap-60',
    '16rem': 'gap-64',
    '18rem': 'gap-72',
    '20rem': 'gap-80',
    '24rem': 'gap-96',
  },
  'column-gap': {
    '0px': 'gap-x-0',
    '1px': 'gap-x-px',
    '0.125rem': 'gap-x-0.5',
    '0.25rem': 'gap-x-1',
    '0.375rem': 'gap-x-1.5',
    '0.5rem': 'gap-x-2',
    '0.625rem': 'gap-x-2.5',
    '0.75rem': 'gap-x-3',
    '0.875rem': 'gap-x-3.5',
    '1rem': 'gap-x-4',
    '1.25rem': 'gap-x-5',
    '1.5rem': 'gap-x-6',
    '1.75rem': 'gap-x-7',
    '2rem': 'gap-x-8',
    '2.25rem': 'gap-x-9',
    '2.5rem': 'gap-x-10',
    '2.75rem': 'gap-x-11',
    '3rem': 'gap-x-12',
    '3.5rem': 'gap-x-14',
    '4rem': 'gap-x-16',
    '5rem': 'gap-x-20',
    '6rem': 'gap-x-24',
    '7rem': 'gap-x-28',
    '8rem': 'gap-x-32',
    '9rem': 'gap-x-36',
    '10rem': 'gap-x-40',
    '11rem': 'gap-x-44',
    '12rem': 'gap-x-48',
    '13rem': 'gap-x-52',
    '14rem': 'gap-x-56',
    '15rem': 'gap-x-60',
    '16rem': 'gap-x-64',
    '18rem': 'gap-x-72',
    '20rem': 'gap-x-80',
    '24rem': 'gap-x-96',
  },
  'row-gap': {
    '0px': 'gap-y-0',
    '1px': 'gap-y-px',
    '0.125rem': 'gap-y-0.5',
    '0.25rem': 'gap-y-1',
    '0.375rem': 'gap-y-1.5',
    '0.5rem': 'gap-y-2',
    '0.625rem': 'gap-y-2.5',
    '0.75rem': 'gap-y-3',
    '0.875rem': 'gap-y-3.5',
    '1rem': 'gap-y-4',
    '1.25rem': 'gap-y-5',
    '1.5rem': 'gap-y-6',
    '1.75rem': 'gap-y-7',
    '2rem': 'gap-y-8',
    '2.25rem': 'gap-y-9',
    '2.5rem': 'gap-y-10',
    '2.75rem': 'gap-y-11',
    '3rem': 'gap-y-12',
    '3.5rem': 'gap-y-14',
    '4rem': 'gap-y-16',
    '5rem': 'gap-y-20',
    '6rem': 'gap-y-24',
    '7rem': 'gap-y-28',
    '8rem': 'gap-y-32',
    '9rem': 'gap-y-36',
    '10rem': 'gap-y-40',
    '11rem': 'gap-y-44',
    '12rem': 'gap-y-48',
    '13rem': 'gap-y-52',
    '14rem': 'gap-y-56',
    '15rem': 'gap-y-60',
    '16rem': 'gap-y-64',
    '18rem': 'gap-y-72',
    '20rem': 'gap-y-80',
    '24rem': 'gap-y-96',
  },
  'max-width': {
    '0rem': 'max-w-0',
    '20rem': 'max-w-xs',
    '24rem': 'max-w-sm',
    '28rem': 'max-w-md',
    '32rem': 'max-w-lg',
    '36rem': 'max-w-xl',
    '42rem': 'max-w-2xl',
    '48rem': 'max-w-3xl',
    '56rem': 'max-w-4xl',
    '64rem': 'max-w-5xl',
    '72rem': 'max-w-6xl',
    '80rem': 'max-w-7xl',
    '65ch': 'max-w-prose',
    '640px': 'max-w-screen-sm',
    '768px': 'max-w-screen-md',
    '1024px': 'max-w-screen-lg',
    '1280px': 'max-w-screen-xl',
    '1536px': 'max-w-screen-2xl',
  },
  'max-height': {
    '1px': 'max-h-px',
    '0': 'max-h-0',
    '0px': 'max-h-0',
    '0.125rem': 'max-h-0.5',
    '0.25rem': 'max-h-1',
    '0.375rem': 'max-h-1.5',
    '0.5rem': 'max-h-2',
    '0.625rem': 'max-h-2.5',
    '0.75rem': 'max-h-3',
    '0.875rem': 'max-h-3.5',
    '1rem': 'max-h-4',
    '1.25rem': 'max-h-5',
    '1.5rem': 'max-h-6',
    '1.75rem': 'max-h-7',
    '2rem': 'max-h-8',
    '2.25rem': 'max-h-9',
    '2.5rem': 'max-h-10',
    '2.75rem': 'max-h-11',
    '3rem': 'max-h-12',
    '3.5rem': 'max-h-14',
    '4rem': 'max-h-16',
    '5rem': 'max-h-20',
    '6rem': 'max-h-24',
    '7rem': 'max-h-28',
    '8rem': 'max-h-32',
    '9rem': 'max-h-36',
    '10rem': 'max-h-40',
    '11rem': 'max-h-44',
    '12rem': 'max-h-48',
    '13rem': 'max-h-52',
    '14rem': 'max-h-56',
    '15rem': 'max-h-60',
    '16rem': 'max-h-64',
    '18rem': 'max-h-72',
    '20rem': 'max-h-80',
    '24rem': 'max-h-96',
  },
  'font-family': {
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"':
      'font-sans',
    'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif': 'font-serif',
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace':
      'font-mono',
  },
  'font-weight': {
    100: 'font-thin',
    200: 'font-extralight',
    300: 'font-light',
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
    700: 'font-bold',
    800: 'font-extrabold',
    900: 'font-black',
    normal: 'font-normal',
    bold: 'font-bold',
  },
  'line-height': {
    '1': 'leading-none',
    '2': 'leading-loose',
    '.75rem': 'leading-3',
    '1rem': 'leading-4',
    '1.25rem': 'leading-5',
    '1.5rem': 'leading-6',
    '1.75rem': 'leading-7',
    '2rem': 'leading-8',
    '2.25rem': 'leading-9',
    '2.5rem': 'leading-10',
    '1.25': 'leading-tight',
    '1.375': 'leading-snug',
    '1.5': 'leading-normal',
    '1.625': 'leading-relaxed',
  },
  'border-width': {
    '0px': 'border-0',
    '2px': 'border-2',
    '4px': 'border-4',
    '8px': 'border-8',
    '1px': 'border',
  },
  'border-top-width': {
    '0px': 'border-t-0',
    '2px': 'border-t-2',
    '4px': 'border-t-4',
    '8px': 'border-t-8',
    '1px': 'border-t',
  },
  'border-right-width': {
    '0px': 'border-r-0',
    '2px': 'border-r-2',
    '4px': 'border-r-4',
    '8px': 'border-r-8',
    '1px': 'border-r',
  },
  'border-bottom-width': {
    '0px': 'border-b-0',
    '2px': 'border-b-2',
    '4px': 'border-b-4',
    '8px': 'border-b-8',
    '1px': 'border-b',
  },
  'border-left-width': {
    '0px': 'border-l-0',
    '2px': 'border-l-2',
    '4px': 'border-l-4',
    '8px': 'border-l-8',
    '1px': 'border-l',
  },
  'transition': {
    'all 150ms cubic-bezier(0.4, 0, 0.2, 1)': 'transition-all',
    'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1)':
      'transition',
    'background-color, border-color, color, fill, stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)':
      'transition-colors',
    'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)': 'transition-opacity',
    'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)': 'transition-shadow',
    'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)': 'transition-transform',
  },
}
