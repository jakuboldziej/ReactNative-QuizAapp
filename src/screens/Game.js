/* eslint-disable react/prop-types */
import React from "react"
import { useState, useEffect, useRef } from "react"
import { View, Text, TouchableNativeFeedback, Alert, BackHandler } from "react-native"
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context"
import { StyleSheet } from "react-native"

const questions = [
  {
    "id": 0,
    "question": "which answer is correct? 1",
    "answers": {
      0: "answer0",
      1: "answer1",
      2: "answer2",
      3: "answer3",
    },
    "correct_answer": 1
  },
  {
    "id": 1,
    "question": "which answer is correct? 2",
    "answers": {
      0: "answer02",
      1: "answer12",
      2: "answer22",
      3: "answer32",
    },
    "correct_answer": 1
  }
]

function Game({ navigation }) {
  const [question, setQuestion] = useState(() => {
    return questions[0]
  });
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  const manageCorrectAnswer = async (buttonId) => {
    let correctAnswer = question["correct_answer"]
    const nextQuestion = questions[question["id"] + 1]
    
    if (correctAnswer === buttonId) {
      Alert.alert('You win!', 'Good luck in next question!')
      await sleep(3000)
      setQuestion(nextQuestion)
    } else {
      Alert.alert("You lose!", `Correct answer: ${question["answers"][correctAnswer]}`)
    }
  }

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.container}>
      <View>
        <Text style={{fontSize: 25}}>{question["question"]}</Text>
      </View>
      <View style={style.answers}>
        <View style={style.wrapper}>
          <TouchableNativeFeedback onPress={() => manageCorrectAnswer(0)}>
            <View style={style.answerBtn}>
              <Text>{question['answers'][0]}</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => manageCorrectAnswer(1)}>
          <View style={style.answerBtn}>
              <Text>{question['answers'][1]}</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={style.wrapper}>
          <TouchableNativeFeedback onPress={() => manageCorrectAnswer(2)}>
            <View style={style.answerBtn}>
              <Text>{question['answers'][2]}</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => manageCorrectAnswer(3)}>
            <View style={style.answerBtn}>
              <Text>{question['answers'][3]}</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      {/* tego nie będzie */}
      <View style={style.buttons}>
          <TouchableNativeFeedback onPress={() => navigation.goBack()}>
            <View style={[style.defaultBtn, {width: '100%'}]}>
              <Text style={{color: 'white'}}>Exit</Text>
            </View>
          </TouchableNativeFeedback>
      </View>
    </View>
  )
}

const styles = (insets) =>
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
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    defaultBtn: {
      width: 100,
      alignItems: 'center',
      backgroundColor: '#028bfa',
      padding: 10,
      borderRadius: 5
    }
  })

export default Game