import { ServiceCardData, ServiceCardStatus } from "@interfaces/index"

export const cardServices: ServiceCardData[] = [
  {
    id: 1,
    title: "Translator",
    sub: "Every language",
    width: "47%",
    status: ServiceCardStatus.DEFAULT,
  },
  {
    id: 2,
    title: "Spell checker",
    sub: "Available soon",
    width: "47%",
    status: ServiceCardStatus.DISABLED,
  },
]
