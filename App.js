import 'react-native-gesture-handler';
import React from "react"
import Stacks from "./src/navigations/Stacks"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { AuthContextProvider } from "./src/context/AuthContext"
import { GameContextProvider } from './src/context/GameContext';
import colors from "@constants/colors";

function App() {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <GameContextProvider>
          <NavigationContainer theme={{colors: {background: colors.mainBackgroundColor}}}>
            <Stacks />
          </NavigationContainer>
        </GameContextProvider>
      </SafeAreaProvider>
    </AuthContextProvider>
  )
}

export default App