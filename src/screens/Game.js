/* eslint-disable react/prop-types */
import React from "react"
import GameLevelCirles from "../components/GameLevelCircles"
import Answers from "../components/Answers"
import questions from "../components/data.json"
import { useState, useEffect } from "react"
import { View, Text,  BackHandler, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

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
  const initialTime = 15;
  const [time, setTime] = useState(initialTime);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0)
  const [timeSpent, setTimeSpent] = useState(0);
  const [progress, setProgress] = useState(1);
  const [isPaused, setIsPaused] = useState(false)
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
  //   return () => backHandler.remove()
  // }, [])

  useEffect(() => {
    if (isPaused) {
      resetTimer()
      return
    }
    if (time === 0) {
      setProgress(0)
      manageCorrectAnswer()
      setTimeSpent(initialTime)
      return
    }
    
    const interval = setInterval(() => {
      setTime(prevTimeLeft => prevTimeLeft - 5)
    }, 1000)
    
    setTimeSpent(initialTime - time)
    setProgress(time / initialTime);
    return () => clearInterval(interval);
  }, [time, isPaused])

  const toggleTimer = () => setIsPaused(previsPaused => !previsPaused)
  const resetTimer = () => {
    setTime(initialTime);
  }

  const manageCorrectAnswer = async (buttonId) => {
    setButtonsDisabled(true);
    toggleTimer()
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

      await sleep(2000)
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

      await sleep(2000)
      manageRoundState("red");
    }
    return;
  }

  const manageRoundState = async (color) => {
    if(question.id < questions.length - 1) { 
      const nextQuestion = questions[question["id"] + 1]
      navigation.navigate("DisplayRoundInfo", {
        "circleBg": {
          ...circleBg, 
          [question['id']]: color
        },
        "round": nextQuestion["id"] + 1,
        "category": question['category']
      })
      await sleep(1999)
      setQuestion(nextQuestion);
      setButtonsDisabled(false);
      setCorrectButtonBg(buttonBgs);
      toggleTimer()
    } else {
      navigation.navigate("GameEnd", {
        "circleBg": {
          ...circleBg, 
          [question['id']]: color
        },
        "category": question['category'],
        "totalTimeSpent": totalTimeSpent
      })
    }
  }

  const answerProps = {buttonsDisabled, correctButtonBg, question, progress, manageCorrectAnswer}

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.container}>
      <GameLevelCirles circleBg={circleBg} game={true}/>
      <View style={style.secondsTimer}>
        <Text>{timeSpent}</Text>
      </View>
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
    defaultFont: {
      color: 'black',
    },
    secondsTimer: {
      flex: 1,
      position: 'absolute',
      right: 10,
      top: 5,
    }
  })

export default Game