import React from "react"

import { Typography } from "@components/Typography"
import {
  Box,
  MessageBox,
} from "@modules/dashboard/components/HomeHeader/styles"

interface Props {
  name: string
}

export const HomeHeader: React.FC<Props> = ({ name }) => {
  const MAX_NAME_LENGTH = 11
  const label =
    name.length > MAX_NAME_LENGTH
      ? `${name.slice(0, MAX_NAME_LENGTH)}...`
      : `${name}!`

  return (
    <Box>
      <MessageBox>
        <Typography color="grey300" font="md2">
          Hello,
        </Typography>
        <Typography color="koamaru300" font="xl4">
          {label}
        </Typography>
      </MessageBox>
    </Box>
  )
}
