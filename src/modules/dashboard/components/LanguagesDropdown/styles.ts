import styled, { css } from "styled-components/native"

import { Theme } from "@styles/index"
import { isAndroid } from "@utils/index"

const { colors, radius, spacing, zIndex } = Theme

export const Box = styled.View`
  opacity: 1;
  background-color: ${colors.white};

  position: absolute;
  bottom: ${isAndroid ? 90 : 110}px;
  left: 22px;

  border-radius: ${radius.sm}px;
  border: 1px solid ${colors.grey200};

  height: 250px;
  z-index: ${zIndex.max};
  width: 220px;
  margin-right: ${spacing.md + 4}px;
  padding-left: ${spacing.md + 4}px;
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
  margin-bottom: ${spacing.sm}px;
  padding: ${spacing.sm}px 0;

  flex-direction: row;
  align-items: center;
  gap: ${spacing.md}px;

  ${({ isLast = false }) => !isLast && LanguageBtnBorderStyles}
`

export const CloseBtn = styled.TouchableOpacity`
  margin-right: ${spacing.sm}px;
  padding-top: ${spacing.sm}px;

  align-self: flex-end;
`

export const LanguageImg = styled.Image`
  width: 24px;
  height: 24px;
`
