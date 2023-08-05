import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { DashboardStackParamList } from "@interfaces/StackParamsList"
import { Home } from "@modules/dashboard/screens/home"

const Stack = createNativeStackNavigator<DashboardStackParamList>()

export const DashboardStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
