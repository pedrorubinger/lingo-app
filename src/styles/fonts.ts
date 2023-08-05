export const Fonts = {
  xxs1: { fontFamily: "Roboto-Light", fontSize: 10 },
  xxs2: { fontFamily: "Roboto-Regular", fontSize: 10 },
  xxs3: { fontFamily: "Roboto-Medium", fontSize: 10 },
  xxs4: { fontFamily: "Roboto-Bold", fontSize: 10 },

  xs1: { fontFamily: "Roboto-Light", fontSize: 12 },
  xs2: { fontFamily: "Roboto-Regular", fontSize: 12 },
  xs3: { fontFamily: "Roboto-Medium", fontSize: 12 },
  xs4: { fontFamily: "Roboto-Bold", fontSize: 12 },

  sm1: { fontFamily: "Roboto-Light", fontSize: 14 },
  sm2: { fontFamily: "Roboto-Regular", fontSize: 14 },
  sm3: { fontFamily: "Roboto-Medium", fontSize: 14 },
  sm4: { fontFamily: "Roboto-Bold", fontSize: 14 },

  md1: { fontFamily: "Roboto-Light", fontSize: 16 },
  md2: { fontFamily: "Roboto-Regular", fontSize: 16 },
  md3: { fontFamily: "Roboto-Medium", fontSize: 16 },
  md4: { fontFamily: "Roboto-Bold", fontSize: 16 },

  lg1: { fontFamily: "Roboto-Light", fontSize: 20 },
  lg2: { fontFamily: "Roboto-Regular", fontSize: 20 },
  lg3: { fontFamily: "Roboto-Medium", fontSize: 20 },
  lg4: { fontFamily: "Roboto-Bold", fontSize: 20 },

  xl1: { fontFamily: "Roboto-Light", fontSize: 24 },
  xl2: { fontFamily: "Roboto-Regular", fontSize: 24 },
  xl3: { fontFamily: "Roboto-Medium", fontSize: 24 },
  xl4: { fontFamily: "Roboto-Bold", fontSize: 24 },

  xxl1: { fontFamily: "Roboto-Light", fontSize: 32 },
  xxl2: { fontFamily: "Roboto-Regular", fontSize: 32 },
  xxl3: { fontFamily: "Roboto-Medium", fontSize: 32 },
  xxl4: { fontFamily: "Roboto-Bold", fontSize: 32 },

  xxxl1: { fontFamily: "Roboto-Light", fontSize: 40 },
  xxxl2: { fontFamily: "Roboto-Regular", fontSize: 40 },
  xxxl3: { fontFamily: "Roboto-Medium", fontSize: 40 },
  xxxl4: { fontFamily: "Roboto-Bold", fontSize: 40 },
} as const

export type FontName = keyof typeof Fonts
export type FontStyle = (typeof Fonts)[FontName]
