import { StackScreenProps } from "@react-navigation/stack"

export type DashboardStackParamList = {
  Home: undefined
  Menu: undefined
  Translator: undefined
  TextInspector: undefined
}

export type DashboardStackScreenProps<T extends keyof DashboardStackParamList> =
  StackScreenProps<DashboardStackParamList, T>
