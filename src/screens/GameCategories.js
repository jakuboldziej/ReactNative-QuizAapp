/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, Button } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

function GameCategories({ navigation }) {

  const insets = useSafeAreaInsets();
  return (
    <View style={styles(insets).container}>
      <Text>Categories</Text>
      <View style={styles(insets).buttons}>
        <Button title="Exit" onPress={() => navigation.goBack()} />
        <Button title="Exit" onPress={() => navigation.goBack()} />
        <Button title="Exit" onPress={() => navigation.goBack()} />
        <Button title="Exit" onPress={() => navigation.goBack()} />
        <Button title="Exit" onPress={() => navigation.goBack()} />
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
    },
    buttons: {
      gap: 5,
      width: 100,
    }
});

export default GameCategories