import React, { useCallback, useEffect, useRef, useState } from "react"
import { Animated } from "react-native"
import { Entypo } from "@expo/vector-icons"

import {
  CarouselFeaturesDefinitions,
  featureCards,
} from "@modules/dashboard/utils"
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
  const transitionTimerRef = useRef<NodeJS.Timer | null>(null)

  const fadeIn = () => {
    Animated.timing(fadeAnimationRef, {
      toValue: 1,
      duration: CarouselFeaturesDefinitions.FADE_ANIMATION_TIME,
      useNativeDriver: true,
    }).start(() => {
      setHasFinishedAnimation(true)

      if (!transitionTimerRef.current) setTransitionInterval()
    })
  }

  const fadeOut = () => {
    setHasFinishedAnimation(false)
    Animated.timing(fadeAnimationRef, {
      toValue: 0,
      duration: CarouselFeaturesDefinitions.FADE_ANIMATION_TIME,
      useNativeDriver: true,
    }).start(() => {
      fadeIn()
    })
  }

  const slideForward = () => {
    fadeOut()
    nextBtnTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((i) => {
        if (CarouselFeaturesDefinitions.CAROUSEL_LENGTH - 1 === i) return 0
        else return i + 1
      })
    }, CarouselFeaturesDefinitions.FADE_ANIMATION_TIME)
  }

  const slideBack = () => {
    fadeOut()
    prevBtnTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((i) => {
        if (i === 0) return CarouselFeaturesDefinitions.CAROUSEL_LENGTH - 1
        else return i - 1
      })
    }, CarouselFeaturesDefinitions.FADE_ANIMATION_TIME)
  }

  const setTransitionInterval = useCallback(() => {
    transitionTimerRef.current = setInterval(() => {
      slideForward()
    }, 6000)
  }, [transitionTimerRef])

  const onNavigate = (action: "PREV" | "NEXT") => {
    if (transitionTimerRef.current) {
      clearInterval(transitionTimerRef.current)
      transitionTimerRef.current = null
    }

    if (!hasFinishedAnimation) return

    if (action === "PREV") slideBack()
    else slideForward()
  }

  useEffect(() => {
    setTransitionInterval()

    return () => {
      if (transitionTimerRef.current) clearInterval(transitionTimerRef.current)
      if (prevBtnTimeoutRef.current) clearTimeout(prevBtnTimeoutRef.current)
      if (nextBtnTimeoutRef.current) clearTimeout(nextBtnTimeoutRef.current)
    }
  }, [setTransitionInterval])

  return (
    <>
      <FeatureBox>
        <FeatureNavigator onPress={() => onNavigate("PREV")}>
          <Entypo name="chevron-left" size={24} color={colors.koamaru300} />
        </FeatureNavigator>

        <FeatureCard style={{ opacity: fadeAnimationRef }}>
          <FeatureImg source={currentFeature.source} />

          <FeatureCaptionBox>
            <FeatureCaption>{currentFeature.text}</FeatureCaption>
          </FeatureCaptionBox>
        </FeatureCard>

        <FeatureNavigator onPress={() => onNavigate("NEXT")}>
          <Entypo name="chevron-right" size={24} color={colors.koamaru300} />
        </FeatureNavigator>
      </FeatureBox>

      <CarouselPaginationBox>
        <CarouselPaginationTouchable onPress={() => onNavigate("NEXT")}>
          <Entypo name="dot-single" size={22} color={colors.grey500} />
          <Entypo name="dot-single" size={22} color={colors.grey500} />
          <Entypo name="dot-single" size={22} color={colors.grey500} />
        </CarouselPaginationTouchable>
      </CarouselPaginationBox>
    </>
  )
}
