/* eslint-disable react/prop-types */
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
      marginTop: insets.top,
      padding: 10,
    },
});

export default GameMenu;
