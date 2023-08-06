import React from "react"
import { Entypo } from "@expo/vector-icons"

import { DashboardStackScreenProps } from "@interfaces/index"
import { Theme } from "@styles/index"
import { ScreenBox, ScreenHeader, Typography } from "@components/index"
import { menuItems } from "@modules/dashboard/utils"
import {
  Body,
  Content,
  Footer,
  ItemBox,
} from "@modules/dashboard/screens/menu/styles"

const { colors } = Theme

interface Props extends DashboardStackScreenProps<"Menu"> {}

export const Menu: React.FC<Props> = () => {
  return (
    <ScreenBox>
      <ScreenHeader title="Menu" />

      <Content>
        <Body>
          {menuItems.map(({ key, icon, label }) => {
            const iconName = icon as unknown as any

            return (
              <ItemBox key={key}>
                <Entypo name={iconName} size={22} color={colors.koamaru100} />
                <Typography color="koamaru100" font="md3">
                  {label}
                </Typography>
              </ItemBox>
            )
          })}
        </Body>

        <Footer>
          <ItemBox>
            <Entypo name="log-out" size={20} color={colors.koamaru100} />
            <Typography color="koamaru100" font="md3">
              Logout
            </Typography>
          </ItemBox>
        </Footer>
      </Content>
    </ScreenBox>
  )
}
