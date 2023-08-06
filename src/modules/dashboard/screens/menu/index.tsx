import React from "react"

import { DashboardStackScreenProps } from "@interfaces/index"
import { ScreenBox, ScreenHeader } from "@components/index"

interface Props extends DashboardStackScreenProps<"Menu"> {}

export const Menu: React.FC<Props> = () => {
  return (
    <ScreenBox>
      <ScreenHeader title="Menu" />
    </ScreenBox>
  )
}
