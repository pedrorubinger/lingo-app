import React from "react"
import { TextProps } from "react-native"

import { ColorName, FontName } from "@styles/index"
import { Text } from "@components/Typography/styles"

export interface TypographyProps {
  font?: FontName
  color?: ColorName
}

interface Props extends TypographyProps, TextProps {}

export const Typography: React.FC<Props> = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>
}
