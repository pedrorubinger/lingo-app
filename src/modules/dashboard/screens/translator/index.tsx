import React, { useEffect, useRef, useState } from "react"
import { Keyboard, ScrollView } from "react-native"
import { v4 } from "uuid"

import {
  DashboardStackScreenProps,
  TranslatorLanguage,
  TranslatorMessageData,
  TranslatorMessageOrigin,
  TranslatorMessageType,
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
import { useCreateTranslationRequest } from "@modules/dashboard/hooks"
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
  const { isLoading: isMessageLoading, submit } = useCreateTranslationRequest()

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
      {
        origin: TranslatorMessageOrigin.APPLICATION,
        type: TranslatorMessageType.DEFAULT,
        content,
        id: v4(),
      },
    ])

    onCloseLanguageSelector()
    scrollToEnd()
  }

  const onPressInput = () => onCloseLanguageSelector()

  const onSendMessage = async () => {
    if (isEmptyOrOnlyNewlines(message)) return

    setMessages((prev) => [
      ...prev,
      {
        type: TranslatorMessageType.DEFAULT,
        origin: TranslatorMessageOrigin.USER,
        content: message,
        id: v4(),
      },
    ])
    setMessage("")

    if (Keyboard.isVisible()) Keyboard.dismiss()

    const { data, error } = await submit({
      language: language.name,
      sentence: message,
    })

    scrollToEnd()

    if (error) {
      setMessages((prev) => [
        ...prev,
        {
          origin: TranslatorMessageOrigin.APPLICATION,
          type: TranslatorMessageType.ERROR,
          content: error.message,
          id: v4(),
        },
      ])
    }

    if (data) {
      setMessages((prev) => [
        ...prev,
        {
          origin: TranslatorMessageOrigin.APPLICATION,
          type: TranslatorMessageType.DEFAULT,
          content: data.message,
          id: v4(),
        },
      ])
    }
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
