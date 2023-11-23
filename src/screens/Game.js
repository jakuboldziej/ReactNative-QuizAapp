/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, Button } from "react-native"
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const question = {
  0: {
    "question": "dupa?",
    "answers": [
      "dupa1",
      "dupa2",
      "dupa3",
    ],
    "correct_answer": 1
  }
}

function Game({ navigation }) {

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <View style={style.question}>
        <Text>{question[0]["question"]}</Text>

      </View>
      <View style={style.buttons}>
        <Button title="Exit" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}
export const styles = (insets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: insets.top,
      alignItems: 'center',
      padding: 10,
      gap: 5,
    },
    buttons: {
      flex: 1,
      width: safeArea().width - 20,
      justifyContent: 'flex-end',
    },
    question: {

    }
});

export default Game