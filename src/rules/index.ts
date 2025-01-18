import { align } from './align'
import { all } from './all'
import { animation } from './animation'
import { appearance } from './appearance'
import { aspectRatio } from './aspect-ratio'
import { backdrop } from './backdrop'
import { backface } from './backface'
import { background } from './background'
import { border } from './border'
import { box } from './box'
import { boxModel } from './box-model'
import { captionSide } from './caption-side'
import { clip } from './clip'
import { color } from './color'
import { colorSchema } from './color-schema'
import { column } from './column'
import { contain } from './contain'
import { content } from './content'
import { counter } from './counter'
import { cursor } from './cursor'
import { direction } from './direction'
import { display } from './display'
import { emptyCells } from './empty-cells'
import { filter } from './filter'
import { flex } from './flex'
import { float } from './float'
import { font } from './font'
import { grid } from './grid'
import { hangingPunctuation } from './hanging-punctuation'
import { icon } from './icon'
import { image } from './image'
import { list } from './list'
import { nav } from './nav'
import { page } from './page'
import { position } from './position'
import { scroll } from './scroll'
import { size } from './size'
import { target } from './target'
import { text } from './text'
import { transform } from './transform'
import { transition } from './transition'
import { visible } from './visible'
import { zIndex } from './z-index'

export const rulesMap: Map<
  string,
  Record<string, string> | ((val: string) => string)
>
= new Map<string, Record<string, string> | ((val: string) => string)>(
  // @ts-expect-error '' is not assignable to type 'Record<string, string> | ((val: string: string) => string)'
  [
    ...align,
    ...all,
    ...animation,
    ...appearance,
    ...aspectRatio,
    ...backdrop,
    ...backface,
    ...background,
    ...border,
    ...box,
    ...boxModel,
    ...captionSide,
    ...clip,
    ...colorSchema,
    ...color,
    ...column,
    ...contain,
    ...content,
    ...counter,
    ...cursor,
    ...direction,
    ...display,
    ...emptyCells,
    ...filter,
    ...flex,
    ...float,
    ...font,
    ...grid,
    ...hangingPunctuation,
    ...icon,
    ...image,
    ...list,
    ...nav,
    ...visible,
    ...page,
    ...position,
    ...scroll,
    ...target,
    ...text,
    ...transform,
    ...transition,
    ...size,
    ...zIndex,
  ],
)
