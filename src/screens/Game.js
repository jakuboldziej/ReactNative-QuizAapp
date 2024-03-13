/* eslint-disable react/prop-types */
import React from "react"
import GameLevelCirles from "../components/GameLevelCircles"
import Answers from "../components/Answers"
import questions from "../components/data.json"
import formatTimer from "../components/FormatTimer"
import { useState, useEffect, useRef } from "react"
import { View, Text,  BackHandler, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const buttonBgs = {
  "0": "#A49393",
  "1": "#A49393",
  "2": "#A49393",
  "3": "#A49393"
}

let circleBGG = {}
Object.keys(questions).forEach((i) => {
  circleBGG[i.toString()] = "#A49393"
})

function Game({ navigation }) {
  const [question, setQuestion] = useState(() => {
    return questions[0]
  })
  const [correctButtonBg, setCorrectButtonBg] = useState(buttonBgs)
  const [circleBg, setCircleBg] = useState(circleBGG)
  const [buttonsDisabled, setButtonsDisabled] = useState(false)
  const initialTime = 15
  const timeIncre = 1
  const [time, setTime] = useState(initialTime)
  const totalTimeSpentRef = useRef(0)
  const [progress, setProgress] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const sleep = ms => new Promise(r => setTimeout(r, ms))
  
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
  //   return () => backHandler.remove()
  // }, [])

  // Timer
  useEffect(() => {
    if (isPaused) {
      return
    }
    
    if (time === 0) {
      setProgress(0)
      manageCorrectAnswer()
      return
    }

    const interval = setInterval(() => {
      setTime(prevTimeLeft => prevTimeLeft - timeIncre)
      totalTimeSpentRef.current += timeIncre
    }, 1000)
    
    setProgress(time / initialTime)
    return () => clearInterval(interval)
  }, [time, isPaused, totalTimeSpentRef])

  const toggleTimer = () => setIsPaused(previsPaused => !previsPaused)
  const resetTimer = () => setTime(initialTime)

  // Manage
  const manageCorrectAnswer = async (buttonId) => {
    setButtonsDisabled(true)
    resetTimer()
    toggleTimer()
    let correctAnswer = question["correct_answer"]
    if (correctAnswer === buttonId) {
      setCorrectButtonBg({
        ...correctButtonBg, 
        [buttonId]: "green"
      })
      setCircleBg({
        ...circleBg, 
        [question['id']]: "green"
      })

      await sleep(2000)
      await manageRoundState("green")
    } else {
      setCorrectButtonBg({
        ...correctButtonBg, 
        [buttonId]: "red",
        [correctAnswer]: "green"
      })
      setCircleBg({
        ...circleBg, 
        [question['id']]: "red"
      })

      await sleep(2000)
      await manageRoundState("red")
    }
    return
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
      setQuestion(nextQuestion)
      setButtonsDisabled(false)
      setCorrectButtonBg(buttonBgs)
      toggleTimer()
    } else {
      navigation.navigate("GameEnd", {
        "circleBg": {
          ...circleBg, 
          [question['id']]: color
        },
        "category": question['category'],
        "totalTimeSpent": totalTimeSpentRef.current
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
        <Text>{formatTimer(totalTimeSpentRef.current)}</Text>
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