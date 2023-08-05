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
      return colors.green500
    case ServiceCardStatus.DISABLED:
      return colors.grey300
    default:
      return colors.white
  }
}

export const Box = styled.View<BoxProps>`
  width: ${({ width = "auto" }) => width};
  background-color: ${({ status = ServiceCardStatus.DEFAULT }) =>
    getBackground(status)};
  opacity: ${({ status = ServiceCardStatus.DEFAULT }) =>
    status === ServiceCardStatus.DISABLED ? 0.7 : 1};

  border-radius: 30px;
  padding: ${spacing.lg}px ${spacing.md}px ${spacing.lg}px ${spacing.lg}px;

  gap: ${spacing.xs}px;
`
