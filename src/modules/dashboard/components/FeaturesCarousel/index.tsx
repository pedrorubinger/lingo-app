import React, { useState } from "react"
import { Entypo } from "@expo/vector-icons"

import { featureCards } from "@modules/dashboard/utils"
import { Theme } from "@styles/index"
import {
  FeatureBox,
  FeatureCaption,
  FeatureCaptionBox,
  FeatureCard,
  FeatureImg,
  FeatureNavigator,
} from "@modules/dashboard/components/FeaturesCarousel/styles"

const { colors } = Theme

interface Props {}

const CAROUSEL_LENGTH = featureCards.length

export const FeaturesCarrousel: React.FC<Props> = () => {
  const [index, setCurrentIndex] = useState<number>(0)
  const currentFeature = featureCards[index]

  const onPressNext = () => {
    setCurrentIndex((i) => {
      if (CAROUSEL_LENGTH - 1 === i) return 0
      else return i + 1
    })
  }

  const onPressPrev = () => {
    setCurrentIndex((i) => {
      if (i === 0) return CAROUSEL_LENGTH - 1
      else return i - 1
    })
  }

  return (
    <FeatureBox>
      <FeatureNavigator onPress={onPressPrev}>
        <Entypo name="chevron-left" size={24} color={colors.koamaru300} />
      </FeatureNavigator>

      <FeatureCard>
        <FeatureImg source={currentFeature.source} />
        <FeatureCaptionBox>
          <FeatureCaption>{currentFeature.text}</FeatureCaption>
        </FeatureCaptionBox>
      </FeatureCard>

      <FeatureNavigator onPress={onPressNext}>
        <Entypo name="chevron-right" size={24} color={colors.koamaru300} />
      </FeatureNavigator>
    </FeatureBox>
  )
}
