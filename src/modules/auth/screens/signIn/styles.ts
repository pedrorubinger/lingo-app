import { Animated } from "react-native"
import styled from "styled-components/native"

import { Theme } from "@styles/theme"

const { spacing } = Theme

interface SignInBoxProps {}

export const SignInBox = styled(Animated.View)<SignInBoxProps>`
  display: flex;
  flex: 1;
  align-items: center;
`

export const LogoBox = styled.View`
  align-items: center;

  margin-bottom: ${spacing.xxl}px;
`

export const InputBox = styled.View`
  width: 100%;

  gap: ${spacing.md}px;
`

export const ForgotPasswordBox = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-top: ${spacing.md}px;
`

export const ButtonBox = styled.View`
  flex: 1;
  justify-content: flex-end;
  width: 100%;
`
