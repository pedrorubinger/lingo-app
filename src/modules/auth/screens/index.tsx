import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { AuthStackParamList } from "@interfaces/index"
import { SignIn } from "@modules/auth/screens/signIn"

const Stack = createNativeStackNavigator<AuthStackParamList>()

export const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  )
}
