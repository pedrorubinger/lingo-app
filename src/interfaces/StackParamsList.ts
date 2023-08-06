import { StackScreenProps } from "@react-navigation/stack"

export type DashboardStackParamList = {
  Home: undefined
  Menu: undefined
}

export type DashboardStackScreenProps<T extends keyof DashboardStackParamList> =
  StackScreenProps<DashboardStackParamList, T>
