import React from "react"

import { DashboardStackScreenProps } from "@interfaces/index"
import { ScreenBox, ScreenHeader, Typography } from "@components/index"

interface Props extends DashboardStackScreenProps<"HelpCenter"> {}

export const HelpCenter: React.FC<Props> = () => {
  return (
    <ScreenBox>
      <ScreenHeader title="Help Center" />
      <Typography>This is Help Center screen.</Typography>
    </ScreenBox>
  )
}
