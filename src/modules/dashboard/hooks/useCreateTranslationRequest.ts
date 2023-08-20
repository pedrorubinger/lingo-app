import { useState } from "react"

import {
  ApiHandlerResponse,
  CreateTranslationResponse,
  TranslatorLanguageName,
} from "@interfaces/index"
import { Api } from "@services/api"

interface SubmitParams {
  sentence: string
  language: TranslatorLanguageName
}

interface Response {
  isLoading: boolean
  submit: (
    params: SubmitParams
  ) => Promise<ApiHandlerResponse<CreateTranslationResponse>>
}

export const useCreateTranslationRequest = (): Response => {
  const [isLoading, setIsLoading] = useState(false)

  const submit = async ({
    language,
    sentence,
  }: SubmitParams): Promise<ApiHandlerResponse<CreateTranslationResponse>> => {
    try {
      setIsLoading(true)

      const payload = { language, sentence }
      const { data } = await Api.post<CreateTranslationResponse>(
        "/interpreter",
        payload
      )

      return { data, error: null }
    } catch (error: any) {
      /* TO DO: Handle errors properly. */
      return { data: null, error: "Something went wrong." }
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, submit }
}
