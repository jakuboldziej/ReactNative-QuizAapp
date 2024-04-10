import React, { useState } from "react";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from "../screens/Profile";
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import colors from "../constants/colors";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Tabs from "./Tabs";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const [search, setSearch] = useState(false);

  const drawerOptions = {
    drawerStyle: {
      backgroundColor: colors.mainBackgroundColor
    },
    headerTitle: '',
    headerStyle: {
      backgroundColor: colors.navigationColor
    },
    headerRight: () => <CustomHeaderComponent search={search} setSearch={setSearch} />,

  }
  return (
    <Drawer.Navigator initialRouteName="Tabs" screenOptions={drawerOptions} drawerContent={({props}) => <DrawerCustomContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

const DrawerCustomContent = ({ props }) => {
  const { user } = useContext(AuthContext);

  const insets = useSafeAreaInsets();
  const style = CustomContentStyles(insets);
  return (
    <DrawerContentScrollView {...props}>
      <View style={style.usernameContainer}>
        <Text style={style.username}>{user?.displayName}</Text>
      </View>
      <View style={style.buttonsContainer}>
        <DrawerItem label="Dashboard" onPress={() => { }} inactiveBackgroundColor={colors.navigationColor} />
        <DrawerItem label="Help" onPress={() => { }} inactiveBackgroundColor={colors.navigationColor} />
      </View>
    </DrawerContentScrollView>
  );
};

export const CustomContentStyles = (insets) => StyleSheet.create({
  usernameContainer: {
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    padding: 15
  },
  buttonsContainer: {
    paddingTop: 15
  }
})

function CustomHeaderComponent({ search, setSearch }) {
  const [searchInput, setSearchInput] = useState('');
  return (
    <>
      {search ? (
        <View style={{width: '100%', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <MaterialCommunityIcons name="arrow-left" size={23} onPress={() => setSearch(prev => !prev)} />
          <TextInput autoFocus={true} style={{ width: '50%' }} value={searchInput} onChangeText={(text) => setSearchInput(text)} placeholder={` Search category...`} />
          {searchInput.length > 0 && <MaterialCommunityIcons name="close" size={23} onPress={() => setSearchInput('')} />} 
        </View>
      ) : (
        <MaterialIcons name="search" size={23} style={{paddingRight: 10}} onPress={() => setSearch(prev => !prev)}/>
      )}
    </>
  )
}

export default MyDrawer;