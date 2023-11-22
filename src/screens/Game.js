/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, Button } from "react-native"
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

function Game({ navigation }) {

  const insets = useSafeAreaInsets();
  return (
    <View style={styles(insets).container}>
      <Text>gameplay</Text>
      <View style={styles(insets).buttons}>
        <Button title="Exit" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}
export const styles = (insets) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: insets.top,
      padding: 10,
      gap: 5,
    },
    buttons: {
      width: safeArea().width - 20
    }
});

export default Game