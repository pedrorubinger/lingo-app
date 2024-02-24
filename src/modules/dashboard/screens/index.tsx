import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { DashboardStackParamList } from "@interfaces/index"
import { Home } from "@modules/dashboard/screens/home"
import { Translator } from "@modules/dashboard/screens/translator"
import { TextInspector } from "@modules/dashboard/screens/textInspector"

const Stack = createNativeStackNavigator<DashboardStackParamList>()

export const DashboardStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Translator" component={Translator} />
      <Stack.Screen name="TextInspector" component={TextInspector} />
    </Stack.Navigator>
  )
}
