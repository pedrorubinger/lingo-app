import React from "react"

import { TranslatorLanguage } from "@interfaces/index"
import {
  Footer,
  FooterContent,
  InputBox,
  LanguageSelectorBox,
  LanguageSelectorBtn,
  LanguageSelectorImg,
  LoaderBox,
} from "@components/Chat/ChatFooter/styles"
import { ChatMessageLoader } from "@components/Chat"

interface LanguageSelector {
  language: TranslatorLanguage
  onPressLanguageSelector: () => void
}

interface Props {
  Input: React.ReactNode
  /** @default false */
  isAwaitingResponse?: boolean
  languageSelector?: LanguageSelector
}

export const ChatFooter: React.FC<Props> = ({
  Input,
  languageSelector,
  isAwaitingResponse = true,
}) => {
  return (
    <Footer>
      {!!isAwaitingResponse && (
        <LoaderBox>
          <ChatMessageLoader />
        </LoaderBox>
      )}

      <FooterContent>
        {!!languageSelector && (
          <LanguageSelectorBox>
            <LanguageSelectorBtn
              onPress={languageSelector.onPressLanguageSelector}
            >
              <LanguageSelectorImg source={languageSelector.language.image} />
            </LanguageSelectorBtn>
          </LanguageSelectorBox>
        )}

        <InputBox>{Input}</InputBox>
      </FooterContent>
    </Footer>
  )
}
