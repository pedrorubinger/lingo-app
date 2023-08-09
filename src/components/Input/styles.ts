import styled from "styled-components/native"

import { InputSize, InputSizeName, RadiusName, Theme } from "@styles/index"

const { colors, radius, spacing, fonts, inputSize } = Theme

interface StyledInputProps {
  width?: string
  size?: InputSizeName
  borderRadius?: RadiusName
}

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: colors.grey500,
})<StyledInputProps>`
  padding: ${({ size }) =>
    InputSize[size as keyof typeof InputSize]?.padding ??
    inputSize.md.padding}px;
  font-size: ${({ size }) =>
    InputSize[size as keyof typeof InputSize]?.fontSize ??
    inputSize.md.fontSize}px;
  width: ${({ width = "auto" }) => width};

  background-color: ${colors.blue80};

  border-radius: ${({ borderRadius = radius.lg }) => borderRadius}px;
`
