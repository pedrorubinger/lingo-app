import { Text, View } from "react-native"

import { DashboardStackScreenProps } from "@interfaces/StackParamsList"

interface Props extends DashboardStackScreenProps<"Home"> {}

export const Home: React.FC<Props> = ({}) => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}
