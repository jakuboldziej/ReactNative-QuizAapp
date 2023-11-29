/* eslint-disable react/prop-types */
import React from "react"
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native"
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context"

function Answers({ props }) {

  const { buttonsDisabled, correctButtonBg, question, manageCorrectAnswer } = props

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.answers}>
      <TouchableNativeFeedback aria-disabled={buttonsDisabled} onPress={() => manageCorrectAnswer(0)}>
        <View style={[{backgroundColor: correctButtonBg[0]}, style.answerBtn]}>
          <Text>{question['answers'][0]}</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback aria-disabled={buttonsDisabled} onPress={() => manageCorrectAnswer(1)}>
      <View style={[{backgroundColor: correctButtonBg[1]}, style.answerBtn]}>
          <Text>{question['answers'][1]}</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback aria-disabled={buttonsDisabled} onPress={() => manageCorrectAnswer(2)}>
        <View style={[{backgroundColor: correctButtonBg[2]}, style.answerBtn]}>
          <Text>{question['answers'][2]}</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback aria-disabled={buttonsDisabled} onPress={() => manageCorrectAnswer(3)}>
        <View style={[{backgroundColor: correctButtonBg[3]}, style.answerBtn]}>
          <Text style={style.question}>{question['answers'][3]}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = (insets) =>
  StyleSheet.create({
    answerText: {
      fontSize: 20,
    },
    answers: {
      flex: 1,
      justifyContent: 'flex-end',
      gap: 15,
    },
    answerBtn: {
      height: 70,
      width: safeArea().width - 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
  })

export default Answers