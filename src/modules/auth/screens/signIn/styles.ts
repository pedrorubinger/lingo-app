import { Animated } from "react-native"
import styled from "styled-components/native"

import { Theme } from "@styles/theme"

const { spacing } = Theme

interface SignInBoxProps {}

export const SignInBox = styled(Animated.View)<SignInBoxProps>`
  display: flex;
  align-items: center;

  height: 200px;
`

export const ContentBox = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
`

export const InputBox = styled.View`
  width: 100%;

  gap: ${spacing.md}px;
`
