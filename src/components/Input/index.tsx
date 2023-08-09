import React from "react"
import { TextInputProps } from "react-native"

import { Typography } from "@components/index"
import { StyledInput } from "@components/Input/styles"
import { InputSizeName } from "@styles/input"
import { RadiusName } from "@styles/radius"

interface Props extends TextInputProps {
  label?: string
  /**
   * Input width. The unit also must be provided.
   * @default "auto"
   * @example "100%"
   * @example "150px"
   */
  width?: string
  /**
   * Input size.
   * @default "md"
   */
  size?: InputSizeName
  /**
   * Border radius size.
   * @default "lg"
   */
  borderRadius?: RadiusName
}

export const Input: React.FC<Props> = ({
  borderRadius,
  children,
  label,
  size,
  width,
  ...rest
}) => {
  return (
    <>
      {!!label && <Typography>{label}</Typography>}
      <StyledInput
        {...rest}
        borderRadius={borderRadius}
        width={width}
        size={size}
      >
        {children}
      </StyledInput>
    </>
  )
}
