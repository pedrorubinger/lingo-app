import React, { useState } from "react"
import { v4 } from "uuid"

import {
  DashboardStackScreenProps,
  TranslatorLanguage,
  TranslatorMessageData,
  TranslatorMessageOrigin,
} from "@interfaces/index"
import {
  ChatFooter,
  ChatMessage,
  Input,
  ScreenBox,
  ScreenHeader,
} from "@components/index"
import { ContentBox } from "@modules/dashboard/screens/translator/styles"
import {
  TranslatorDefinitions,
  getLanguageLabel,
} from "@modules/dashboard/utils"
import { TranslatorLanguagesDropdown } from "@modules/dashboard/components"

interface Props extends DashboardStackScreenProps<"Translator"> {}

export const Translator: React.FC<Props> = () => {
  const [isSelectorVisible, setIsSelectorVisible] = useState(false)
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<TranslatorMessageData[]>(
    TranslatorDefinitions.INITIAL_MESSAGES
  )
  const [language, setLanguage] = useState<TranslatorLanguage>(
    TranslatorDefinitions.LANGUAGES[0]
  )

  const onPressLanguageSelector = () => setIsSelectorVisible((prev) => !prev)

  const onCloseLanguageSelector = () => setIsSelectorVisible(false)

  const onChangeLanguage = (newLanguage: TranslatorLanguage): void => {
    const isSameLanguage = newLanguage.id === language.id

    if (isSameLanguage) return onCloseLanguageSelector()

    const target = getLanguageLabel(newLanguage)
    const content = `Ok. From now on, I will translate your texts to ${target}!`

    setLanguage(newLanguage)
    setMessages((prev) => [
      ...prev,
      { origin: TranslatorMessageOrigin.APPLICATION, content, id: v4() },
    ])
    onCloseLanguageSelector()
  }

  const onPressInput = () => onCloseLanguageSelector()

  const onSendMessage = () => {
    setMessages((prev) => [
      ...prev,
      { origin: TranslatorMessageOrigin.USER, content: message, id: v4() },
    ])
    setMessage("")
  }

  const onChangeMessage = (text: string) => setMessage(text)

  return (
    <>
      <ScreenBox>
        <ScreenHeader title="Translator" />

        <ContentBox>
          {messages.map((message) => {
            return <ChatMessage key={message.id} message={message} />
          })}
        </ContentBox>
      </ScreenBox>

      {!!isSelectorVisible && (
        <TranslatorLanguagesDropdown
          selected={language.name}
          onChangeLanguage={onChangeLanguage}
          onClose={onCloseLanguageSelector}
        />
      )}

      <ChatFooter
        languageSelector={{ language, onPressLanguageSelector }}
        Input={
          <Input
            value={message}
            onPressIn={onPressInput}
            onChangeText={onChangeMessage}
            placeholder={`Translate any text to ${getLanguageLabel(
              language
            )}...`}
            button={{
              icon: "paper-plane",
              onPress: onSendMessage,
            }}
          />
        }
      />
    </>
  )
}
