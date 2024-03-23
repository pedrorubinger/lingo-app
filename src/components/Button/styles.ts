import styled from "styled-components/native"

import { Colors, Theme } from "@styles/index"
import { ButtonSize, ButtonStyleProps } from "@components/Button/types"

const { colors, radius, fonts, spacing } = Theme

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.SM:
      return `
          height: 38px;
        `
    default:
      return `
          height: 46px;
        `
  }
}

export const StyledButton = styled.TouchableOpacity<ButtonStyleProps>`
  min-width: 120px;
  border-radius: ${radius.md}px;
  padding: 0 ${spacing.md}px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ color }) => colors[color as keyof typeof Colors]};
  background-color: ${({ bg }) => colors[bg as keyof typeof Colors]};

  ${getButtonSize(ButtonSize.MD)}
`
