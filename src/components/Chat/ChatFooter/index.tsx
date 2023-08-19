import React from "react"

import { TranslatorLanguage } from "@interfaces/index"
import {
  Footer,
  FooterContent,
  InputBox,
  LanguageSelectorBox,
  LanguageSelectorBtn,
  LanguageSelectorImg,
} from "@components/Chat/ChatFooter/styles"

interface LanguageSelector {
  language: TranslatorLanguage
  onPressLanguageSelector: () => void
}

interface Props {
  Input: React.ReactNode
  /** @default false */
  isMessageLoading?: boolean
  languageSelector?: LanguageSelector
}

export const ChatFooter: React.FC<Props> = ({
  Input,
  languageSelector,
  isMessageLoading = true,
}) => {
  return (
    <Footer>
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
