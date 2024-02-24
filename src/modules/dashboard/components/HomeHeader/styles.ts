import styled from "styled-components/native"

import { Theme } from "@styles/index"

const { spacing } = Theme

export const Box = styled.View`
  margin: ${spacing.xxs}px 0 ${spacing.lg}px 0;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const MessageBox = styled.View`
  margin-top: ${spacing.sm}px;
`

export const TouchableMenu = styled.TouchableOpacity``
