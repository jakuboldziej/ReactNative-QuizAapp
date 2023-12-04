/* eslint-disable react/prop-types */
import React, { useRef } from "react"
import GameLevelCirles from "../components/GameLevelCircles";
import questions from "../components/data.json"
import { View, StyleSheet, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

function DisplayRoundInfo({ navigation, route }) {
  const firstRound = useRef(false);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  let { circleBg, round, category } = route.params

  if (!circleBg) {
    firstRound.current = true;
    circleBg = {};
    Object.keys(questions).forEach((i) => {
      circleBg[i.toString()] = "#A49393";
    });
  } else {
    firstRound.current = false;
  }
  // console.log(circleBg, round, category)


  const manageTime = async () => {
    await sleep(2000)
    if(firstRound) {
      navigation.navigate("Game")
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