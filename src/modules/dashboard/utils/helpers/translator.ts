import {
  TranslatorLanguage,
  TranslatorLanguageName,
  TranslatorLanguageNameLabel,
} from "@interfaces/index"

export const getLanguageLabel = (language: TranslatorLanguage) =>
  TranslatorLanguageNameLabel[TranslatorLanguageName[language.name]]

export const isEmptyOrOnlyNewlines = (str: string) => {
  if (!str) return true

  const newlineRegex = /^\s*$/

  return newlineRegex.test(str)
}
