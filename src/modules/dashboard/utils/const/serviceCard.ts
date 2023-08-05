import { ServiceCardData, ServiceCardStatus } from "@interfaces/index"

export const serviceCards: ServiceCardData[] = [
  {
    id: 1,
    title: "Translator",
    sub: "All languages",
    width: "48%",
    status: ServiceCardStatus.DEFAULT,
  },
  {
    id: 2,
    title: "Spell checker",
    sub: "Available soon",
    width: "48%",
    status: ServiceCardStatus.DISABLED,
  },
]
