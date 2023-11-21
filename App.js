import React from "react"
import Stacks from "./src/components/Stacks"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"

function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App