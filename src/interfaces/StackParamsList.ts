import { StackScreenProps } from "@react-navigation/stack"

/* DASHBOARD */
export type DashboardStackParamList = {
  Home: undefined
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

/* AUTH */
export type AuthStackParamList = {
  SignIn: undefined
  SignUp: undefined
}

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, T>
