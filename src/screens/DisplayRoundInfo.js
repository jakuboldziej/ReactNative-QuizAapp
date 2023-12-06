/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react"
import GameLevelCirles from "../components/GameLevelCircles";
import questions from "../components/data.json"
import { View, StyleSheet, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

function DisplayRoundInfo({ navigation, route }) {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  let { circleBg, round, category } = route.params

  if (!circleBg) {
    circleBg = {};
    Object.keys(questions).forEach((i) => {
      circleBg[i.toString()] = "#A49393";
    })
  }

  useEffect(() => {
    // console.log('DRI:', circleBg, round)
  }, [round])

  const manageTime = async () => {
    await sleep(2000)
    if(round === 1) {
      navigation.replace("Game")
    } else {
      navigation.goBack()
    }
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