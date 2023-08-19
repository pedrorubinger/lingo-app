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
  align-items: center;
`

interface StyledInputProps extends Pick<BoxProps, "size"> {
  /** @default false */
  isDisabled?: boolean
}

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: colors.grey500,
})<StyledInputProps>`
  flex: 1;

  margin-right: ${spacing.sm}px;

  opacity: ${({ isDisabled = false }) => (isDisabled ? 0.6 : 1)};
`

interface SubmitBtnProps extends Pick<BoxProps, "size"> {}

export const SubmitBtn = styled.TouchableOpacity<SubmitBtnProps>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  padding: ${spacing.sm}px;

  background-color: ${colors.green400};
  opacity: ${({ disabled = false }) => (disabled ? 0.6 : 1)};
`
