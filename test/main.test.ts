import { describe, expect, it } from 'vitest'
import { transformCss, transformStyle } from '../src'

describe('transform', () => {
  it('transformCss', () => {
    const cssCode = `body {
      width: 100%;
      height: calc(100vh - 50%);
      top: calc(100vh - 50%);
      margin-top: calc(100vh - 50%);
      margin: 0 !important;
      background-color: transparent;
      font-size: 16px;
      text-decoration-color: #000;
    }`

    const conversionResult = transformCss(cssCode, {
      useAllDefaultValues: false,
    })

    expect(conversionResult).toEqual({
      code: 'OK',
      data: [
        {
          selector: 'body',
          result: 'w-full h-[calc(100vh_-_50%)] top-[calc(100vh_-_50%)] mt-[calc(100vh_-_50%)] !m-0 bg-transparent text-base [text-decoration-color:#000]',
        },
      ],
    })
  })
  it('transformStyle', () => {
    const cssCode = `width: 100%;
      height: calc(100vh - 50%);
      top: calc(100vh - 50%);
      margin-top: calc(100vh - 50%);
      margin: 0 !important;
      background-color: transparent;
      font-size: 16px;
      text-decoration-color: #000;
    `

    const conversionResult = transformStyle(cssCode)

    expect(conversionResult).toEqual({
      code: 'OK',
      data: [
        'w-full',
        'h-[calc(100vh_-_50%)]',
        'top-[calc(100vh_-_50%)]',
        'mt-[calc(100vh_-_50%)]',
        '!m-0',
        'bg-transparent',
        'text-base',
        '[text-decoration-color:#000]',
      ],
    })
  })
})
