import React from "react"

import { DashboardStackScreenProps } from "@interfaces/index"
import { Theme } from "@styles/index"
import { ScreenBox, ScreenHeader, Typography } from "@components/index"

const { colors } = Theme

interface Props extends DashboardStackScreenProps<"TextInspector"> {}

export const TextInspector: React.FC<Props> = () => {
  return (
    <ScreenBox>
      <ScreenHeader title="Text Inspector" />
    </ScreenBox>
  )
}
