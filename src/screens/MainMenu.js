/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, ScrollView, Button, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function MainMenu({ navigation }) {
  
  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text style={style.defaultFont}>QuizApp</Text>
      <Button title="Quick Play" onPress={() => navigation.navigate("Game")} />
    </View>
  );
}
export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: insets.top,
    padding: 10,
    gap: 5,
  },
  defaultFont: {
    color: 'black',
    fontSize: 25,
  }
})
export default MainMenu