/* eslint-disable react/prop-types */
import React from "react"
import { TouchableNativeFeedback, View, Text, StyleSheet } from "react-native"
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context"

function Button({ props, type, title }) {
  const insets = useSafeAreaInsets()
  const style = styles(insets)
  const dynamicStyle = type === "default"
    ? style.defaultBtn
    : (
      (type === "answer")
        ? style.answerBtn
        : style.defaultBtn
    )

  return (
    <TouchableNativeFeedback aria-disabled={props.buttonsDisabled} onPress={props.onPress}>
      <View style={[dynamicStyle, props.optionalStyle]}>
        <Text style={[style.defaultFont, props.optionalTextStyle]}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = () => StyleSheet.create({
  exitBtn: {
    flex: 1,
    width: safeArea().width - 20,
    justifyContent: 'flex-end',
  },
  defaultBtn: {
    alignItems: 'center',
    backgroundColor: '#028bfa',
    padding: 10,
    borderRadius: 5
  },
  answerBtn: {
    height: 70,
    width: safeArea().width - 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  defaultFont: {
    fontWeight: 'bold',
    color: 'white',
  }
})

export default Button