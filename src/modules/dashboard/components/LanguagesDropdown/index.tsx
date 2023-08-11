import React from "react"
import { Entypo } from "@expo/vector-icons"

import {
  Box,
  CloseBtn,
  LanguageBtn,
} from "@modules/dashboard/components/LanguagesDropdown/styles"
import { Typography } from "@components/Typography"
import { Theme } from "@styles/index"
import { translatorLanguages } from "@modules/dashboard/utils"
import {
  TranslatorLanguageName,
  TranslatorLanguageNameLabel,
} from "@interfaces/TranslatorLanguage"

const { colors } = Theme

interface Props {
  onClose?: () => void
}

export const TranslatorLanguagesDropdown: React.FC<Props> = ({ onClose }) => {
  return (
    <Box>
      {!!onClose && (
        <CloseBtn onPress={onClose}>
          <Entypo name="circle-with-cross" size={18} color={colors.grey500} />
        </CloseBtn>
      )}

      {translatorLanguages.map((language) => {
        return (
          <LanguageBtn key={language.id}>
            <Typography color="grey700">
              {
                TranslatorLanguageNameLabel[
                  TranslatorLanguageName[language.name]
                ]
              }
            </Typography>
          </LanguageBtn>
        )
      })}
    </Box>
  )
}
