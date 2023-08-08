export enum ServiceCardStatus {
  DISABLED = "DISABLED",
  DEFAULT = "DEFAULT",
}

export interface ServiceCardData {
  id: number
  title: string
  sub: string
  width: string
  status: ServiceCardStatus
}
