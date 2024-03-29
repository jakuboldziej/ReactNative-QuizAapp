/* eslint-disable react/prop-types */
import React, { useEffect } from "react"
import Button from "./Button"
import * as Progress from 'react-native-progress'
import questions from "../components/data.json"
import { View, StyleSheet, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useSafeAreaFrame as safeArea } from "react-native-safe-area-context"

function Answers({ props }) {
  const { buttonsDisabled, correctButtonBg, question, progress, manageCorrectAnswer } = props

  const shuffle = (array) => { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
  }; 

  const handleCorrectAnswer = () => {
    let correctAnswer = questions[question["id"]]["correct_answer"]
    let questionAnswers = question["answers"]
    // console.log("0", question["answers"])
    
    shuffle(questionAnswers)
    // console.log("1", questionAnswers)
  }

  useEffect(() => {
    handleCorrectAnswer()
  }, []);

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.answers}>
      <Progress.Bar borderColor="transparent" unfilledColor="#A49393" color="yellow" borderRadius={0} width={safeArea().width - 20} progress={progress} animated={true}/>
      <Button title={question['answers'][0]} type="answer" props={{
        buttonsDisabled: buttonsDisabled, onPress: () => manageCorrectAnswer(0), 
        optionalStyle: {backgroundColor: correctButtonBg[0]},
        optionalTextStyle: {color: 'black', fontSize: 20, fontWeight: 'normal'}
      }}/>
      <Button title={question['answers'][1]} type="answer" props={{
        buttonsDisabled: buttonsDisabled, onPress: () => manageCorrectAnswer(1), 
        optionalStyle: {backgroundColor: correctButtonBg[1]},
        optionalTextStyle: {color: 'black', fontSize: 20, fontWeight: 'normal'}
      }}/>
      <Button title={question['answers'][2]} type="answer" props={{
        buttonsDisabled: buttonsDisabled, onPress: () => manageCorrectAnswer(2), 
        optionalStyle: {backgroundColor: correctButtonBg[2]},
        optionalTextStyle: {color: 'black', fontSize: 20, fontWeight: 'normal'}
      }}/>
      <Button title={question['answers'][3]} type="answer" props={{
        buttonsDisabled: buttonsDisabled, onPress: () => manageCorrectAnswer(3), 
        optionalStyle: {backgroundColor: correctButtonBg[3]},
        optionalTextStyle: {color: 'black', fontSize: 20, fontWeight: 'normal'}
      }}/>
    </View>
  )
}

const styles = () =>
  StyleSheet.create({
    answers: {
      flex: 1,
      justifyContent: 'flex-end',
      gap: 15,
      alignItems: 'center',
    },
  })

export default Answers