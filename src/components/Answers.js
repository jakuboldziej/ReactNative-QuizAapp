/* eslint-disable react/prop-types */
import { useContext } from "react"
import Button from "./MyButton"
import * as Progress from 'react-native-progress'
import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useSafeAreaFrame as safeArea } from "react-native-safe-area-context"
import { GameContext } from "context/GameContext"

function Answers({ props }) {
  const { buttonsDisabled, correctButtonBg, progress, manageCorrectAnswer } = props;
  const { currentQuestion } = useContext(GameContext);

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.answers}>
      <Progress.Bar borderColor="transparent" unfilledColor="#A49393" color="yellow" borderRadius={0} width={safeArea().width - 20} progress={progress} animated={true} />
      {currentQuestion.answers.map((answer, i) => (
        <Button key={i} title={currentQuestion.answers[i]} type="answer" props={{
          buttonsDisabled: buttonsDisabled, onPress: () => manageCorrectAnswer(i), 
          optionalStyle: {backgroundColor: correctButtonBg[i]},
          optionalTextStyle: {color: 'black', fontSize: 20, fontWeight: 'normal'}
        }}/>
      ))}
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