import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { RootStackParamList } from "@interfaces/RouteTypes"
import { TabNavigator } from "@routes/tabNavigator.routes"
import { DashboardStack } from "@modules/dashboard/screens"

interface Props {}

export const Routes: React.FC<Props> = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()

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
