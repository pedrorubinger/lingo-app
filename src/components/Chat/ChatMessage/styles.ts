import styled from "styled-components/native"

import { TranslatorMessageOrigin } from "@interfaces/index"
import { Theme } from "@styles/index"
import { Typography } from "@components/Typography"

const { colors, spacing, radius } = Theme

interface MessageBoxProps {
  origin: TranslatorMessageOrigin
}

export const MessageBox = styled.View<MessageBoxProps>`
  max-width: 80%;
  padding: ${spacing.md}px;

  background-color: ${({ origin }) =>
    origin === TranslatorMessageOrigin.APPLICATION
      ? colors.grey200
      : colors.green400};
  border: 1px solid ${colors.grey100};
  border-radius: ${radius.lg}px;

  align-self: ${({ origin }) =>
    origin === TranslatorMessageOrigin.APPLICATION ? "flex-start" : "flex-end"};
`

interface MessageTypographyProps {
  origin: TranslatorMessageOrigin
}

export const MessageTypography = styled(Typography)<MessageTypographyProps>`
  color: ${({ origin }) =>
    origin === TranslatorMessageOrigin.APPLICATION
      ? colors.grey700
      : colors.white};
`
