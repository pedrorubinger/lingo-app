import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { RootStackParamList } from "@interfaces/RouteTypes"
import { DashboardStack } from "@modules/dashboard/screens"

interface Props {}

export const Routes: React.FC<Props> = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator
      initialRouteName="DashboardStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DashboardStack" component={DashboardStack} />
    </Stack.Navigator>
  )
}
