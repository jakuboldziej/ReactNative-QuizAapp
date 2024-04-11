/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameContext } from "@context/GameContext";
import { AuthContext } from "context/AuthContext";

function GameLevelCircles({ showType }) {
  const { game, circles } = useContext(GameContext);
  const { user } = useContext(AuthContext);

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  const dynamicStyle = showType === "DRI" ? style.DRIContainer : style.gameContainer;
  return (
    <View style={dynamicStyle}>
      {showType === "game" && <Text>{user.displayName}</Text>}
      <View style={style.circles}>
        {circles.map((circle, i) => (
          <View key={i} style={[{ backgroundColor: circle }, style.circle]} />
        ))}
      </View>

    </View>
  )
}

const styles = () => StyleSheet.create({
  gameContainer: {
    flexDirection: 'column',
    position: 'absolute',
    left: 10,
    top: 10,
    gap: 3
  },
  DRIContainer: {
    position: 'relative',
  },
  circles: {
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