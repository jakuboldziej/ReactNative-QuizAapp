/* eslint-disable react/prop-types */
import React from "react"
import GameLevelCirles from "../components/GameLevelCircles"
import Answers from "../components/Answers"
import questions from "../components/data.json"
import { useState, useEffect } from "react"
import { View, Text,  BackHandler, StyleSheet } from "react-native"
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context"

const buttonBgs = {
  "0": "#A49393",
  "1": "#A49393",
  "2": "#A49393",
  "3": "#A49393"
}

function Game({ navigation }) {
  const [question, setQuestion] = useState(() => {
    return questions[0]
  });
  const [correctButtonBg, setCorrectButtonBg] = useState(buttonBgs);
  const [circleBg, setCircleBg] = useState(Object.fromEntries(Object.entries(buttonBgs).slice(0, questions.length)));
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  const manageCorrectAnswer = async (buttonId) => {
    setButtonsDisabled(true);
    let correctAnswer = question["correct_answer"]
    if (correctAnswer === buttonId) {
      setCorrectButtonBg({
        ...correctButtonBg, 
        [buttonId]: "green"
      });
      setCircleBg({
        ...circleBg, 
        [question['id']]: "green"
      })

      await sleep(3000)
      manageRoundState("green");
    } else {
      setCorrectButtonBg({
        ...correctButtonBg, 
        [buttonId]: "red",
        [correctAnswer]: "green"
      });
      setCircleBg({
        ...circleBg, 
        [question['id']]: "red"
      })

      await sleep(3000)
      manageRoundState("red");
    }
  }

  const manageRoundState = async (color) => {
    if(question.id < questions.length - 1) { 
      const nextQuestion = questions[question["id"] + 1]
      navigation.navigate("DisplayRoundInfo", {
        "circleBg": {
          ...circleBg, 
          [question['id']]: color
        },
        "round": nextQuestion["id"] + 1
      })
      await sleep(1000)
      setQuestion(nextQuestion);
      setButtonsDisabled(false);
      setCorrectButtonBg(buttonBgs);
    } else {
      navigation.navigate("GameEnd")
    }
  }

  const answerProps = {buttonsDisabled, correctButtonBg, question, manageCorrectAnswer}

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.container}>
      {/* <View style={style.circles}>
        <View style={[{backgroundColor: circleBg[0]}, style.circle]}/>
        <View style={[{backgroundColor: circleBg[1]}, style.circle]}/>
        <View style={[{backgroundColor: circleBg[2]}, style.circle]}/>
        <View style={[{backgroundColor: circleBg[3]}, style.circle]}/>
      </View> */}
      <GameLevelCirles circleBg={circleBg} game={true}/>
      <View>
        <Text style={[{fontSize: 25, marginVertical: 10}, style.defaultFont]}>{question["question"]}</Text>
      </View>
      <Answers props={answerProps}/>
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
      backgroundColor: '#67595E',
    },
    exitBtn: {
      flex: 1,
      width: safeArea().width - 20,
      justifyContent: 'flex-end',
    },
    defaultBtn: {
      width: 100,
      alignItems: 'center',
      backgroundColor: '#028bfa',
      padding: 10,
      borderRadius: 5
    },
    circles: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      left: 10,
      top: 5,
      gap: 5,
    },
    circle: {
      width: 10,
      height: 10,
      borderRadius: 44/2,
    },
    defaultFont: {
      color: 'white'
    }
  })

export default Game