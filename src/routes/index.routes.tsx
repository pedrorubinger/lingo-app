import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { RootStackParamList } from "@interfaces/RouteTypes"
import { TabNavigator } from "@routes/tabNavigator.routes"
import { DashboardStack } from "@modules/dashboard/screens"
import { AuthStack } from "@modules/auth/screens"

interface Props {}

export const Routes: React.FC<Props> = () => {
  const isLoggedIn = false
  const Stack = createNativeStackNavigator<RootStackParamList>()

  if (isLoggedIn) {
    return (
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="DashboardStack" component={DashboardStack} />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  )
}
