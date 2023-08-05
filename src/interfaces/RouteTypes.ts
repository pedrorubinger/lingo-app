import { NavigatorScreenParams } from "@react-navigation/native"
import { StackScreenProps } from "@react-navigation/stack"

import { DashboardStackParamList } from "@interfaces/StackParamsList"

export type RootStackParamList = {
  /* Stacks */
  DashboardStack: NavigatorScreenParams<DashboardStackParamList>
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
