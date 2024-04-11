import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Game from "screens/Game/Game";
import Drawer from "./Drawer";
import Profile from "screens/Profile";
import GameEnd from "screens/Game/GameEnd";
import DisplayRoundInfo from "screens/Game/DisplayRoundInfo";
import CreatingGame from "screens/Game/CreatingGame";
import Rules from "screens/Rules";
import Login from "screens/auth/Login";
import Register from "screens/auth/Register";
import routes from "constants/routes";
import { AuthContext } from "context/AuthContext";

const Stack = createStackNavigator();

function Stacks() {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.Drawer} component={Drawer} />
      {/* Game */}
      <Stack.Screen name={routes.Game} component={Game} />
      <Stack.Screen name={routes.GameEnd} component={GameEnd} />
      <Stack.Screen name={routes.DisplayRoundInfo} component={DisplayRoundInfo} />
      <Stack.Screen name={routes.CreatingGame} component={CreatingGame} />
      <Stack.Screen name={routes.Profile} component={Profile} />
      <Stack.Screen name={routes.Rules} component={Rules} />
      {/* Auth */}
      <Stack.Screen name={routes.Login} component={Login} />
      <Stack.Screen name={routes.Register} component={Register} />
    </Stack.Navigator>
  )
}

export default Stacks