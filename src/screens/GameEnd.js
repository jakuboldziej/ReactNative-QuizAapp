/* eslint-disable react/prop-types */
import React from "react"
import Button from "../components/Button"
import { View, StyleSheet, Text } from "react-native"
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context"

function GameEnd({ navigation }) {

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.container}>
      <View style={style.gameResult}>
        <Text style={style.defaultFont}>Category/Random</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.defaultFont}>User Nick</Text>
        <Text>User Level</Text>
      </View>
      <View style={style.pointsContainer}>
        <Text style={style.defaultFont}>Points Summary</Text>
        <View style={style.pointsGained}/>
      </View>
      <View style={style.exitBtn}>
        <Button title="Exit" props={{onPress: () => navigation.navigate("Tabs"), optionalStyle: {width: safeArea().width - 20}}} type="default"/>
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
      gap: 5,
      backgroundColor: '#67595E',
    },
    infoContainer: {
      alignItems: 'center',
      gap: 5,
    },
    pointsContainer: {
      alignItems: 'center',
      gap: 5,
    },
    defaultFont: {
      fontSize: 25,
      color: 'black',
    },
    gameResult: {
      backgroundColor: '#A49393', 
      width: '100%',
      fontSize: 25,
      justifyContent: 'center',
      alignItems: 'center',
      height: 50
    },
    exitBtn: {
      marginBottom: 10,
      flex: 1,
      width: safeArea().width - 20,
      justifyContent: 'flex-end',
    },
    
  })

export default GameEnd