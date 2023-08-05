import styled from "styled-components/native"

import { Theme } from "@styles/theme"

const { colors, spacing } = Theme

export const Box = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.View`
  padding: ${spacing.sm}px ${spacing.lg}px ${spacing.sm}px ${spacing.lg}px;

  background-color: ${colors.grey80};

  flex: 1;
  align-items: center;
`
