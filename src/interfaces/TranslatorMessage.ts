export enum TranslatorMessageOrigin {
  APPLICATION = "APPLICATION",
  USER = "USER",
}

export enum TranslatorMessageType {
  DEFAULT = "DEFAULT",
  ERROR = "ERROR",
}

export interface TranslatorMessageData {
  id: string
  content: string
  origin: TranslatorMessageOrigin
  type: TranslatorMessageType
}

export interface CreateTranslationResponse {
  /**
   * Translated message.
   */
  message: string
}
