import styled from "styled-components/native"

import { Theme } from "@styles/theme"
import { Typography } from "@components/Typography"
import { Animated } from "react-native"

const { colors, radius, spacing } = Theme

const CARD_HEIGHT = 340

export const FeatureBox = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: center;
  gap: ${spacing.sm}px;
`

export const FeatureCard = styled(Animated.View)`
  flex: 1;
  height: ${CARD_HEIGHT}px;

  background-color: ${colors.white};
  border-radius: ${radius.md}px;
`

export const FeatureImg = styled.Image`
  width: 100%;
  height: ${CARD_HEIGHT}px;
  opacity: 0.95;

  border-radius: ${radius.md}px;
`

export const FeatureCaptionBox = styled.View`
  width: 100%;
  padding: ${spacing.md}px ${spacing.md}px;

  position: absolute;
  bottom: 0;

  border-bottom-left-radius: ${radius.md}px;
  border-bottom-right-radius: ${radius.md}px;

  background-color: ${colors.black};
  opacity: 0.8;
`

export const FeatureCaption = styled(Typography)`
  color: ${colors.white};
`

export const FeatureNavigator = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`

export const CarouselPaginationBox = styled.View`
  margin-top: ${spacing.md}px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: auto;
`

export const CarouselPaginationTouchable = styled.TouchableOpacity`
  flex-direction: row;
  gap: -5px;
`
