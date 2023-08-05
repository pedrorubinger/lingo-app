import styled from "styled-components/native"

import { Theme } from "@styles/theme"

const { spacing } = Theme

export const Body = styled.View``

interface CardsBoxProps {
  isFirstBox?: boolean
}

export const CardsBox = styled.View<CardsBoxProps>`
  width: 100%;
  padding: 0;
  margin-top: ${({ isFirstBox = false }) => (isFirstBox ? 0 : spacing.lg)}px;

  flex-direction: row;
  gap: ${spacing.md}px;
`

export const CardsTitleBox = styled.View`
  margin-top: ${spacing.xs}px;
  margin-bottom: ${spacing.md}px;
`
