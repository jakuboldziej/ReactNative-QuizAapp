import React from "react";
import Game from "../screens/Game";
import Tabs from "./Tabs";
import Profile from "../screens/Profile";
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs}/>
        <Stack.Screen name="Game" component={Game}/>
        <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  )
}

export default Stacks