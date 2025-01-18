## transform-to-tailwind

transform css / style to tailwindcss.

Forked from: [css2tailwind](https://github.com/hunghg255/css2tailwind)

## Install

```bash
npm install transform-to-tailwind
```
## Usage

```js
import { transformCss, transformStyle } from 'transform-to-tailwind'

const style = `
  color: red;
  font-size: 16px;
`

const tailwindStyle = transformStyle(style)
// ['text-[red] text-base']

const css = `
  .text-red {
    color: red;
  }
  .text-16 {
    font-size: 16px;
  }
`

const tailwindCss = transformCss(css)
// [ { selector: '.text-red', result: 'text-[red]' }, { selector: text-16', result: 'text-base' }]
```

## License

[MIT](./LICENSE) License © 2025 [Yong Yang](https://github.com/imyangyong)
