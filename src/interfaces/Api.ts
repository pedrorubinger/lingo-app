import { HandledError } from "@interfaces/Error"

export interface ApiHandlerResponse<T> {
  data?: T | null
  error?: HandledError | null
}
