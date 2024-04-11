import React, { useEffect, useState } from "react";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import colors from "@constants/colors";
import { useContext } from 'react';
import { AuthContext } from '@context/AuthContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Tabs from "./Tabs";
import Settings from "@screens/Settings";
import routes from "@constants/routes";
import { handleSignOut } from "@utils";
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const [search, setSearch] = useState(false);
  const [activeTab, setActiveTab] = useState(routes.Home);

  const drawerOptions = {
    drawerStyle: {
      backgroundColor: colors.mainBackgroundColor
    },
    headerTitle: '',

    headerStyle: {
      backgroundColor: colors.navigationColor,
      height: 90,
    },
    headerRight: () => <CustomHeaderComponent search={search} setSearch={setSearch} activeTab={activeTab} />,

  }
  return (
    <Drawer.Navigator initialRouteName="Tabs" screenOptions={drawerOptions} drawerContent={({ props }) => <DrawerCustomContent {...props} />}>
      <Drawer.Screen name="Tabs" children={() => <Tabs setActiveTab={setActiveTab} />} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

const DrawerCustomContent = () => {
  const { user } = useContext(AuthContext);

  const navigation = useNavigation();

  const handleQuickPlay = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
    const creatingGameProps = {
      startCategory: 'Random',
    }
    navigation.navigate(routes.CreatingGame, creatingGameProps);
  }

  const insets = useSafeAreaInsets();
  const style = CustomContentStyles(insets);
  return (
    <DrawerContentScrollView>
      <View style={style.usernameContainer}>
        <Text style={style.username}>{user?.displayName}</Text>
      </View>
      <View style={style.buttonsContainer}>
        <DrawerItem label="Home" onPress={() => navigation.navigate(routes.Home)} inactiveBackgroundColor={colors.navigationColor} />
        <DrawerItem label="Quick Play" onPress={handleQuickPlay} inactiveBackgroundColor={colors.navigationColor} />
      </View>
      <View style={style.additionalButtonsContainer}>
        <DrawerItem label="Settings" onPress={() => navigation.navigate(routes.Settings)} inactiveBackgroundColor={colors.navigationColor} />
        <DrawerItem label="Help" onPress={() => { }} inactiveBackgroundColor={colors.navigationColor} />
        <DrawerItem label="Log Out" onPress={async () => await handleSignOut(navigation)} inactiveBackgroundColor={colors.navigationColor} />
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
    paddingVertical: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  additionalButtonsContainer: {
    paddingVertical: 15,
  }
})

function CustomHeaderComponent({ search, setSearch, activeTab }) {
  const [searchInput, setSearchInput] = useState('');

  switch (activeTab) {
    case 'Play':
      return;
    case routes.Home:
      return (
        <>
          {search ? (
            <View style={{ width: '100%', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
              <MaterialCommunityIcons name="arrow-left" size={23} onPress={() => setSearch(prev => !prev)} />
              <TextInput autoFocus={true} style={{ width: '50%' }} value={searchInput} onChangeText={(text) => setSearchInput(text)} placeholder={` Search category...`} />
              {searchInput.length > 0 && <MaterialCommunityIcons name="close" size={23} onPress={() => setSearchInput('')} />}
            </View>
          ) : (
            <MaterialIcons name="search" size={23} style={{ paddingRight: 10 }} onPress={() => setSearch(prev => !prev)} />
          )}
        </>
      );
    case routes.Profile:
      return (
        <MaterialCommunityIcons name="dots-vertical" style={{ paddingRight: 10 }} size={24} />
      );
    default:
      return null;
  }
}

export default MyDrawer;