import styled from "styled-components/native"

import { Theme } from "@styles/index"
import { Dimensions } from "react-native"

const { colors, spacing } = Theme

export const Content = styled.View`
  flex: 1;
  width: 100%;
`

export const Body = styled.View`
  gap: ${spacing.lg}px;
`

export const ItemBox = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  gap: ${spacing.md}px;
`

export const Footer = styled.View`
  border-top-width: 1px;
  border-top-color: ${colors.grey300};
  margin-top: ${spacing.md}px;
  padding-vertical: ${spacing.lg}px;
`
