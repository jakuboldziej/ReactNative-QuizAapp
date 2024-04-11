/* eslint-disable react/prop-types */
import React from "react";
import GameLevelCircles from "../components/GameLevelCircles";
import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../constants/colors";
import routes from "../constants/routes";

function DisplayRoundInfo({ navigation, route }) {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  let { circles, round, category } = route.params

  const manageTime = async () => {
    await sleep(2000)
    if (round === 1) {
      navigation.replace(routes.Game, {circles: circles});
    } else {
      navigation.goBack()
    }
  }

  manageTime();

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.container}>
      <Text style={{ fontSize: 25 }}>Round {round}</Text>
      <GameLevelCircles circles={circles} game={false} />
      <Text style={{ fontSize: 25, marginBottom: 5 }}>{category}</Text>
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