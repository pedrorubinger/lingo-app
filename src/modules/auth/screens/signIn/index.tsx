import React, { useEffect, useRef } from "react"
import { Animated, View } from "react-native"

import { Theme } from "@styles/theme"
import { InputSizeName } from "@styles/input"
import {
  ContentBox,
  InputBox,
  SignInBox,
} from "@modules/auth/screens/signIn/styles"
import Logo from "@assets/images/logo/svg/default.svg"
import { AuthStackScreenProps } from "@interfaces/index"
import { Input, ScreenBox, Typography } from "@components/index"
import { RadiusName } from "@styles/radius"
import { ColorName } from "@styles/colors"

const { colors } = Theme

interface Props extends AuthStackScreenProps<"SignIn"> {}

interface InputVariant {
  size: InputSizeName
  borderRadius: RadiusName
  color: ColorName
}

export const SignIn: React.FC<Props> = () => {
  const opacity = useRef(new Animated.Value(0)).current
  const variant: InputVariant = {
    size: "md",
    borderRadius: "md",
    color: "grey500",
  }

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start()
  }, [opacity])

  return (
    <ScreenBox style={{ backgroundColor: colors.grey150 }}>
      <SignInBox style={{ opacity }}>
        <Logo width={200} height={200} />
        <Typography color="grey500" font="md1" style={{ marginTop: -20 }}>
          Welcome! Sign in to access your account
        </Typography>

        <ContentBox>
          <InputBox>
            <Input
              {...variant}
              keyboardType="email-address"
              inputMode="email"
              placeholder="Enter your e-mail"
            />
            <Input {...variant} inputMode="text" placeholder="Password" />
          </InputBox>
        </ContentBox>
      </SignInBox>
    </ScreenBox>
  )
}
