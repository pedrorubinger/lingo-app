import {
  TranslatorLanguage,
  TranslatorLanguageName,
  TranslatorLanguageNameLabel,
} from "@interfaces/index"

export const getLanguageLabel = (language: TranslatorLanguage) =>
  TranslatorLanguageNameLabel[TranslatorLanguageName[language.name]]
