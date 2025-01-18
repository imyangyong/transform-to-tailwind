import { getCustomVal } from '../utils'

export const box: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'box-align',
    {
      initial: '[box-align:initial]',
      start: '[box-align:inherit]',
      end: '[box-align:unset]',
      center: '[box-align:unset]',
      baseline: '[box-align:unset]',
      stretch: '[box-align:unset]',
    },
  ],
  [
    'box-decoration-break',
    {
      slice: 'decoration-slice',
      clone: 'decoration-clone',
    },
  ],
  [
    'box-direction',
    {
      initial: '[box-direction:initial]',
      normal: '[box-direction:normal]',
      reverse: '[box-direction:reverse]',
      inherit: '[box-direction:inherit]',
    },
  ],
  ['box-flex', val => `[box-flex:${getCustomVal(val)}]`],
  ['box-flex-group', val => `[box-flex-group:${getCustomVal(val)}]`],
  [
    'box-lines',
    {
      single: '[box-lines:single]',
      multiple: '[box-lines:multiple]',
      initial: '[box-lines:initial]',
    },
  ],
  ['box-ordinal-group', val => `[box-ordinal-group:${getCustomVal(val)}]`],
  [
    'box-orient',
    {
      'horizontal': '[box-orient:horizontal]',
      'vertical': '[box-orient:vertical]',
      'inline-axis': '[box-orient:inline-axis]',
      'block-axis': '[box-orient:block-axis]',
      'inherit': '[box-orient:inherit]',
      'initial': '[box-orient:initial]',
    },
  ],
  [
    'box-pack',
    {
      start: '[box-pack:start]',
      end: '[box-pack:end]',
      center: '[box-pack:center]',
      justify: '[box-pack:justify]',
      initial: '[box-pack:initial]',
    },
  ],
  ['box-shadow', val => `[box-shadow:${getCustomVal(val)}]`],
  [
    'box-sizing',
    {
      'border-box': 'box-border',
      'content-box': 'box-content',
    },
  ],
  [
    'resize',
    {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize',
    },
  ],
]
