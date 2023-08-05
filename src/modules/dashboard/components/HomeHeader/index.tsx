import React from "react"
import { Entypo } from "@expo/vector-icons"

import { Theme } from "@styles/index"
import { Typography } from "@components/Typography"
import {
  Box,
  TouchableMenu,
  MessageBox,
} from "@modules/dashboard/components/HomeHeader/styles"

const { colors } = Theme

interface Props {
  name: string
}

export const HomeHeader: React.FC<Props> = ({ name }) => {
  const onPressMenu = () => {}

  return (
    <Box>
      <MessageBox>
        <Typography color="grey300" font="md2">
          Welcome,
        </Typography>
        <Typography color="koamaru300" font="xxl4">
          {name}!
        </Typography>
      </MessageBox>

      <TouchableMenu onPress={onPressMenu}>
        <Entypo name="menu" size={32} color={colors.grey700} />
      </TouchableMenu>
    </Box>
  )
}
