import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

import {
  ServiceCardStatus,
  RootStackParamList,
  NavigatorStackParamList,
} from "@interfaces/index"
import { Theme } from "@styles/index"
import { Typography } from "@components/Typography"
import { TouchableBox } from "@modules/dashboard/components/ServiceCard/styles"
import { getSubColor, getTitleColor } from "@modules/dashboard/utils"

const { colors } = Theme

const shadow = StyleSheet.create({
  box: {
    shadowColor: colors.grey700,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
})

interface Props {
  width?: string
  title: string
  sub: string
  /** @default DEFAULT */
  status?: ServiceCardStatus
  screen: keyof NavigatorStackParamList
}

export const ServiceCard: React.FC<Props> = ({
  status = ServiceCardStatus.DEFAULT,
  sub,
  title,
  width,
  screen,
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const currentStatus = useState<ServiceCardStatus>(status)[0]
  const isDisabled = currentStatus === ServiceCardStatus.DISABLED

  const onPressCard = () => {
    navigation.navigate("TabNavigator", { screen })
  }

  return (
    <TouchableBox
      style={shadow.box}
      disabled={isDisabled}
      status={currentStatus}
      width={width}
      onPress={onPressCard}
    >
      <Typography color={getTitleColor(currentStatus)} font="md4">
        {title}
      </Typography>

      <Typography color={getSubColor(currentStatus)} font="md1">
        {sub}
      </Typography>
    </TouchableBox>
  )
}
