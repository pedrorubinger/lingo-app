import styled from "styled-components/native"

import { Theme } from "@styles/theme"

const { colors, spacing } = Theme

export const Box = styled.View`
  width: 100%;
  height: 100%;
  padding: ${spacing.xxxl}px ${spacing.md}px ${spacing.md}px ${spacing.md}px;

  background-color: ${colors.grey100};

  align-items: center;
`
