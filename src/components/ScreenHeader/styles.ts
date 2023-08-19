import styled from "styled-components/native"

import { Theme } from "@styles/theme"

const { spacing, zIndex } = Theme

export const Box = styled.View`
  width: 100%;
  margin-bottom: ${spacing.lg}px;

  flex-direction: row;
  align-items: center;

  z-index: ${zIndex.max};
`

export const TouchableArrow = styled.TouchableOpacity``

export const TitleBox = styled.View`
  flex: 1;
  align-items: center;
`
