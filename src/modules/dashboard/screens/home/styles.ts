import styled from "styled-components/native"

import { Theme } from "@styles/theme"
import { Typography } from "@components/Typography"

const { colors, radius, spacing } = Theme

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

/* Carousel */

export const CarouselTitleBox = styled.View`
  margin-top: ${spacing.xl}px;
  margin-bottom: ${spacing.md}px;
`

export const CarouselBox = styled.View`
  width: 100%;

  flex-direction: row;
  gap: ${spacing.md}px;
`

export const CarouselCard = styled.View`
  width: 160px;
  height: 300px;

  background-color: ${colors.white};
`

export const CarouselImg = styled.Image`
  width: 160px;
  height: 300px;
  opacity: 1;

  border-radius: ${radius.md}px;
`

export const CarouselCaptionBox = styled.View`
  width: 100%;
  padding: ${spacing.md}px ${spacing.md}px;

  position: absolute;
  bottom: 0;

  border-bottom-left-radius: ${radius.md}px;
  border-bottom-right-radius: ${radius.md}px;

  background-color: ${colors.black};
  opacity: 0.8;
`

export const CarouselCaption = styled(Typography)`
  color: ${colors.white};
`
