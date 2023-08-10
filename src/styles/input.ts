import { Fonts } from "@styles/fonts"
import { Spacing } from "@styles/spacing"

export const InputSize = {
  md: { fontSize: Fonts.sm1.fontSize, padding: Spacing.md },
} as const

export type InputSizeName = keyof typeof InputSize
export type InputSizeStyle = (typeof InputSize)[InputSizeName]
