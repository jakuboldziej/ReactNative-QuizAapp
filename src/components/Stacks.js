import React from "react";
import Game from "../screens/Game";
import Tabs from "./Tabs";
import Profile from "../screens/Profile";
import GameCategories from "../screens/GameCategories";
import GameEnd from "../screens/GameEnd";
import DisplayRoundInfo from "../screens/DisplayRoundInfo";
import { createStackNavigator } from "@react-navigation/stack"
import Rules from "../screens/Rules";

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs}/>
        <Stack.Screen name="Game" component={Game}/>
        <Stack.Screen name="GameCategories" component={GameCategories}/>
        <Stack.Screen name="GameEnd" component={GameEnd}/>
        <Stack.Screen name="DisplayRoundInfo" component={DisplayRoundInfo}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Rules" component={Rules}/>
    </Stack.Navigator>
  )
}

export default Stacks