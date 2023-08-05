export const Fonts = {
  h1: { fontFamily: "Roboto-Bold", fontSize: 32 },
  h2: { fontFamily: "Roboto-Bold", fontSize: 24 },
  h3: { fontFamily: "Roboto-Bold", fontSize: 22 },
  h4: { fontFamily: "Roboto-Regular", fontSize: 22 },
  h5: { fontFamily: "Roboto-Regular", fontSize: 19 },
  h6: { fontFamily: "Roboto-Regular", fontSize: 16 },
  h7: { fontFamily: "Roboto-Light", fontSize: 16 },
} as const

export type FontName = keyof typeof Fonts
export type FontStyle = (typeof Fonts)[FontName]
