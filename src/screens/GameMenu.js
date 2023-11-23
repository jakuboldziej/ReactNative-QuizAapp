/* eslint-disable react/prop-types */
import React from "react";
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Button } from "react-native";

function GameMenu({ navigation }) {
  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text>Game Menu Area</Text>
      <View style={style.buttons}>
        <Button title="Quick Play" onPress={() => navigation.navigate("Game")} />
        <Button title="Categories" onPress={() => navigation.navigate("GameCategories")} />
      </View>
    </View>
  );
}

export const styles = (insets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: insets.top,
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#E8B4B8',
    },
    buttons: {
      gap: 5,
    }
});

export default GameMenu;
