import styled from "styled-components/native"

import { Theme } from "@styles/index"

const { spacing } = Theme

export const ContentBox = styled.View`
  width: 100%;
  padding-bottom: ${spacing.lg}px;

  flex: 1;
  flex-direction: column;
  gap: ${spacing.md}px;
`
