/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "@constants/colors";
import routes from "@constants/routes";
import { GameContext } from "context/GameContext";
import { getCategoryByName } from "@utils";

function CreatingGame({ navigation, route }) {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const { startCategory } = route.params;
  const { setCategory } = useContext(GameContext);

  useEffect(() => {
    const handleGameStart = async () => {
      if (startCategory === 'Random') {
        const categoryRes = await getCategoryByName('All');
        setCategory(categoryRes);
        await sleep(2000)
        navigation.replace(routes.DisplayRoundInfo);
      }
    }
    handleGameStart()
  }, []);

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.container}>
      {/* Logo */}
      <Text style={{ fontSize: 25 }}>Creating game...</Text>
      <ActivityIndicator size="large" color="#0000ff" />
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
      gap: 15,
      backgroundColor: colors.mainBackgroundColor
    },
  })

export default CreatingGame