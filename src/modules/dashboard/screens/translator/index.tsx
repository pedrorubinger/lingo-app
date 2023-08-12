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
import { TranslatorLanguagesDropdown } from "@modules/dashboard/components"

interface Props extends DashboardStackScreenProps<"Translator"> {}

export const Translator: React.FC<Props> = () => {
  const [isLanguageSelectorVisible, setIsLanguageSelectorVisible] =
    useState(false)
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

  const onPressLanguageSelector = () => {
    setIsLanguageSelectorVisible((prev) => !prev)
  }

  const onCloseLanguageSelector = () => setIsLanguageSelectorVisible(false)

  const onChangeLanguage = (language: TranslatorLanguage) => {
    setLanguage(language)
    onCloseLanguageSelector()
  }

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
          {!!isLanguageSelectorVisible && (
            <TranslatorLanguagesDropdown
              selected={language.name}
              onChangeLanguage={onChangeLanguage}
              onClose={onCloseLanguageSelector}
            />
          )}

          <LanguageSelectorBox>
            <LanguageSelectorBtn onPress={onPressLanguageSelector}>
              <LanguageSelectorImg source={language.image} />
            </LanguageSelectorBtn>
          </LanguageSelectorBox>

          <InputBox>
            <Input
              onPressIn={() => {
                if (isLanguageSelectorVisible) onCloseLanguageSelector()
              }}
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
