import React from "react"

import { DashboardStackScreenProps } from "@interfaces/index"
import { Theme } from "@styles/index"
import { ScreenBox, ScreenHeader, Typography } from "@components/index"

const { colors } = Theme

interface Props extends DashboardStackScreenProps<"Translator"> {}

export const Translator: React.FC<Props> = () => {
  return (
    <ScreenBox>
      <ScreenHeader title="Translator" />
    </ScreenBox>
  )
}
