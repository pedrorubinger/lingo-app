import { v4 } from "uuid"

import {
  TranslatorLanguage,
  TranslatorLanguageCountry,
  TranslatorLanguageName,
  TranslatorLanguageNameLabel,
  TranslatorMessageData,
  TranslatorMessageOrigin,
} from "@interfaces/index"

interface TranslatorDefinitions {
  LANGUAGES: TranslatorLanguage[]
  INITIAL_MESSAGES: TranslatorMessageData[]
  AVAILABLE_LANGUAGES_COUNT: number
}

const LANGUAGES = [
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
    id: "russian",
    countries: [TranslatorLanguageCountry.RUSSIA],
    image: require("@assets/images/flags/russia.png"),
    name: TranslatorLanguageName.RUSSIAN,
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
  {
    id: "french",
    countries: [TranslatorLanguageCountry.FRANCE],
    image: require("@assets/images/flags/france.png"),
    name: TranslatorLanguageName.FRENCH,
  },
  {
    id: "italian",
    countries: [TranslatorLanguageCountry.ITALY],
    image: require("@assets/images/flags/italy.png"),
    name: TranslatorLanguageName.ITALIAN,
  },
  {
    id: "japanese",
    countries: [TranslatorLanguageCountry.JAPAN],
    image: require("@assets/images/flags/japan.png"),
    name: TranslatorLanguageName.JAPANESE,
  },
  {
    id: "arabic",
    countries: [TranslatorLanguageCountry.SAUDI_ARABIA],
    image: require("@assets/images/flags/saudi-arabia.png"),
    name: TranslatorLanguageName.ARABIC,
  },
]

export const TranslatorDefinitions: TranslatorDefinitions = {
  LANGUAGES,
  INITIAL_MESSAGES: [
    {
      id: v4(),
      content: `Hi, There!\n\nI will translate every sentence or text from any language into ${
        TranslatorLanguageNameLabel[TranslatorLanguageName[LANGUAGES[0].name]]
      }. You can change the target language by clicking on the country flag next to the text box.`,
      origin: TranslatorMessageOrigin.APPLICATION,
    },
  ],
  AVAILABLE_LANGUAGES_COUNT: LANGUAGES.length,
}
