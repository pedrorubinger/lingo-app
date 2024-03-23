import { TouchableOpacityProps } from "react-native"

import { Typography } from "@components/Typography"
import { StyledButton } from "@components/Button/styles"
import {
  ButtonSize,
  ButtonVariantName,
  ButtonVariantProps,
} from "@components/Button/types"

interface ButtonProps extends TouchableOpacityProps {
  text: string | JSX.Element
  variant?: ButtonVariantName
  size?: ButtonSize
}

const getButtonVariant = (variant: ButtonVariantName): ButtonVariantProps => {
  switch (variant) {
    default:
      return { bg: "primary", color: "white" }
  }
}

export const Button: React.FC<ButtonProps> = ({
  text,
  size = ButtonSize.MD,
  variant = ButtonVariantName.PRIMARY,
  ...rest
}) => {
  const { bg, color } = getButtonVariant(variant)

  return (
    <StyledButton {...rest} bg={bg} color={color} size={size}>
      <Typography color={color}>{text}</Typography>
    </StyledButton>
  )
}
