import React from "react"
import { ScrollView, ScrollViewProps, ViewProps } from "react-native"

import { Box, Content } from "@components/ScreenBox/styles"

interface Props extends ViewProps {
  scrollViewProps?: ScrollViewProps
  scrollViewRef?: React.Ref<ScrollView> | undefined
}

export const ScreenBox: React.FC<Props> = ({
  children,
  scrollViewProps,
  scrollViewRef,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Content {...scrollViewProps} ref={scrollViewRef}>
        {children}
      </Content>
    </Box>
  )
}
