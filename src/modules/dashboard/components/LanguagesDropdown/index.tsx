import React from "react"
import { FlatList, ListRenderItem } from "react-native"
import { Entypo } from "@expo/vector-icons"

import { Theme } from "@styles/index"
import {
  TranslatorLanguage,
  TranslatorLanguageName,
  TranslatorLanguageNameLabel,
} from "@interfaces/index"
import { Typography } from "@components/Typography"
import { TranslatorDefinitions } from "@modules/dashboard/utils"
import {
  Box,
  CloseBtn,
  LanguageImg,
  LanguageBtn,
} from "@modules/dashboard/components/LanguagesDropdown/styles"

const { colors } = Theme
const { LANGUAGES } = TranslatorDefinitions

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
  const renderItem: ListRenderItem<TranslatorLanguage> = ({ item, index }) => {
    const isLast = index === LANGUAGES.length - 1
    const isFirst = index === 0
    const isActive = selected === item.name

    const onPress = () => onChangeLanguage(item)

    return (
      <LanguageBtn
        key={item.id}
        isFirst={isFirst}
        isLast={isLast}
        onPress={onPress}
      >
        <LanguageImg source={item.image} />

        <Typography font="sm2" color={isActive ? "green400" : "grey700"}>
          {TranslatorLanguageNameLabel[TranslatorLanguageName[item.name]]}
        </Typography>
      </LanguageBtn>
    )
  }

  return (
    <Box>
      {!!onClose && (
        <CloseBtn onPress={onClose}>
          <Entypo name="circle-with-cross" size={18} color={colors.grey500} />
        </CloseBtn>
      )}

      <FlatList
        data={LANGUAGES}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
      />
    </Box>
  )
}
