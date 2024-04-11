/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react"
import Button from "components/MyButton"
import GameLevelCircles from "components/GameLevelCircles"
import { View, StyleSheet, Text, BackHandler } from "react-native"
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context"
import colors from "constants/colors"
import routes from "constants/routes"
import { GameContext } from "context/GameContext"
import { useIsFocused } from "@react-navigation/native";
import { AuthContext } from "context/AuthContext"

function GameEnd({ navigation, route }) {
  const { user } = useContext(AuthContext);

  const isFocused = useIsFocused();

  const [answersCorrect, setAnswersCorrect] = useState(0)
  const [pointsGained, setPointsGained] = useState(0);
  const { totalTimeSpent } = route.params
  const { circles, setCircles, setCurrentQuestion, setCategory, category, setRound, setQuestions } = useContext(GameContext);

  // prevent back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  const manageAnswersCorrect = () => {
    let answersC = 0;
    circles.map((circle) => {
      if (circle === "green") {
        answersC += 1;
      }
    })
    setAnswersCorrect(answersC)
    setPointsGained((prev) => prev += answersC);

  }

  const formatTimer = (totalSeconds) => {
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const formattedTime = [
      minutes.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0'),
    ].join(':');

    return formattedTime;
  };

  const resetGameContext = () => {
    setCircles([]);
    setCurrentQuestion(null);
    setQuestions(null);
    setCategory(null);
    setRound(1);
    setAnswersCorrect(0);
    setPointsGained(0);
  }

  useEffect(() => {
  }, [answersCorrect]);

  useEffect(() => {
    // reset game context

    manageAnswersCorrect();
  }, []);

  const handleQuit = () => {
    resetGameContext();
    navigation.navigate(routes.Drawer);
  }

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <>
      {isFocused && (
        <View style={style.container}>
          <View style={style.gameResult}>
            <Text style={style.defaultFont}>{category.name}</Text>
          </View>
          <View style={style.infoContainer}>
            <Text style={style.defaultFont}>{user.displayName}</Text>
            <Text>Level {user.level}</Text>
            <Text style={style.defaultFont}>{answersCorrect}</Text>
          </View>
          <View style={style.pointsContainer}>
            <Text style={style.defaultFont}>Points Summary</Text>
            <GameLevelCircles showType="DRI" />
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View>
                <Text style={{ textAlign: 'center' }}>Answers</Text>
                <View style={style.pointsGained}>
                  <Text style={{ fontSize: 16, color: 'lightgreen' }}>{answersCorrect}</Text>
                </View>
              </View>
              <View style={{ textAlign: 'flex-end', justifyContent: 'center' }}>
                <Text>+</Text>
              </View>
              <View>
                <Text style={{ textAlign: 'center' }}>Time</Text>
                <View style={style.pointsGained}>
                  <Text style={{ fontSize: 16, color: 'yellow' }}>{formatTimer(totalTimeSpent)}</Text>
                </View>
              </View>
              <View style={{ textAlign: 'flex-end', justifyContent: 'center' }}>
                <Text>=</Text>
              </View>
              <View>
                <Text style={{ textAlign: 'center' }}>Gained</Text>
                <View style={style.pointsGained}>
                  <Text style={{ fontSize: 16, color: 'blue' }}>{pointsGained}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={style.exitBtn}>
            <Button title="Exit" props={{ onPress: () => handleQuit(), optionalStyle: { width: safeArea().width - 20 } }} type="default" />
          </View>
        </View>
      )}
    </>
  )
}

const styles = (insets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: insets.top,
      alignItems: 'center',
      gap: 5,
      backgroundColor: colors.mainBackgroundColor,
    },
    infoContainer: {
      alignItems: 'center',
      gap: 5,
    },
    pointsContainer: {
      width: safeArea().width,
      alignItems: 'center',
      gap: 5,
      borderTopWidth: 0.7,
      borderBottomWidth: 0.7,
      borderColor: 'white',
      padding: 10,
    },
    pointsGained: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 75,
      height: 25,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 44 / 2,
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