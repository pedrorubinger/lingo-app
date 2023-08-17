import React, { useEffect, useRef, useState } from "react"
import { Animated, PanResponder } from "react-native"

import {
  TranslatorMessageData,
  TranslatorMessageOrigin,
} from "@interfaces/index"
import {
  MessageBox,
  MessageTypography,
} from "@components/Chat/ChatMessage/styles"

interface Props {
  message: TranslatorMessageData
}

export const ChatMessage: React.FC<Props> = ({ message }) => {
  const isAppMessage = message.origin == TranslatorMessageOrigin.APPLICATION
  const animation = new Animated.Value(-100)
  const animatedStyles = {
    transform: [{ translateX: animation }],
  }

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(0)
    })
  }

  useEffect(() => {
    startAnimation()
  }, [])

  return (
    <MessageBox
      key={message.id}
      origin={message.origin}
      style={[animatedStyles]}
    >
      <MessageTypography font="sm2" origin={message.origin}>
        {message.content}
      </MessageTypography>
    </MessageBox>
  )
}
