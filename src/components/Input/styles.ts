import styled from "styled-components/native"

import { InputSize, InputSizeName, RadiusName, Theme } from "@styles/index"

const { colors, radius, spacing, inputSize } = Theme

interface BoxProps {
  width?: string
  size?: InputSizeName
  borderRadius?: RadiusName
}

export const Box = styled.View<BoxProps>`
  width: ${({ width = "auto" }) => width};
  padding: ${spacing.sm}px ${spacing.md}px;

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

  margin-right: ${spacing.md}px;
`

interface SubmitBtnProps extends Pick<BoxProps, "size"> {}

export const SubmitBtn = styled.TouchableOpacity<SubmitBtnProps>`
  border-radius: ${radius.lg}px;
  padding: ${spacing.sm}px;

  background-color: ${colors.green400};
`
