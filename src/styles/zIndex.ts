export const ZIndex = {
  min: 1,
  max: 9999,
} as const

export type ZIndexName = keyof typeof ZIndex
export type ZIndexStyle = (typeof ZIndex)[ZIndexName]
