import React from "react"
import { ViewProps } from "react-native"

import { Box } from "@components/ScreenBox/styles"

interface Props extends ViewProps {}

export const ScreenBox: React.FC<Props> = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>
}
