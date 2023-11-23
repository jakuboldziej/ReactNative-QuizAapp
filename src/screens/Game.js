/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Button, Alert } from "react-native"
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const questions = {
  0: {
    "question": "which answer is correct?",
    "answers": {
      0: "answer0",
      1: "answer1",
      2: "answer2",
      3: "answer3",
    },
    "correct_answer": 1
  }
}

function Game({ navigation }) {
  const [question, setQuestion] = useState();
  useEffect(() => {
    setQuestion(questions[0])
  }, [])

  const manageCorrectAnswer = (buttonId) => {
    let correctAnswer = question["correct_answer"];
    if (correctAnswer === buttonId) {
      Alert.alert('You win!', 'Good luck in next question!')
    } else {
      Alert.alert("You lose!", `Correct answer: ${question["answers"][correctAnswer]}`)
    }
    console.log(buttonId, correctAnswer);
  }

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <View>
        <Text style={{fontSize: 25}}>{questions[0]["question"]}</Text>
      </View>
      <View style={style.answers}>
        <View style={style.wrapper}>
          <View style={style.answerBtn}>
            <Button onPress={() => {manageCorrectAnswer(0)}} title={question["answers"][0]}/>
          </View>
          <View style={style.answerBtn}>
            <Button onPress={() => {manageCorrectAnswer(1)}} title={question["answers"][1]}/>
          </View>
        </View>
        <View style={style.wrapper}>
          <View style={style.answerBtn}>
            <Button onPress={() => {manageCorrectAnswer(2)}} title={question["answers"][2]}/>
          </View>
          <View style={style.answerBtn}>
            <Button onPress={() => {manageCorrectAnswer(3)}} title={question["answers"][3]}/>
          </View>
        </View>
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
    question: {
      fontSize: 20,
    },
    answers: {
      gap: 15,
    },
    buttons: {
      flex: 1,
      width: safeArea().width - 20,
      justifyContent: 'flex-end',
    },
    wrapper: {
      flexDirection: 'row',
      gap: 15,
    },
    answerBtn: {
      width: 100,
    }
});

export default Game