/* eslint-disable react/prop-types */
import React from "react";
import Button from "../components/MyButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

function GameMenu({ navigation }) {
  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text style={{fontSize: 25}}>Game Menu Area</Text>
      <View style={style.buttons}>
        <Button title="Play Random" props={{onPress: () => navigation.navigate(routes.Game)}} />
        <Button title="Categories" props={{onPress: () => navigation.navigate(routes.GameCategories)}} />
      </View>
    </View>
  );
}

export const styles = (insets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      backgroundColor: colors.mainBackgroundColor,
      gap: 5,
    },
    buttons: {
      paddingTop: 5,
      gap: 5,
    }
});

export default GameMenu;
