export const Radius = {
  xxs: 2,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 24,
  xl: 30,
  xxl: 40,
  xxxl: 50,
} as const

export type RadiusName = keyof typeof Radius
export type RadiusValue = (typeof Radius)[RadiusName]
