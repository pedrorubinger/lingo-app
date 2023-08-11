import React, { useState } from "react"

import {
  DashboardStackScreenProps,
  TranslatorLanguage,
  TranslatorLanguageName,
  TranslatorLanguageNameLabel,
  TranslatorMessageData,
  TranslatorMessageOrigin,
} from "@interfaces/index"
import { Input, ScreenBox, ScreenHeader } from "@components/index"
import {
  ContentBox,
  Footer,
  FooterContent,
  InputBox,
  LanguageSelectorBox,
  LanguageSelectorBtn,
  LanguageSelectorImg,
  MessageBox,
  MessageTypography,
} from "@modules/dashboard/screens/translator/styles"
import { translatorLanguages } from "@modules/dashboard/utils"

interface Props extends DashboardStackScreenProps<"Translator"> {}

export const Translator: React.FC<Props> = () => {
  const [language, setLanguage] = useState<TranslatorLanguage>(
    translatorLanguages[0]
  )
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
    {
      id: "3",
      content: "Por favor, eu gostaria de pedir uma pizza de pepperoni.",
      origin: TranslatorMessageOrigin.APPLICATION,
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
          <LanguageSelectorBox>
            <LanguageSelectorBtn>
              <LanguageSelectorImg source={language.image} />
            </LanguageSelectorBtn>
          </LanguageSelectorBox>

          <InputBox>
            <Input
              placeholder={`Translate any text to ${
                TranslatorLanguageNameLabel[
                  TranslatorLanguageName[language.name]
                ]
              }...`}
              button={{
                icon: "paper-plane",
                onPress: () => console.log("PRESSED"),
              }}
            />
          </InputBox>
        </FooterContent>
      </Footer>
    </>
  )
}
