import 'react-native-gesture-handler';
import React from "react"
import Stacks from "./src/navigations/Stacks"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { AuthContextProvider } from "./src/context/AuthContext"

function App() {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContextProvider>
  )
}

export default App