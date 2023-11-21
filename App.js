import React from "react"
import Tabs from "./src/components/Tabs"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaView, StatusBar } from "react-native"

function App() {
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight,}}>
      <NavigationContainer>
        <Tabs />      
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App