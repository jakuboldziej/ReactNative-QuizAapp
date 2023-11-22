/* eslint-disable react/prop-types */
import React from "react";
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Button } from "react-native";

function GameMenu({ navigation }) {
  const insets = useSafeAreaInsets();
  const { container } = styles(insets);
  return (
    <View style={container}>
      <Text>Game Menu Area</Text>
      <Button title="Play" onPress={() => navigation.navigate("Game")} />
    </View>
  );
}

export const styles = (insets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      marginTop: insets.top,
      padding: 10,
      backgroundColor: '#E8B4B8',
      height: safeArea().height,
    },
});

export default GameMenu;
