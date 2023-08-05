import React from "react"
import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components/native"

import { Theme } from "@styles/index"

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
