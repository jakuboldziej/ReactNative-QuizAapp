/* eslint-disable react/prop-types */
import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function GameLevelCircles({ circles, game }) {
  const insets = useSafeAreaInsets();
  const style = styles(insets);
  const dynamicStyle = game ? style.gameCircles : style.DRICircles;

  console.log("GameLevelCircles", circles);

  return (
    <View style={dynamicStyle}>
      {circles.map((circle, i) => (
        <View key={i} style={[{backgroundColor: circle}, style.circle]}/>
      ))}
    </View>
  )
}

const styles = () => StyleSheet.create({
  gameCircles: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 10,
    top: 10,
    gap: 5,
  },
  DRICircles: {
    flexDirection: 'row',
    gap: 5,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 44 / 2,
  }
})

export default GameLevelCircles