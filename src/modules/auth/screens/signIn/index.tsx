import React, { useEffect, useRef } from "react"
import { Animated, TouchableWithoutFeedback, View } from "react-native"

import { Theme } from "@styles/theme"
import { InputSizeName } from "@styles/input"
import {
  ButtonBox,
  ForgotPasswordBox,
  InputBox,
  LogoBox,
  SignInBox,
} from "@modules/auth/screens/signIn/styles"
import Logo from "@assets/images/logo/svg/default.svg"
import { AuthStackScreenProps, RootStackParamList } from "@interfaces/index"
import { Input, ScreenBox, Typography } from "@components/index"
import { RadiusName } from "@styles/radius"
import { ColorName } from "@styles/colors"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { useAuthStore } from "@store/auth"
import { User } from "@interfaces/User"
import { storeAuthToken } from "@utils/helpers/auth"

const { colors, spacing } = Theme

interface Props extends AuthStackScreenProps<"SignIn"> {}

interface InputVariant {
  size: InputSizeName
  borderRadius: RadiusName
  color: ColorName
}

const inputVariant: InputVariant = {
  size: "md",
  borderRadius: "md",
  color: "grey500",
}

export const SignIn: React.FC<Props> = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const opacity = useRef(new Animated.Value(0)).current
  const { setUser } = useAuthStore()

  const onSignInSuccessfully = async (user: User) => {
    setUser(user)

    await storeAuthToken({ token: `dummy-token-${new Date().toISOString()}` })

    navigation.navigate("TabNavigator", { screen: "Home" })
  }

  const onPressForgotPassword = () => {}

  const onPressSignIn = async () => {
    await onSignInSuccessfully({
      name: "Pedro",
      email: "pedro.rubinger@gmail.com",
    })
  }

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start()
  }, [opacity])

  return (
    <>
      <ScreenBox
        style={{ backgroundColor: colors.grey150 }}
        scrollViewProps={{ contentContainerStyle: { flexGrow: 1 } }}
      >
        <SignInBox style={{ opacity }}>
          <LogoBox>
            <Logo width={200} height={200} />
            <Typography
              color="grey500"
              font="md1"
              style={{ marginTop: -spacing.md }}
            >
              Welcome! Sign in to access your account
            </Typography>
          </LogoBox>

          <InputBox>
            <Input
              {...inputVariant}
              keyboardType="email-address"
              inputMode="email"
              placeholder="Email"
              autoFocus
            />
            <Input {...inputVariant} inputMode="text" placeholder="Password" />
          </InputBox>

          <ForgotPasswordBox>
            <TouchableWithoutFeedback onPress={onPressForgotPassword}>
              <Typography font="xs1" color="primary">
                Forgot password?
              </Typography>
            </TouchableWithoutFeedback>
          </ForgotPasswordBox>

          <ButtonBox>
            <Button onPress={onPressSignIn} text="Sign In" />
          </ButtonBox>
        </SignInBox>
      </ScreenBox>
    </>
  )
}
