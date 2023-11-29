/* eslint-disable react/prop-types */
import React from "react"
import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

function GameLevelCirles({circleBg, game}) {
  const insets = useSafeAreaInsets()
  const style = styles(insets)
  const dynamicStyle = game
  ? style.gameCircles
  : style.DRICircles;

  return (
    <View style={dynamicStyle}>
        {Object.entries(circleBg).map((entry, i) => (
          <View key={entry[0]} style={[{backgroundColor: circleBg[i]}, style.circle]}/>
        ))}
    </View>
  )
}

const styles = (insets) =>
  StyleSheet.create({
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
      borderRadius: 44/2,
    }
  })

export default GameLevelCirles