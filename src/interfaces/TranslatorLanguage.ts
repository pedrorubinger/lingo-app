import { ImageSourcePropType } from "react-native"

export enum TranslatorLanguageCountry {
  ARGENTINA = "ARGENTINA",
  BRAZIL = "BRAZIL",
  GERMANY = "GERMANY",
  PORTUGAL = "PORTUGAL",
  SPAIN = "SPAIN",
  UNITED_KINGDOM = "UNITED_KINGDOM",
  USA = "USA",
}

export enum TranslatorLanguageCountryLabel {
  ARGENTINA = "Argentina",
  BRAZIL = "Brazil",
  GERMANY = "Germany",
  PORTUGAL = "Portugal",
  SPAIN = "Spain",
  UNITED_KINGDOM = "United Kingdom",
  USA = "United States of America",
}

export enum TranslatorLanguageName {
  SPANISH = "SPANISH",
  PORTUGUESE = "PORTUGUESE",
  GERMAN = "GERMAN",
  ENGLISH = "ENGLISH",
}

export enum TranslatorLanguageNameLabel {
  SPANISH = "Spanish",
  PORTUGUESE = "Portuguese",
  GERMAN = "German",
  ENGLISH = "English",
}

export interface TranslatorLanguage {
  id: string
  /** Image path. */
  image: ImageSourcePropType
  countries: TranslatorLanguageCountry[]
  name: TranslatorLanguageName
}
