import styled, { css } from "styled-components/native"

import { Theme } from "@styles/index"

const { colors, radius, spacing } = Theme

export const Box = styled.View`
  opacity: 1;
  background-color: ${colors.white};

  position: absolute;
  bottom: 108%;
  left: 8%;

  padding: ${spacing.xl + 2}px ${spacing.lg + 4}px ${spacing.md}px;

  border-radius: ${radius.sm}px;
  border: 1px solid ${colors.grey200};

  gap: ${spacing.md}px;
`

const LanguageBtnBorderStyles = css`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey200};
`

interface LanguageBtnProps {
  isFirst?: boolean
  isLast?: boolean
}

export const LanguageBtn = styled.TouchableOpacity<LanguageBtnProps>`
  margin-top: ${({ isFirst = false }) => (isFirst ? spacing.sm : 0)}px;
  padding-bottom: ${spacing.sm}px;

  flex-direction: row;
  align-items: center;
  gap: ${spacing.md}px;

  ${({ isLast = false }) => !isLast && LanguageBtnBorderStyles}
`

export const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  right: ${spacing.sm}px;
  top: ${spacing.sm}px;
`

export const LanguageImg = styled.Image`
  width: 24px;
  height: 24px;
`
