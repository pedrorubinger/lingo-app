import React from "react"

import { DashboardStackScreenProps } from "@interfaces/index"
import { ScreenBox, ScreenHeader, Typography } from "@components/index"

interface Props extends DashboardStackScreenProps<"Account"> {}

export const Account: React.FC<Props> = () => {
  return (
    <ScreenBox>
      <ScreenHeader title="Account" />
      <Typography>This is Account screen.</Typography>
    </ScreenBox>
  )
}
