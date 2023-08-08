export enum TranslatorMessageOrigin {
  APPLICATION = "APPLICATION",
  USER = "USER",
}

export interface TranslatorMessageData {
  id: string
  content: string
  origin: TranslatorMessageOrigin
}
