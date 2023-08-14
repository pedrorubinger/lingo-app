import React from "react"
import { ScrollViewProps, ViewProps } from "react-native"

import { Box, Content } from "@components/ScreenBox/styles"

interface Props extends ViewProps {
  scrollViewProps?: ScrollViewProps
}

export const ScreenBox: React.FC<Props> = ({
  children,
  scrollViewProps,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Content {...scrollViewProps}>{children}</Content>
    </Box>
  )
}
