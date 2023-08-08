import { ServiceCardStatus } from "@interfaces/index"
import { ColorName } from "@styles/index"

export const getTitleColor = (status: ServiceCardStatus): ColorName => {
  switch (status) {
    case ServiceCardStatus.DISABLED:
      return "white" as ColorName
    default:
      return "white" as ColorName
  }
}

export const getSubColor = (status: ServiceCardStatus): ColorName => {
  switch (status) {
    case ServiceCardStatus.DISABLED:
      return "white" as ColorName
    default:
      return "white" as ColorName
  }
}
