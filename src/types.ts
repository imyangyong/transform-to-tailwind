export interface ResultCode {
  selector: string
  result: string
}

export enum CustomSelect {
  auto = 'auto',
  vh = '100vh',
  vw = '100vw',
}

export interface CssCodeParse {
  selector: string
  cssCode: string | CssCodeParse[]
}

export interface CustomTheme
  extends Record<string, undefined | Record<string, string>> {
  'media'?: Record<string, string>
  'backdrop-blur'?: Record<string, string>
  'backdrop-brightness'?: Record<string, string>
  'backdrop-contrast'?: Record<string, string>
  'backdrop-grayscale'?: Record<string, string>
  'backdrop-hue-rotate'?: Record<string, string>
  'backdrop-invert'?: Record<string, string>
  'backdrop-opacity'?: Record<string, string>
  'backdrop-saturate'?: Record<string, string>
  'backdrop-sepia'?: Record<string, string>
  'blur'?: Record<string, string>
  'brightness'?: Record<string, string>
  'contrast'?: Record<string, string>
  'grayscale'?: Record<string, string>
  'hue-rotate'?: Record<string, string>
  'invert'?: Record<string, string>
  'saturate'?: Record<string, string>
  'sepia'?: Record<string, string>
  'scale'?: Record<string, string>
  'rotate'?: Record<string, string>
  'translate'?: Record<string, string>
  'skew'?: Record<string, string>
}

export interface TranslatorConfig {
  prefix?: string
  /**
   * @default true
   */
  useAllDefaultValues?: boolean
  customTheme?: CustomTheme
}
