import styled from "styled-components/native"

import { TranslatorMessageOrigin } from "@interfaces/index"
import { Theme } from "@styles/index"
import { Typography } from "@components/Typography"

const { colors, spacing, radius, inputSize } = Theme

export const ContentBox = styled.View`
  width: 100%;
  padding-bottom: ${spacing.lg}px;

  flex: 1;
  flex-direction: column;
  gap: ${spacing.md}px;
`

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

export const Footer = styled.SafeAreaView`
  background-color: ${colors.white};

  height: 120px;
  width: 100%;

  border-top-width: 1px;
  border-top-color: ${colors.grey200};
  border-top-style: solid;
`

export const FooterContent = styled.View`
  height: 100%;
  width: 100%;

  flex-direction: row;
  align-items: center;
  gap: ${spacing.sm}px;

  margin-top: ${spacing.sm}px;
  padding: ${spacing.sm}px 4%;
`

export const InputBox = styled.View`
  width: 88%;
`

export const LanguageSelectorBox = styled.View``

export const LanguageSelectorBtn = styled.TouchableOpacity`
  border-radius: ${radius.lg}px;

  align-items: center;
  justify-content: center;
  padding: ${spacing.sm}px;

  background-color: ${colors.grey100};
`

export const LanguageSelectorImg = styled.Image`
  width: 24px;
  height: 24px;
`
