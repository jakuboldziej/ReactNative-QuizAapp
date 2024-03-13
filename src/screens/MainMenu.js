/* eslint-disable react/prop-types */
import React from 'react';
import questions from "../components/data.json"
import { useEffect, useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../components/Button';

function MainMenu({ navigation }) {
  
  const displayRoundParams = {
    circleBg: null,
    round: 1,
    category: 'All'
  }

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text style={style.defaultFont}>QuizApp</Text>
      <View style={style.buttons}>
        <Button title="Quick Play" props={{onPress: () => navigation.navigate("DisplayRoundInfo", displayRoundParams)}}/>

      </View>
      {/* <Button title="Quick Play" props={{onPress: () => navigation.navigate("Game")}}/> */}
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
  },
  buttons: {
    paddingTop: 5,
    gap: 5,
  }
})
export default MainMenu