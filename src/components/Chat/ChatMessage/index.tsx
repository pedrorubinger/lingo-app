import React from "react"

import { TranslatorMessageData } from "@interfaces/index"
import {
  MessageBox,
  MessageTypography,
} from "@components/Chat/ChatMessage/styles"

interface Props {
  message: TranslatorMessageData
}

export const ChatMessage: React.FC<Props> = ({ message }) => {
  return (
    <MessageBox key={message.id} origin={message.origin}>
      <MessageTypography font="sm2" origin={message.origin}>
        {message.content}
      </MessageTypography>
    </MessageBox>
  )
}
