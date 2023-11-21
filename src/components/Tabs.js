import React from "react"
import GameMenu from "../screens/GameMenu"
import MainMenu from "../screens/MainMenu"
import Settings from "../screens/Settings"
import { MaterialIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator initialRouteName="MainMenu" activeColor="#e91e63" barStyle={{backgroundColor: "#d4a373", height: 80}}>
      <Tab.Screen name={'Play'} component={GameMenu} options={{
        tabBarLabel: 'Play',
        tabBarIcon: ({focused}) => (
          <MaterialIcons name={'layers'} size={25} color={focused ? '#e91e63' : 'black'}/>
        )
      }}/>
      <Tab.Screen name={'MainMenu'} component={MainMenu} options={{
        tabBarLabel: 'MainMenu',
        tabBarIcon: ({focused}) => (
          <MaterialIcons name={'menu-book'} size={25} color={focused ? '#e91e63' : 'black'}/>
        )
      }}/>
      <Tab.Screen name={'Settings'} component={Settings} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({focused}) => (
          <MaterialIcons name={'settings'} size={25} color={focused ? '#e91e63' : 'black'}/>
        )
      }}/>
    </Tab.Navigator>
  )
}

export default Tabs