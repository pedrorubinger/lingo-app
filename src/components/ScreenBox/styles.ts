import { StatusBar } from "react-native"
import styled from "styled-components/native"

import { Theme } from "@styles/theme"
import { isAndroid } from "@utils/index"

const { colors, spacing } = Theme

export const Box = styled.SafeAreaView`
  flex: 1;
`

const contentPaddingTop: number = isAndroid
  ? (StatusBar.currentHeight as number) + spacing.md
  : spacing.sm

export const Content = styled.ScrollView.attrs(() => ({
  alwaysBounceVertical: false,
}))`
  padding: ${contentPaddingTop}px ${spacing.lg}px ${spacing.sm}px
    ${spacing.lg}px;

  background-color: ${colors.grey80};

  flex: 1;
`
