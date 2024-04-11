/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import GameLevelCircles from "@components/GameLevelCircles";
import { View, StyleSheet, Text, BackHandler } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "@constants/colors";
import routes from "@constants/routes";
import { GameContext } from "context/GameContext";

function DisplayRoundInfo({ navigation }) {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const { round, category } = useContext(GameContext);

  // prevent back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  const manageTime = async () => {
    await sleep(2000)
    navigation.replace(routes.Game);
  }

  manageTime();

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.container}>
      <Text style={{ fontSize: 25 }}>Round {round}</Text>
      <GameLevelCircles showType="DRI" />
      <Text style={{ fontSize: 25, marginBottom: 5 }}>{category.name}</Text>
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
      backgroundColor: colors.mainBackgroundColor,
    },
  })

export default DisplayRoundInfo