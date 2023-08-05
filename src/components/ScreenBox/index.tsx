import React from "react"
import { ViewProps } from "react-native"

import { Box, Content } from "@components/ScreenBox/styles"

interface Props extends ViewProps {}

export const ScreenBox: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Box {...rest}>
      <Content>{children}</Content>
    </Box>
  )
}
