import { getCustomVal, removeSpace } from '../utils'

export const aspectRatio: [string, (val: string) => string ][] = [
  ['aspect-ratio', (val) => {
    return {
      'auto': 'aspect-auto',
      '1/1': 'aspect-square',
      '16/9': 'aspect-video',
    }[removeSpace(val)] ?? `[aspect-ratio:${getCustomVal(val)}]`
  }],
]
