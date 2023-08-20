export interface ApiHandlerResponse<T> {
  data?: T | null
  error?: string | null
}
