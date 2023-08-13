import { StatusBar } from "react-native"
import styled from "styled-components/native"

import { Theme } from "@styles/theme"
import { isAndroid } from "@utils/index"

const { colors, spacing } = Theme

export const Box = styled.SafeAreaView`
  flex: 1;
`

const contentMarginTop: number = isAndroid
  ? (StatusBar.currentHeight as number) + spacing.sm
  : 0

export const Content = styled.ScrollView.attrs(() => ({
  alwaysBounceVertical: false,
}))`
  margin-top: ${contentMarginTop}px;
  padding: ${spacing.sm}px ${spacing.lg}px ${spacing.sm}px ${spacing.lg}px;

  background-color: ${colors.grey80};

  flex: 1;
`
