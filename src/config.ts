import type { CustomTheme } from './types'

export const specialAttribute = ['@charset', '@font-face', '@import', '@keyframes']

const useAllDefaultValues = false
const customTheme: CustomTheme = {}

export const config = {
  customTheme,
  useAllDefaultValues,
}
