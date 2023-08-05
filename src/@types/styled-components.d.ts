import { Theme } from "src/styles/theme"
import "styled-components"

type DefaultThemeType = typeof Theme

declare module "styled-components" {
  export interface DefaultTheme extends DefaultThemeType {}
}
