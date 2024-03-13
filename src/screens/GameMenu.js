/* eslint-disable react/prop-types */
import React from "react";
import Button from "../components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View, Text } from "react-native";

function GameMenu({ navigation }) {
  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text style={{fontSize: 25}}>Game Menu Area</Text>
      <View style={style.buttons}>
        <Button title="Play Random" props={{onPress: () => navigation.navigate("Game")}} />
        <Button title="Categories" props={{onPress: () => navigation.navigate("GameCategories")}} />
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
      backgroundColor: '#67595E',
      gap: 5,
    },
    buttons: {
      paddingTop: 5,
      gap: 5,
    }
});

export default GameMenu;
