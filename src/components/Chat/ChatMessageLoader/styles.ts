import { Animated } from "react-native"
import styled from "styled-components/native"

import { Theme } from "@styles/index"

const { colors } = Theme

export const Box = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
`

export const Dot = styled(Animated.Text)`
  font-size: 70px;
  color: ${colors.grey700};
`
