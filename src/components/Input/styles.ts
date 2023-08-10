import styled from "styled-components/native"

import { InputSize, InputSizeName, RadiusName, Theme } from "@styles/index"

const { colors, radius, spacing, fonts, inputSize } = Theme

interface BoxProps {
  width?: string
  size?: InputSizeName
  borderRadius?: RadiusName
}

const getPadding = (size?: InputSizeName): number => {
  return (
    InputSize[size as keyof typeof InputSize]?.padding ?? inputSize.md.padding
  )
}

export const Box = styled.View<BoxProps>`
  width: ${({ width = "auto" }) => width};
  padding: ${({ size }) => getPadding(size)}px;

  font-size: ${({ size }) =>
    InputSize[size as keyof typeof InputSize]?.fontSize ??
    inputSize.md.fontSize}px;

  border-radius: ${({ borderRadius = radius.lg }) => borderRadius}px;
  background-color: ${colors.blue80};

  flex-direction: row;
  justify-content: space-between;
`

interface StyledInputProps extends Pick<BoxProps, "size"> {}

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: colors.grey500,
})<StyledInputProps>`
  flex: 1;

  margin-right: ${spacing.sm * 4}px;
`

interface SubmitBtnProps extends Pick<BoxProps, "size"> {}

export const SubmitBtn = styled.TouchableOpacity<SubmitBtnProps>`
  border-radius: ${radius.lg}px;
  padding: ${spacing.sm}px;

  background-color: ${colors.green400};

  position: absolute;
  right: ${spacing.sm}px;
  top: ${({ size }) => getPadding(size) / 2}px;
`
