import { getCustomVal } from '../utils'

export const image: [string, (((val: string) => string) | Record<string, string>)][] = [
  ['image-orientation', val => `[image-orientation:${getCustomVal(val)}]`],
  ['mask', val => `[mask:${getCustomVal(val)}]`],
  ['mask-clip', val => `[mask-clip:${getCustomVal(val)}]`],
  ['mask-composite', val => `[mask-composite:${getCustomVal(val)}]`],
  ['mask-image', val => `[mask-image:${getCustomVal(val)}]`],
  ['mask-origin', val => `[mask-origin:${getCustomVal(val)}]`],
  ['mask-position', val => `[mask-position:${getCustomVal(val)}]`],
  ['mask-repeat', val => `[mask-repeat:${getCustomVal(val)}]`],
  ['mask-size', val => `[mask-size:${getCustomVal(val)}]`],
  [
    'object-fit',
    {
      'contain': 'object-contain',
      'cover': 'object-cover',
      'fill': 'object-fill',
      'none': 'object-none',
      'scale-down': 'object-scale-down',
    },
  ],
  [
    'object-position',
    val =>
      ({
        bottom: 'object-bottom',
        center: 'object-center',
        left: 'object-left',
        left_bottom: 'object-left-bottom',
        left_top: 'object-left-top',
        right: 'object-right',
        right_bottom: 'object-right-bottom',
        right_top: 'object-right-top',
        top: 'object-top',
      }[getCustomVal(val)] ?? ''),
  ],
  [
    'shape-image-threshold',
    val => `[shape-image-threshold:${getCustomVal(val)}]`,
  ],
  ['shape-margin', val => `[shape-margin:${getCustomVal(val)}]`],
  ['shape-outside', val => `[shape-outside:${getCustomVal(val)}]`],
]
