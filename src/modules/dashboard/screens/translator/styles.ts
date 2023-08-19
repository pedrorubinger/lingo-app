import styled from "styled-components/native"

import { Theme } from "@styles/index"

const { spacing, zIndex } = Theme

export const ContentBox = styled.View`
  width: 100%;
  padding-bottom: ${spacing.lg}px;

  flex: 1;
  flex-direction: column;
  gap: ${spacing.md}px;
`

export const ChatMessageLoaderBox = styled.View`
  margin-top: -40px;
  z-index: ${zIndex.min};
`
