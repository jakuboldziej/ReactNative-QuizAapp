/* eslint-disable react/prop-types */
import React, { useContext } from "react"
import GameLevelCircles from "@components/GameLevelCircles"
import Answers from "@components/Answers"
import questions from "../../data.json"
import { useState, useEffect, useRef } from "react"
import { View, Text, StyleSheet, BackHandler } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import colors from "@constants/colors"
import routes from "@constants/routes"
import { formatTimer, updateCircles } from "@utils"
import { GameContext } from "@context/GameContext"

function Game({ navigation }) {
  const { circles } = useContext(GameContext);
  const [question, setQuestion] = useState(() => {
    return questions[0]
  })
  const [correctButtonBg, setCorrectButtonBg] = useState({
    "0": "#A49393",
    "1": "#A49393",
    "2": "#A49393",
    "3": "#A49393"
  });
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const initialTime = 15;
  const timeIncre = 1;
  const [time, setTime] = useState(initialTime);
  const totalTimeSpentRef = useRef(0);
  const [progress, setProgress] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  
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
      const updatedCircles = updateCircles(circles, 'green', buttonId);

      await sleep(2000)
      await manageRoundState(updatedCircles)
    } else {
      setCorrectButtonBg({
        ...correctButtonBg, 
        [buttonId]: "red",
        [correctAnswer]: "green"
      })
      const updatedCircles = updateCircles(circles, 'red', buttonId);

      await sleep(2000)
      await manageRoundState(updatedCircles)
    }
    return
  }

  const manageRoundState = async (updatedCircles) => {
    if(question.id < questions.length - 1) { 
      const nextQuestion = questions[question["id"] + 1];
      navigation.navigate(routes.DisplayRoundInfo)
      await sleep(1999)
      setQuestion(nextQuestion)
      setButtonsDisabled(false)
      // setCorrectButtonBg(buttonBgs)
      toggleTimer()
    } else {
      navigation.navigate(routes.GameEnd)
    }
  }

  const answerProps = { buttonsDisabled, correctButtonBg, question, progress, manageCorrectAnswer }

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.container}>
      <GameLevelCircles showType="game" />
      <View style={style.secondsTimer}>
        <Text>{formatTimer(totalTimeSpentRef.current)}</Text>
      </View>
      <View>
        <Text style={[{fontSize: 25, marginVertical: 50}, style.defaultFont]}>{question["question"]}</Text>
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
      backgroundColor: colors.mainBackgroundColor,
    },
    defaultFont: {
      color: 'black',
    },
    secondsTimer: {
      flex: 1,
      position: 'absolute',
      right: 10,
      top: 10,
    }
  })

export default Game