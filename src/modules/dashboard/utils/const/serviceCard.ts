import { ServiceCardData, ServiceCardStatus } from "@interfaces/index"

export const serviceCards: ServiceCardData[] = [
  {
    id: 1,
    title: "Translator",
    sub: "All languages",
    width: "48%",
    path: "Translator",
    status: ServiceCardStatus.DEFAULT,
  },
  {
    id: 2,
    title: "Text inspector",
    sub: "Available soon",
    width: "48%",
    path: "TextInspector",
    status: ServiceCardStatus.DISABLED,
  },
]
