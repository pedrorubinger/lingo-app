import React from "react"
import { StyleSheet } from "react-native"

import { Theme, ColorName } from "@styles/index"
import { Typography } from "@components/Typography"
import { Box } from "@modules/dashboard/components/ServiceCard/styles"
import { ServiceCardStatus } from "@interfaces/ServiceCard"

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

export const ServiceCard: React.FC<Props> = ({ status, sub, title, width }) => {
  const getTitleColor = (): ColorName => {
    switch (status) {
      case ServiceCardStatus.ACTIVE:
        return "white" as ColorName
      case ServiceCardStatus.DISABLED:
        return "white" as ColorName
      default:
        return "grey700" as ColorName
    }
  }

  const getSubColor = (): ColorName => {
    switch (status) {
      case ServiceCardStatus.ACTIVE:
        return "white" as ColorName
      case ServiceCardStatus.DISABLED:
        return "white" as ColorName
      default:
        return "grey500" as ColorName
    }
  }

  return (
    <Box style={shadow.box} status={status} width={width}>
      <Typography color={getTitleColor()} font="md4">
        {title}
      </Typography>

      <Typography color={getSubColor()} font="md1">
        {sub}
      </Typography>
    </Box>
  )
}
