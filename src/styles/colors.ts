export const Colors = {
  primary: "#249c70",

  black: "#1A1A1A",

  blue80: "#f3f8ff",

  grey80: "##f1f1f1",
  grey100: "#F5F5F5",
  grey150: "#FCFCFC",
  grey200: "#E5E5E5",
  grey300: "#B3B3B3",
  grey500: "#808080",
  grey700: "#484848",

  green400: "#29B985",

  koamaru100: "#31385b",
  koamaru200: "#373f66",
  koamaru300: "#31385b",

  orange100: "#F1C27B",
  orange200: "#FFB07F",
  orange400: "#F3AA60",

  red400: "#FE5C51",
  red300: "#ff7b73",
  red200: "#FF9891",

  white: "#FFFFFF",
} as const

export type ColorName = keyof typeof Colors
export type ColorValue = (typeof Colors)[ColorName]
