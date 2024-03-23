import { ColorName } from "@styles/colors"

export enum ButtonVariantName {
  PRIMARY = "PRIMARY",
}

export enum ButtonSize {
  SM = "SM",
  MD = "MD",
}

export interface ButtonVariantProps {
  bg: ColorName
  color: ColorName
}

export interface ButtonStyleProps {
  color: ColorName
  bg: ColorName
  size: ButtonSize
}
