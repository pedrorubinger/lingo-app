import { ServiceCardStatus } from "@interfaces/index"
import { ColorName } from "@styles/index"

export const getTitleColor = (status: ServiceCardStatus): ColorName => {
  switch (status) {
    case ServiceCardStatus.ACTIVE:
      return "white" as ColorName
    case ServiceCardStatus.DISABLED:
      return "white" as ColorName
    default:
      return "grey700" as ColorName
  }
}

export const getSubColor = (status: ServiceCardStatus): ColorName => {
  switch (status) {
    case ServiceCardStatus.ACTIVE:
      return "white" as ColorName
    case ServiceCardStatus.DISABLED:
      return "white" as ColorName
    default:
      return "grey500" as ColorName
  }
}
