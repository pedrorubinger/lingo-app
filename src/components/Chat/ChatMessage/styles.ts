import styled from "styled-components/native"

import { TranslatorMessageOrigin } from "@interfaces/index"
import { Theme } from "@styles/index"
import { Typography } from "@components/Typography"
import { Animated } from "react-native"

const { colors, spacing, radius } = Theme

interface MessageBoxProps {
  origin: TranslatorMessageOrigin
  isError: boolean
}

type GetBgColorProps = MessageBoxProps

const getBgColor = ({ origin, isError }: GetBgColorProps) => {
  if (isError) return colors.red400
  if (origin === TranslatorMessageOrigin.APPLICATION) return colors.grey200

  return colors.green400
}

export const MessageBox = styled(Animated.View)<MessageBoxProps>`
  max-width: 80%;
  padding: ${spacing.md}px;

  background-color: ${({ origin, isError }) => getBgColor({ origin, isError })};
  border: 1px solid ${colors.grey100};
  border-radius: ${radius.lg}px;

  align-self: ${({ origin }) =>
    origin === TranslatorMessageOrigin.APPLICATION ? "flex-start" : "flex-end"};
`

interface MessageTypographyProps {
  origin: TranslatorMessageOrigin
  isError: boolean
}

type GetTextColorProps = MessageTypographyProps

const getTextColor = ({ origin, isError }: GetTextColorProps) => {
  if (isError) return colors.white
  if (origin === TranslatorMessageOrigin.APPLICATION) return colors.grey700

  return colors.white
}

export const MessageTypography = styled(Typography)<MessageTypographyProps>`
  color: ${({ origin, isError }) => getTextColor({ origin, isError })};
`
