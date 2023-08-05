import React from "react"
import { ViewProps } from "react-native"

import { Typography } from "@components/Typography"
import { Box } from "@components/ScreenHeader/styles"

interface Props extends ViewProps {
  title: string
}

export const ScreenHeader: React.FC<Props> = ({ children, title, ...rest }) => {
  return (
    <Box {...rest}>
      <Typography font="lg2" color="black">
        {title}
      </Typography>
    </Box>
  )
}
