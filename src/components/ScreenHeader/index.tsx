import React from "react"
import { ViewProps } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Entypo } from "@expo/vector-icons"

import { Theme } from "@styles/index"
import { RootStackParamList } from "@interfaces/index"
import { Typography } from "@components/Typography"
import { Box, TitleBox, TouchableArrow } from "@components/ScreenHeader/styles"

const { colors } = Theme

interface Props extends ViewProps {
  title: string
  goBack?: () => void
}

export const ScreenHeader: React.FC<Props> = ({
  children,
  title,
  goBack,
  ...rest
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const onPressGoBack = () => {
    return goBack?.() || navigation.goBack()
  }

  return (
    <Box {...rest}>
      <TouchableArrow onPress={onPressGoBack}>
        <Entypo name="chevron-left" size={28} color={colors.koamaru300} />
      </TouchableArrow>

      <TitleBox>
        <Typography font="lg2" color="black">
          {title}
        </Typography>
      </TitleBox>
    </Box>
  )
}
