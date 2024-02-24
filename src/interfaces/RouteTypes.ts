import { NavigatorScreenParams } from "@react-navigation/native"
import { StackScreenProps } from "@react-navigation/stack"

import {
  AuthStackParamList,
  DashboardStackParamList,
  NavigatorStackParamList,
} from "@interfaces/StackParamsList"

export type RootStackParamList = {
  /* Stacks */
  AuthStack: NavigatorScreenParams<AuthStackParamList>
  DashboardStack: NavigatorScreenParams<DashboardStackParamList>
  TabNavigator: NavigatorScreenParams<NavigatorStackParamList>
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
