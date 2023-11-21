/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, Button } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

function Game({ navigation }) {

  const insets = useSafeAreaInsets();
  const { container } = styles(insets);
  return (
    <View style={container}>
      <Text>gameplay</Text>
      <View>
        <Button title="Exit" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}
export const styles = (insets) =>
  StyleSheet.create({
    container: {
      marginTop: insets.top,
      padding: 10,
    },
});

export default Game