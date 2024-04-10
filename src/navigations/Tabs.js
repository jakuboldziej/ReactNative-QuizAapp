import { useTheme } from "react-native-paper/src/core/theming"
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import GameMenu from "../screens/GameMenu"
import MainMenu from "../screens/MainMenu"
import Settings from "../screens/Settings"
import Profile from "../screens/Profile";
import colors from "../constants/colors"
import routes from "../constants/routes";
import { AntDesign } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator()

function Tabs({ setActiveTab }) {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"

  return (
    <Tab.Navigator shifting={true} initialRouteName="MainMenu" activeColor="#e91e63" barStyle={{backgroundColor: colors.navigationColor, height: 80}}>
      <Tab.Screen name='Play' component={GameMenu} options={{
        tabBarLabel: 'Play',
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons name={focused ? 'layers' : 'layers-outline'} size={25} color={focused ? '#e91e63' : 'black'}/>
        )
      }}
      listeners={({route}) => ({state: () => setActiveTab(route.name)})}/>
      <Tab.Screen name='MainMenu' component={MainMenu} options={{
        tabBarLabel: 'MainMenu',
        tabBarIcon: ({focused}) => (
          <MaterialIcons name='menu-book' size={25} color={focused ? '#e91e63' : 'black'}/>
        )
      }}
      listeners={({route}) => ({state: () => setActiveTab(route.name)})}/>
      <Tab.Screen name={routes.Profile} component={Profile} options={{
        tabBarLabel: routes.Profile,
        tabBarIcon: ({focused}) => (
          <AntDesign name="user" size={25} color={focused ? '#e91e63' : 'black'} />
        )
      }}
      listeners={({route}) => ({state: () => setActiveTab(route.name)})}/>
    </Tab.Navigator>
  )
}

export default Tabs