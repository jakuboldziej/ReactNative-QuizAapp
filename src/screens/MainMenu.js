/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getAuth, signOut } from 'firebase/auth';
import { firebaseApp } from '../../firebase';
import colors from "../constants/colors";
import routes from '../constants/routes';

function MainMenu({ navigation }) {
  const auth = getAuth(firebaseApp);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.navigate(routes.Login);
    } catch (error) {
      console.log(error);
    }
  }

  const displayRoundParams = {
    circleBg: null,
    round: 1,
    category: 'All'
  }

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text style={style.defaultFont}>Wybierz Quiz</Text>
      <View style={style.buttons}>
        <Button title="Quick Play" onPress={() => navigation.navigate(routes.DisplayRoundInfo, displayRoundParams)} />
        <Button title="Log Out" onPress={handleSignOut} />
      </View>
      {/* <Button title="Quick Play" props={{onPress: () => navigation.navigate(routes.Game)}}/> */}
    </View>
  );
}
export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.mainBackgroundColor,
    padding: 10,
    gap: 5,
  },
  defaultFont: {
    color: 'black',
    fontSize: 25,
  },
  buttons: {
    paddingTop: 5,
    gap: 5,
  }
})

export default MainMenu