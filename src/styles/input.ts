import { Fonts } from "@styles/fonts"
import { Spacing } from "@styles/spacing"

export const InputSize = {
  sm: { fontSize: Fonts.xs1.fontSize, padding: Spacing.sm },
  md: { fontSize: Fonts.sm1.fontSize, padding: Spacing.md },
  lg: { fontSize: Fonts.md1.fontSize, padding: Spacing.lg },
  xl: { fontSize: Fonts.lg1.fontSize, padding: Spacing.xl },
} as const

export type InputSizeName = keyof typeof InputSize
export type InputSizeStyle = (typeof InputSize)[InputSizeName]
