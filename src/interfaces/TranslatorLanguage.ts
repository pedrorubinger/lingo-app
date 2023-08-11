import { ImageSourcePropType } from "react-native"

export enum TranslatorLanguageCountry {
  ARGENTINA = "ARGENTINA",
  BRAZIL = "BRAZIL",
  GERMANY = "GERMANY",
  PORTUGAL = "PORTUGAL",
  SPAIN = "SPAIN",
  UNITED_KINGDOM = "UNITED_KINGDOM",
  USA = "USA",
  RUSSIA = "RUSSIA",
  FRANCE = "FRANCE",
  ITALY = "ITALY",
  JAPAN = "JAPAN",
  SAUDI_ARABIA = "SAUDI_ARABIA",
}

export enum TranslatorLanguageCountryLabel {
  ARGENTINA = "Argentina",
  BRAZIL = "Brazil",
  GERMANY = "Germany",
  PORTUGAL = "Portugal",
  SPAIN = "Spain",
  UNITED_KINGDOM = "United Kingdom",
  USA = "United States of America",
  RUSSIA = "Russia",
  FRANCE = "France",
  ITALY = "Italy",
  JAPAN = "Japan",
  SAUDI_ARABIA = "Saudi Arabia",
}

export enum TranslatorLanguageName {
  SPANISH = "SPANISH",
  PORTUGUESE = "PORTUGUESE",
  GERMAN = "GERMAN",
  ENGLISH = "ENGLISH",
  ITALIAN = "ITALIAN",
  FRENCH = "FRENCH",
  RUSSIAN = "RUSSIAN",
  JAPANESE = "JAPANESE",
  ARABIC = "ARABIC",
}

export enum TranslatorLanguageNameLabel {
  SPANISH = "Español",
  PORTUGUESE = "Português",
  GERMAN = "Deutsch",
  ENGLISH = "English",
  ITALIAN = "Italiano",
  FRENCH = "Français",
  RUSSIAN = "Русский",
  JAPANESE = "(Japanese) 日本語",
  ARABIC = "(Arabic) عربي",
}

export interface TranslatorLanguage {
  id: string
  /** Image path. */
  image: ImageSourcePropType
  countries: TranslatorLanguageCountry[]
  name: TranslatorLanguageName
}
