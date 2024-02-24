import React from "react"

import { AuthStackScreenProps } from "@interfaces/index"
import { ScreenBox, ScreenHeader } from "@components/index"

interface Props extends AuthStackScreenProps<"SignIn"> {}

export const SignIn: React.FC<Props> = () => {
  return (
    <ScreenBox>
      <ScreenHeader title="Sign In" />
    </ScreenBox>
  )
}
