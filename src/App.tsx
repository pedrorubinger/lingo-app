import React from "react"
import { StatusBar } from "expo-status-bar"
import { useFonts } from "expo-font"
import { ThemeProvider } from "styled-components/native"
import { NavigationContainer } from "@react-navigation/native"

import { Theme } from "@styles/index"
import { Routes } from "@routes/index.routes"

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
  })

  if (!fontsLoaded) return null

  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>

      <StatusBar style="auto" backgroundColor={Theme.colors.primary} />
    </ThemeProvider>
  )
}
