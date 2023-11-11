import { AxiosError } from "axios"

import { ApiError, ErrorCode, ApiErrorType } from "@interfaces/Error"

interface HandledError {
  plain?: AxiosError | any
  api?: ApiError | null
  handled: boolean
  message: string
}

type ErrorParam = AxiosError | HandledError | any

const DEFAULT_MESSAGE =
  "Sorry. Something went wrong. Please try again later or contact us."

const Messages: { [key in ErrorCode | string]: string } = {
  ["DEFAULT" as keyof ErrorCode]: DEFAULT_MESSAGE,
  [ErrorCode.BAD_REQUEST]: "Some fields require your attention.",
  [ErrorCode.INTERNAL]: DEFAULT_MESSAGE,
  [ErrorCode.SENTENCE_IS_REQUIRED]: "You must input a sentence.",
  [ErrorCode.SENTENCE_LANGUAGE_IS_INVALID_ENUM]:
    "You must select a valid language.",
  [ErrorCode.CHAT_SERVICE_NO_MESSAGE_RETURN]:
    "Sorry. It was not possible to translate your sentence properly.",
}

export const handleError = (error: ErrorParam): HandledError => {
  const defaultMsg = Messages["DEFAULT"]

  try {
    if (error?.handled) return handleError(error.plain)

    if (error instanceof AxiosError) {
      const api: ApiError | undefined | null = error?.response?.data
      const isValidation =
        !!api?.errors?.length && api?.type == ApiErrorType.VALIDATION

      const getMessage = () => {
        if (isValidation) return Messages.BAD_REQUEST
        return Messages[api?.code ?? "DEFAULT"]
      }

      return { plain: error, api, handled: true, message: getMessage() }
    }

    return { plain: error, api: null, handled: true, message: defaultMsg }
  } catch (error: any) {
    return { plain: error, api: null, handled: true, message: defaultMsg }
  }
}
