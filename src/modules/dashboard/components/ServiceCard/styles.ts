import { ServiceCardStatus } from "@interfaces/ServiceCard"
import { ColorValue } from "@styles/colors"
import { Theme } from "@styles/theme"

import styled from "styled-components/native"

const { colors, spacing } = Theme

interface BoxProps {
  status?: ServiceCardStatus
  width?: string
}

const getBackground = (status: ServiceCardStatus): ColorValue => {
  switch (status) {
    case ServiceCardStatus.ACTIVE:
      return colors.primary
    case ServiceCardStatus.DISABLED:
      return colors.grey500
    default:
      return colors.white
  }
}

const boxYPadding = spacing.lg + 2

export const Box = styled.View<BoxProps>`
  width: ${({ width = "auto" }) => width};
  background-color: ${({ status = ServiceCardStatus.DEFAULT }) =>
    getBackground(status)};
  opacity: ${({ status = ServiceCardStatus.DEFAULT }) =>
    status === ServiceCardStatus.DISABLED ? 0.4 : 1};

  border-radius: 30px;
  padding: ${boxYPadding}px ${spacing.md}px ${spacing.lg}px ${boxYPadding}px;

  gap: ${spacing.xs}px;
`
