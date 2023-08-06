import React, { useEffect, useRef, useState } from "react"
import { Animated } from "react-native"
import { Entypo } from "@expo/vector-icons"

import { FEATURES_CAROUSEL_DEF, featureCards } from "@modules/dashboard/utils"
import { Theme } from "@styles/index"
import {
  CarouselPaginationTouchable,
  CarouselPaginationBox,
  FeatureBox,
  FeatureCaption,
  FeatureCaptionBox,
  FeatureCard,
  FeatureImg,
  FeatureNavigator,
} from "@modules/dashboard/components/FeaturesCarousel/styles"

const { colors } = Theme

interface Props {}

export const FeaturesCarrousel: React.FC<Props> = () => {
  const fadeAnimationRef = useRef(new Animated.Value(1)).current
  const [hasFinishedAnimation, setHasFinishedAnimation] = useState(true)
  const [index, setCurrentIndex] = useState<number>(0)
  const currentFeature = featureCards[index]

  /* Timeout */
  const prevBtnTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const nextBtnTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const fadeIn = () => {
    Animated.timing(fadeAnimationRef, {
      toValue: 1,
      duration: FEATURES_CAROUSEL_DEF.FADE_ANIMATION_TIME,
      useNativeDriver: true,
    }).start(() => {
      setHasFinishedAnimation(true)
    })
  }

  const fadeOut = () => {
    setHasFinishedAnimation(false)
    Animated.timing(fadeAnimationRef, {
      toValue: 0,
      duration: FEATURES_CAROUSEL_DEF.FADE_ANIMATION_TIME,
      useNativeDriver: true,
    }).start(() => {
      fadeIn()
    })
  }

  const onPressNext = () => {
    if (!hasFinishedAnimation) return

    fadeOut()
    nextBtnTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((i) => {
        if (FEATURES_CAROUSEL_DEF.CAROUSEL_LENGTH - 1 === i) return 0
        else return i + 1
      })
    }, FEATURES_CAROUSEL_DEF.FADE_ANIMATION_TIME)
  }

  const onPressPrev = () => {
    if (!hasFinishedAnimation) return

    fadeOut()
    prevBtnTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((i) => {
        if (i === 0) return FEATURES_CAROUSEL_DEF.CAROUSEL_LENGTH - 1
        else return i - 1
      })
    }, FEATURES_CAROUSEL_DEF.FADE_ANIMATION_TIME)
  }

  useEffect(() => {
    return () => {
      if (prevBtnTimeoutRef.current) clearTimeout(prevBtnTimeoutRef.current)
      if (nextBtnTimeoutRef.current) clearTimeout(nextBtnTimeoutRef.current)
    }
  }, [])

  return (
    <>
      <FeatureBox style={{ opacity: fadeAnimationRef }}>
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

      <CarouselPaginationBox>
        <CarouselPaginationTouchable onPress={onPressNext}>
          <Entypo name="dot-single" size={22} color={colors.grey500} />
          <Entypo name="dot-single" size={22} color={colors.grey500} />
          <Entypo name="dot-single" size={22} color={colors.grey500} />
        </CarouselPaginationTouchable>
      </CarouselPaginationBox>
    </>
  )
}
