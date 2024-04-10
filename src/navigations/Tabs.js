import { useTheme } from "react-native-paper/src/core/theming"
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import GameMenu from "../screens/GameMenu"
import MainMenu from "../screens/MainMenu"
import Settings from "../screens/Settings"
import colors from "../constants/colors"

const Tab = createMaterialBottomTabNavigator()

function Tabs() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"

  return (
    <Tab.Navigator shifting={true} initialRouteName="MainMenu" activeColor="#e91e63" barStyle={{backgroundColor: colors.navigationColor, height: 80}}>
      <Tab.Screen name='Play' component={GameMenu} options={{
        tabBarLabel: 'Play',
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons name={focused ? 'layers' : 'layers-outline'} size={25} color={focused ? '#e91e63' : 'black'}/>
        )
      }}/>
      <Tab.Screen name='MainMenu' component={MainMenu} options={{
        tabBarLabel: 'MainMenu',
        tabBarIcon: ({focused}) => (
          <MaterialIcons name={'menu-book'} size={25} color={focused ? '#e91e63' : 'black'}/>
        )
      }}/>
      <Tab.Screen name='Settings' component={Settings} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({focused}) => (
          <MaterialIcons name={'settings'} size={25} color={focused ? '#e91e63' : 'black'}/>
        )
      }}/>
    </Tab.Navigator>
  )
}

export default Tabs