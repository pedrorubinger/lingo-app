import { StackScreenProps } from "@react-navigation/stack"

export type DashboardStackParamList = {
  Home: undefined
  Menu: undefined
  Translator: undefined
  TextInspector: undefined
  HelpCenter: undefined
  Account: undefined
}

export type NavigatorStackParamList = Pick<
  DashboardStackParamList,
  "Home" | "HelpCenter" | "Translator" | "Account"
>

export type DashboardStackScreenProps<T extends keyof DashboardStackParamList> =
  StackScreenProps<DashboardStackParamList, T>

export type NavigatorStackScreenProps<T extends keyof NavigatorStackParamList> =
  StackScreenProps<NavigatorStackParamList, T>
