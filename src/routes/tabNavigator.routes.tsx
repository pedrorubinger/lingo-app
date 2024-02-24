import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons"

import { Theme } from "@styles/index"

import { NavigatorStackParamList } from "@interfaces/StackParamsList"
import { Home } from "@modules/dashboard/screens/home"
import { Translator } from "@modules/dashboard/screens/translator"
import { HelpCenter } from "@modules/dashboard/screens/helpCenter"
import { Account } from "@modules/dashboard/screens/account"

const Tab = createBottomTabNavigator<NavigatorStackParamList>()

const { colors } = Theme

interface Props {}

export const TabNavigator: React.FC<Props> = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 100 },
        tabBarItemStyle: { marginBottom: 10, paddingTop: 8 },
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Translator"
        component={Translator}
        options={{
          tabBarLabel: "Translator",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="translate" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={{
          tabBarLabel: "Help Center",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="help-with-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
