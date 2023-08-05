import { Text as RNText } from "react-native"
import styled from "styled-components/native"

import { TypographyProps } from "@components/Typography"
import { Colors, Fonts, Theme } from "@styles/index"

const { colors, fonts } = Theme

export const Text = styled(RNText)<TypographyProps>`
  font-size: ${({ font }) =>
    Fonts[font as keyof typeof Fonts]?.fontSize ?? fonts.md2.fontSize}px;
  font-family: ${({ font }) =>
    Fonts[font as keyof typeof Fonts]?.fontFamily ?? fonts.md2.fontFamily};
  color: ${({ color }) =>
    Colors[color as keyof typeof Colors] ?? colors.grey700};
`
