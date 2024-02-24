import { NavigatorScreenParams } from "@react-navigation/native"
import { StackScreenProps } from "@react-navigation/stack"

import {
  DashboardStackParamList,
  NavigatorStackParamList,
} from "@interfaces/StackParamsList"

export type RootStackParamList = {
  /* Stacks */
  DashboardStack: NavigatorScreenParams<DashboardStackParamList>
  /* Navigators */
  TabNavigator: NavigatorScreenParams<NavigatorStackParamList>
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
