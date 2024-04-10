import React from "react";
import Game from "../screens/Game";
import Drawer from "./Drawer";
import Profile from "../screens/Profile";
import GameCategories from "../screens/GameCategories";
import GameEnd from "../screens/GameEnd";
import DisplayRoundInfo from "../screens/DisplayRoundInfo";
import { createStackNavigator } from "@react-navigation/stack";
import Rules from "../screens/Rules";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import routes from "../constants/routes";

const Stack = createStackNavigator();
function Stacks() {

  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.Drawer} component={Drawer} />
      {/* Game */}
      <Stack.Screen name={routes.Game} component={Game} />
      <Stack.Screen name={routes.GameCategories} component={GameCategories} />
      <Stack.Screen name={routes.GameEnd} component={GameEnd} />
      <Stack.Screen name={routes.DisplayRoundInfo} component={DisplayRoundInfo} />
      <Stack.Screen name={routes.Profile} component={Profile} />
      <Stack.Screen name={routes.Rules} component={Rules} />
      {/* Auth */}
      <Stack.Screen name={routes.Login} component={Login} />
      <Stack.Screen name={routes.Register} component={Register} />
    </Stack.Navigator>
  )
}

export default Stacks