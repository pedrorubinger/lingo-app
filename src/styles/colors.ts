export const Colors = {
  primary: "#249c70",
  black: "#1A1A1A",
  grey700: "#484848",
  grey500: "#808080",
  grey300: "#B3B3B3",
  grey200: "#E5E5E5",
  grey100: "#F5F5F5",
  green400: "#29B985",
  red400: "#FE5C51",
  white: "#FFFFFF",
} as const

export type ColorName = keyof typeof Colors
export type ColorValue = (typeof Colors)[ColorName]
