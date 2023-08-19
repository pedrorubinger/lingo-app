import React from "react"
import {
  GestureResponderEvent,
  TextInputProps,
  TouchableOpacityProps,
} from "react-native"
import { Entypo } from "@expo/vector-icons"

import { InputSizeName, RadiusName, Theme } from "@styles/index"
import { Typography } from "@components/Typography"
import { Box, StyledInput, SubmitBtn } from "@components/Input/styles"

const { colors } = Theme

interface Button {
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  icon: keyof typeof Entypo.glyphMap
  btnProps?: Omit<TouchableOpacityProps, "onPress">
}

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
  button?: Button
  /**
   * Indicates if text input and button are disabled.
   */
  isDisabled?: boolean
}

export const Input: React.FC<Props> = ({
  borderRadius,
  children,
  label,
  size,
  width,
  button,
  value,
  isDisabled = false,
  ...rest
}) => {
  return (
    <>
      {!!label && <Typography>{label}</Typography>}
      <Box borderRadius={borderRadius} width={width} size={size}>
        <StyledInput value={value} isDisabled={isDisabled} {...rest}>
          {children}
        </StyledInput>

        {!!button && (
          <SubmitBtn
            size={size}
            onPress={button.onPress}
            {...button.btnProps}
            disabled={isDisabled}
          >
            <Entypo name={button.icon} size={15} color={colors.white} />
          </SubmitBtn>
        )}
      </Box>
    </>
  )
}
