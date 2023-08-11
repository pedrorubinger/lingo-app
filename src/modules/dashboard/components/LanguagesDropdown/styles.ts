import styled from "styled-components/native"

import { Theme } from "@styles/index"

const { colors, radius, spacing } = Theme

export const Box = styled.View`
  opacity: 0.85;
  background-color: ${colors.white};

  position: absolute;
  bottom: 108%;
  left: 8%;

  padding: ${spacing.xl + 2}px ${spacing.xl}px ${spacing.md}px;

  border-radius: ${radius.sm}px;
  border: 1px solid ${colors.grey200};

  gap: ${spacing.md}px;
`

export const LanguageBtn = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey200};
  padding-bottom: ${spacing.xs}px;
`

export const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  right: ${spacing.xs}px;
  top: ${spacing.sm}px;
`
