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
  {
    id: "german",
    countries: [TranslatorLanguageCountry.GERMANY],
    image: require("@assets/images/flags/germany.png"),
    name: TranslatorLanguageName.GERMAN,
  },
  {
    id: "spanish",
    countries: [
      TranslatorLanguageCountry.ARGENTINA,
      TranslatorLanguageCountry.SPAIN,
    ],
    image: require("@assets/images/flags/argentina.png"),
    name: TranslatorLanguageName.SPANISH,
  },
]

export const AVAILABLE_LANGUAGES_COUNT = translatorLanguages.length
