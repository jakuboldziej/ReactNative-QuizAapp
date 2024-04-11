/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "constants/colors";
import { AuthContext } from "context/AuthContext";

function Profile({ navigation }) {
  const { user } = useContext(AuthContext);

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text style={{fontSize: 20}}>{user.displayName}</Text>
      <Text style={{fontSize: 20}}>Games Played</Text>
      <Text style={{fontSize: 20}}>{user.gamesPlayed}</Text>
      <Text style={{fontSize: 20}}>Best in</Text>
    </View>
  )
}

export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
});

export default Profile