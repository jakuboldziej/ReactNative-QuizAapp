/* eslint-disable react/prop-types */
import React from "react"
import GameLevelCirles from "../components/GameLevelCircles";
import { View, StyleSheet, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

function DisplayRoundInfo({ navigation, route }) {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const { circleBg, round, category } = route.params

  const manageTime = async () => {
    await sleep(2000)
    navigation.goBack()
  }

  manageTime();

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.container}>
      <Text style={{fontSize: 25}}>Round {round}</Text>
      <GameLevelCirles circleBg={circleBg} game={false}/>
      <Text style={{fontSize: 25, marginBottom: 5}}>{category}</Text>
    </View>
  )
}

const styles = (insets) => 
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: insets.top,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      gap: 5,
      backgroundColor: '#67595E',
    },
  })

export default DisplayRoundInfo