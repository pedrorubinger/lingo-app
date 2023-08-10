import React from "react"

import {
  DashboardStackScreenProps,
  TranslatorMessageData,
  TranslatorMessageOrigin,
} from "@interfaces/index"
import { Theme } from "@styles/index"
import { Input, ScreenBox, ScreenHeader } from "@components/index"
import {
  ContentBox,
  Footer,
  FooterContent,
  MessageBox,
  MessageTypography,
} from "@modules/dashboard/screens/translator/styles"

const { colors } = Theme

interface Props extends DashboardStackScreenProps<"Translator"> {}

export const Translator: React.FC<Props> = () => {
  const messages: TranslatorMessageData[] = [
    {
      id: "1",
      content: "Hello! What can I translate for you?",
      origin: TranslatorMessageOrigin.APPLICATION,
    },
    {
      id: "2",
      content: "Ich möchte bitte eine Pepperoni-Pizza.",
      origin: TranslatorMessageOrigin.USER,
    },
  ]

  return (
    <>
      <ScreenBox scrollViewProps={{ contentContainerStyle: { flexGrow: 1 } }}>
        <ScreenHeader title="Translator" />

        <ContentBox>
          {messages.map((message) => {
            return (
              <MessageBox key={message.id} origin={message.origin}>
                <MessageTypography font="sm2" origin={message.origin}>
                  {message.content}
                </MessageTypography>
              </MessageBox>
            )
          })}
        </ContentBox>
      </ScreenBox>

      <Footer>
        <FooterContent>
          <Input
            placeholder="Type your text here..."
            button={{ onPress: () => console.log("PRESSED") }}
          />
        </FooterContent>
      </Footer>
    </>
  )
}
