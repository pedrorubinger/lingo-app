import styled from "styled-components/native"

import { Theme } from "@styles/index"
import { isAndroid } from "@utils/index"

const { colors, spacing, radius } = Theme

export const Footer = styled.SafeAreaView`
  background-color: ${colors.white};

  height: ${isAndroid ? 100 : 120}px;
  width: 100%;

  border-top-width: 1px;
  border-top-color: ${colors.grey200};
  border-top-style: solid;
`

export const FooterContent = styled.View`
  height: 100%;
  width: 100%;

  flex-direction: row;
  align-items: center;
  gap: ${spacing.sm}px;
  flex: 1;

  padding: ${spacing.sm}px 4%;
`

export const InputBox = styled.View`
  flex: 1;
`

export const LanguageSelectorBox = styled.View``

export const LanguageSelectorBtn = styled.TouchableOpacity`
  border-radius: ${radius.lg}px;

  align-items: center;
  justify-content: center;
  padding: ${spacing.sm}px;

  background-color: ${colors.grey100};
  opacity: ${({ disabled = false }) => (disabled ? 0.6 : 1)};
`

export const LanguageSelectorImg = styled.Image`
  width: 24px;
  height: 24px;
`
