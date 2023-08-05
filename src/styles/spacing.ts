export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 50,
  xxxl: 64,
} as const

export type SpacingName = keyof typeof Spacing
export type SpacingValue = (typeof Spacing)[SpacingName]
