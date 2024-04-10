/* eslint-disable react/prop-types */
import React from "react";
import Button from "../components/MyButton";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../constants/colors";

function GameCategories({ navigation }) {

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text style={style.defaultFont}>Categories</Text>
      <View style={style.buttons}>
        <Button title="Exit" props={{ onPress: () => navigation.goBack() }} />
        <Button title="Exit" props={{ onPress: () => navigation.goBack() }} />
        <Button title="Exit" props={{ onPress: () => navigation.goBack() }} />
        <Button title="Exit" props={{ onPress: () => navigation.goBack() }} />
        <Button title="Exit" props={{ onPress: () => navigation.goBack() }} />
        <Button title="Exit" props={{ onPress: () => navigation.goBack() }} />
      </View>
    </View>
  )
}
export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.mainBackgroundColor,
    marginTop: insets.top,
    padding: 10,
  },
  buttons: {
    gap: 5,
    width: 100,
  },
  defaultFont: {
    fontSize: 25,
    color: 'black',
  }
});

export default GameCategories