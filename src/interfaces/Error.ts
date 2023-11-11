export enum ErrorCode {
  BAD_REQUEST = "BAD_REQUEST",
  INTERNAL = "INTERNAL_SERVER_ERROR",
  SENTENCE_IS_REQUIRED = "SENTENCE_IS_REQUIRED",
  SENTENCE_LANGUAGE_IS_INVALID_ENUM = "SENTENCE_LANGUAGE_IS_INVALID_ENUM",
  CHAT_SERVICE_NO_MESSAGE_RETURN = "CHAT_SERVICE_NO_MESSAGE_RETURN",
}

export enum ApiErrorType {
  VALIDATION = "VALIDATION",
  API = "API",
}

export interface ApiValidationError {
  property: string
  value?: any
  constraints?: {
    [type: string]: ErrorCode
  }
}

export interface ApiError {
  code: ErrorCode
  status: number
  type: ApiErrorType
  errors?: ApiValidationError[] | null
}
