import React, { useEffect } from "react"
import { Animated } from "react-native"

import { TranslatorMessageData, TranslatorMessageType } from "@interfaces/index"
import {
  MessageBox,
  MessageTypography,
} from "@components/Chat/ChatMessage/styles"

interface Props {
  message: TranslatorMessageData
}

export const ChatMessage: React.FC<Props> = ({ message }) => {
  const animation = new Animated.Value(-100)
  const animatedStyles = {
    transform: [{ translateX: animation }],
  }

  const isError = message.type === TranslatorMessageType.ERROR

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
      isError={isError}
      style={[animatedStyles]}
    >
      <MessageTypography font="sm2" isError={isError} origin={message.origin}>
        {message.content}
      </MessageTypography>
    </MessageBox>
  )
}
