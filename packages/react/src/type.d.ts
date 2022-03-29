import { CSSProp, DefaultTheme } from 'styled-components'
import { CharcoalTheme as Theme } from '@charcoal-ui/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp<DefaultTheme>
  }
}

declare global {
  const __DEV__: object | undefined // actually object|false, but using undefined allows ! assertion
}