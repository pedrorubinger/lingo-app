import React from "react"
import { StyleSheet } from "react-native"

import { Theme, ColorName } from "@styles/index"
import { Typography } from "@components/Typography"
import { TouchableBox } from "@modules/dashboard/components/ServiceCard/styles"
import { ServiceCardStatus } from "@interfaces/ServiceCard"
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
}

export const ServiceCard: React.FC<Props> = ({
  status = ServiceCardStatus.DEFAULT,
  sub,
  title,
  width,
}) => {
  return (
    <TouchableBox style={shadow.box} status={status} width={width}>
      <Typography color={getTitleColor(status)} font="md4">
        {title}
      </Typography>

      <Typography color={getSubColor(status)} font="md1">
        {sub}
      </Typography>
    </TouchableBox>
  )
}
