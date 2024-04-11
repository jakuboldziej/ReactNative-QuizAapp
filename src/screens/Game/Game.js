/* eslint-disable react/prop-types */
import React, { useContext } from "react"
import GameLevelCircles from "components/GameLevelCircles"
import Answers from "components/Answers"
import { useState, useEffect, useRef } from "react"
import { View, Text, StyleSheet, BackHandler } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import colors from "constants/colors"
import routes from "constants/routes"
import { formatTimer, updateCircles } from "@utils"
import { GameContext } from "context/GameContext"
import { useIsFocused } from "@react-navigation/native";

function Game({ navigation }) {
  const { circles, setCircles, round, setRound, questions, currentQuestion, setCurrentQuestion } = useContext(GameContext);
  const isFocused = useIsFocused(); // prevent re-mount timer bug after switching
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
  
  // prevent back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  // Timer
  useEffect(() => {
    if (isPaused) return;
    if (!isFocused) return;
    
    if (time <= 0) {
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
    setButtonsDisabled(true);
    resetTimer();
    toggleTimer();
    let correctAnswer = currentQuestion.correct_answer;
    if (correctAnswer === buttonId) {
      setCorrectButtonBg({
        ...correctButtonBg, 
        [buttonId]: "green"
      })
      const updatedCircles = updateCircles(circles, "green", round);
      setCircles(updatedCircles)

      await sleep(2000)
      await manageRoundState()
    } else {
      setCorrectButtonBg({
        ...correctButtonBg, 
        [buttonId]: "red",
        [correctAnswer]: "green"
      })
      const updatedCircles = updateCircles(circles, "red", round);
      setCircles(updatedCircles)

      await sleep(2000)
      await manageRoundState()
    }
    return;
  }

  const manageRoundState = async () => {
    if(round < questions.length) { 
      const nextQuestion = questions[round + 1];
      navigation.replace(routes.DisplayRoundInfo)
      await sleep(1999)
      setCurrentQuestion(nextQuestion)
      setRound((prev) => prev + 1);
      setButtonsDisabled(false)
      toggleTimer()
    } else {
      navigation.replace(routes.GameEnd, { totalTimeSpent: totalTimeSpentRef.current })
    }
  }

  const answerProps = { buttonsDisabled, correctButtonBg, progress, manageCorrectAnswer }

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <>
      {isFocused && (
        <View style={style.container}>
          <GameLevelCircles showType="game" />
          <View style={style.secondsTimer}>
            <Text>{formatTimer(totalTimeSpentRef.current)}</Text>
          </View>
          <View>
            <Text style={[{fontSize: 25, marginVertical: 50}, style.defaultFont]}>{currentQuestion.question}</Text>
          </View>
          <Answers props={answerProps} />
        </View>
      )}
    </>
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