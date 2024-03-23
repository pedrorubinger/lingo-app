import * as SecureStore from "expo-secure-store"

import { AUTH_TOKEN_KEY_NAME } from "@utils/constants"

interface SaveAuthTokenParams {
  token: string | null
}

export const storeAuthToken = async ({
  token,
}: SaveAuthTokenParams): Promise<boolean> => {
  try {
    await (token
      ? SecureStore.setItemAsync(AUTH_TOKEN_KEY_NAME, token)
      : SecureStore.deleteItemAsync(AUTH_TOKEN_KEY_NAME))

    return true
  } catch (err) {
    return false
  }
}

export const getAuthToken = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync(AUTH_TOKEN_KEY_NAME)
}

export const clearAuthToken = async (): Promise<boolean> => {
  return storeAuthToken({ token: null })
}
