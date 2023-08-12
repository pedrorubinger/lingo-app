import React from "react"
import { Entypo } from "@expo/vector-icons"

import {
  Box,
  CloseBtn,
  LanguageImg,
  LanguageBtn,
  Content,
} from "@modules/dashboard/components/LanguagesDropdown/styles"
import { Typography } from "@components/Typography"
import { Theme } from "@styles/index"
import { translatorLanguages } from "@modules/dashboard/utils"
import {
  TranslatorLanguage,
  TranslatorLanguageName,
  TranslatorLanguageNameLabel,
} from "@interfaces/index"

const { colors } = Theme

interface Props {
  onClose?: () => void
  onChangeLanguage: (language: TranslatorLanguage) => void
  selected: TranslatorLanguageName
}

export const TranslatorLanguagesDropdown: React.FC<Props> = ({
  selected,
  onChangeLanguage,
  onClose,
}) => {
  return (
    <Box>
      <Content>
        {!!onClose && (
          <CloseBtn onPress={onClose}>
            <Entypo name="circle-with-cross" size={18} color={colors.grey500} />
          </CloseBtn>
        )}

        {translatorLanguages.map((language, i) => {
          const isLast = i === translatorLanguages.length - 1
          const isFirst = i === 0
          const isActive = selected === language.name

          const onPress = () => onChangeLanguage(language)

          return (
            <LanguageBtn
              key={language.id}
              isFirst={isFirst}
              isLast={isLast}
              onPress={onPress}
            >
              <LanguageImg source={language.image} />

              <Typography color={isActive ? "green400" : "grey700"}>
                {
                  TranslatorLanguageNameLabel[
                    TranslatorLanguageName[language.name]
                  ]
                }
              </Typography>
            </LanguageBtn>
          )
        })}
      </Content>
    </Box>
  )
}
