import React from "react"
import MainMenu from "../screens/MainMenu"
import Game from "../screens/Game"
import Settings from "../screens/Settings"
import { Feather } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator initialRouteName="MainMenu" activeColor="#e91e63">
      <Tab.Screen name={'Game'} component={Game} options={{
        tabBarLabel: 'Game',
        tabBarIcon: ({focused}) => (
          <Feather name={'layers'} size={25} color={focused ? '#e91e63' : 'black'}/>
        )
      }}/>
      <Tab.Screen name={'MainMenu'} component={MainMenu} options={{
        tabBarLabel: 'MainMenu',
        tabBarIcon: ({focused}) => (
          <Feather name={'droplet'} size={25} color={focused ? '#e91e63' : 'black'}/>
        )
      }}/>
      <Tab.Screen name={'Settings'} component={Settings} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({focused}) => (
          <Feather name={'settings'} size={25} color={focused ? '#e91e63' : 'black'}/>
        )
      }}/>
    </Tab.Navigator>
  )
}

export default Tabs