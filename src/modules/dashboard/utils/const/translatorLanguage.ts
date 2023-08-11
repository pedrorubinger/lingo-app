import {
  TranslatorLanguage,
  TranslatorLanguageCountry,
  TranslatorLanguageName,
} from "@interfaces/index"

export const translatorLanguages: TranslatorLanguage[] = [
  {
    id: "portuguese",
    countries: [
      TranslatorLanguageCountry.BRAZIL,
      TranslatorLanguageCountry.PORTUGAL,
    ],
    image: require("@assets/images/flags/brazil.png"),
    name: TranslatorLanguageName.PORTUGUESE,
  },
  {
    id: "english",
    countries: [
      TranslatorLanguageCountry.UNITED_KINGDOM,
      TranslatorLanguageCountry.USA,
    ],
    image: require("@assets/images/flags/uk.png"),
    name: TranslatorLanguageName.ENGLISH,
  },
]

export const AVAILABLE_LANGUAGES_COUNT = translatorLanguages.length
