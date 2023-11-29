/* eslint-disable react/prop-types */
import React from "react"
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native"
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context"

function GameEnd({ navigation }) {

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.container}>
      <Text>GameEnd</Text>
      <View style={style.exitBtn}>
        <TouchableNativeFeedback onPress={() => navigation.navigate("Tabs")}>
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
      backgroundColor: '#67595E',
    },
    defaultBtn: {
      width: 100,
      alignItems: 'center',
      backgroundColor: '#028bfa',
      padding: 10,
      borderRadius: 5
    },
    exitBtn: {
      flex: 1,
      width: safeArea().width - 20,
      justifyContent: 'flex-end',
    },
  })

export default GameEnd