import React, { useEffect, useRef } from "react"
import { Animated, Easing } from "react-native"

import { Box, Dot } from "@components/Chat/ChatMessageLoader/styles"

export const ChatMessageLoader: React.FC = () => {
  const translateY1 = useRef(new Animated.Value(0)).current
  const translateY2 = useRef(new Animated.Value(0)).current
  const translateY3 = useRef(new Animated.Value(0)).current

  const animateEllipsis = () => {
    Animated.loop(
      Animated.parallel([
        animateDot(translateY1, 0),
        animateDot(translateY2, 200),
        animateDot(translateY3, 300),
      ])
    ).start()
  }

  const animateDot = (animatedValue: any, delay: any) => {
    return Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: -10,
        duration: 300,
        delay,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ])
  }

  useEffect(() => {
    animateEllipsis()
  }, [])

  return (
    <Box>
      <Dot style={{ transform: [{ translateY: translateY1 }] }}>.</Dot>
      <Dot style={{ transform: [{ translateY: translateY2 }] }}>.</Dot>
      <Dot style={{ transform: [{ translateY: translateY3 }] }}>.</Dot>
    </Box>
  )
}
