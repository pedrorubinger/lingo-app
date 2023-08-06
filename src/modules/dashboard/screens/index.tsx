import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { DashboardStackParamList } from "@interfaces/index"
import { Home } from "@modules/dashboard/screens/home"
import { Menu } from "@modules/dashboard/screens/menu"

const Stack = createNativeStackNavigator<DashboardStackParamList>()

export const DashboardStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  )
}
