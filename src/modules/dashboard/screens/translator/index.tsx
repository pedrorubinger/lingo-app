import React, { useEffect, useRef, useState } from "react"
import { Keyboard, ScrollView } from "react-native"
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
  ChatMessageLoader,
  Input,
  ScreenBox,
  ScreenHeader,
} from "@components/index"
import {
  ChatMessageLoaderBox,
  ContentBox,
} from "@modules/dashboard/screens/translator/styles"
import {
  TranslatorDefinitions,
  getLanguageLabel,
  isEmptyOrOnlyNewlines,
} from "@modules/dashboard/utils"
import { TranslatorLanguagesDropdown } from "@modules/dashboard/components"

interface Props extends DashboardStackScreenProps<"Translator"> {}

export const Translator: React.FC<Props> = () => {
  const screenBoxScrollerRef = useRef<ScrollView>(null)
  const scrollerTimeout = useRef<NodeJS.Timeout | null>(null)

  const [isMessageLoading, setIsMessageLoading] = useState(false)
  const [isSelectorVisible, setIsSelectorVisible] = useState(false)
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<TranslatorMessageData[]>(
    TranslatorDefinitions.INITIAL_MESSAGES
  )
  const [language, setLanguage] = useState<TranslatorLanguage>(
    TranslatorDefinitions.LANGUAGES[0]
  )

  const scrollToEnd = () => {
    scrollerTimeout.current = setTimeout(() => {
      screenBoxScrollerRef?.current?.scrollToEnd()
    }, 100)
  }

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
    scrollToEnd()
  }

  const onPressInput = () => onCloseLanguageSelector()

  const onSendMessage = () => {
    if (isEmptyOrOnlyNewlines(message)) return

    setMessages((prev) => [
      ...prev,
      { origin: TranslatorMessageOrigin.USER, content: message, id: v4() },
    ])
    setMessage("")

    if (Keyboard.isVisible()) Keyboard.dismiss()

    setIsMessageLoading(true)

    setTimeout(() => {
      setIsMessageLoading(false)
    }, 3000)

    scrollToEnd()
  }

  const onChangeMessage = (text: string) => setMessage(text)

  useEffect(() => {
    return () => {
      if (scrollerTimeout.current) clearTimeout(scrollerTimeout.current)
    }
  }, [])

  return (
    <>
      <ScreenBox scrollViewRef={screenBoxScrollerRef}>
        <ScreenHeader title="Translator" />

        <ContentBox>
          {messages.map((message) => {
            return <ChatMessage key={message.id} message={message} />
          })}

          {!!isMessageLoading && (
            <ChatMessageLoaderBox>
              <ChatMessageLoader key={new Date().getTime()} />
            </ChatMessageLoaderBox>
          )}
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
        isMessageLoading={isMessageLoading}
        languageSelector={{ language, onPressLanguageSelector }}
        Input={
          <Input
            value={message}
            isDisabled={isMessageLoading}
            onPressIn={onPressInput}
            onChangeText={onChangeMessage}
            placeholder={`Translate any text to ${getLanguageLabel(
              language
            )}...`}
            button={{
              icon: "paper-plane",
              onPress: onSendMessage,
              btnProps: { disabled: isMessageLoading },
            }}
            numberOfLines={1}
            multiline
          />
        }
      />
    </>
  )
}
