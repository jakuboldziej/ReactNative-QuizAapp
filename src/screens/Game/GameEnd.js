/* eslint-disable react/prop-types */
import React from "react"
import Button from "@components/MyButton"
import GameLevelCirles from "@components/GameLevelCircles"
import { View, StyleSheet, Text } from "react-native"
import { useSafeAreaInsets, useSafeAreaFrame as safeArea } from "react-native-safe-area-context"
import colors from "@constants/colors"
import routes from "@constants/routes"
import questions from "../../data.json";

function GameEnd({ navigation, route }) {
  let answersCorrect = 0;
  let pointsGained = 0;
  const { circleBg, category, totalTimeSpent } = route.params

  const manageAnswersCorrect = () => {
    Object.entries(circleBg).map((entry) => {
      if(entry[1] === "green") {
        answersCorrect += 1;
      }
    })
  }
  manageAnswersCorrect()

  const formatTimer = (totalSeconds) => {
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const formattedTime = [
      minutes.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0'),
    ].join(':');

    return formattedTime;
  };

  const calculatePointsGained = () => {
    if(totalTimeSpent <= 3){
      pointsGained += 5;
    } else if(totalTimeSpent > 3 && totalTimeSpent <= 6) {
      pointsGained += 3
    } else if(totalTimeSpent > 6 && totalTimeSpent <= 9) {
      pointsGained += 2
    } else if(totalTimeSpent > 9 && totalTimeSpent <= 12) {
      pointsGained += 1
    } else if(12 < totalTimeSpent) {
      pointsGained += 0
    }
  }
  calculatePointsGained()

  pointsGained += answersCorrect

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.container}>
      <View style={style.gameResult}>
        <Text style={style.defaultFont}>{category}</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.defaultFont}>User Nick</Text>
        <Text>Level 1</Text>
        <Text style={style.defaultFont}>{answersCorrect}</Text>
      </View>
      <View style={style.pointsContainer}>
        <Text style={style.defaultFont}>Points Summary</Text>
        <GameLevelCirles questionsLength={questions.length} game={false}/>
        <View style={{flexDirection: 'row', gap: 10}}>
          <View>
            <Text style={{textAlign: 'center'}}>Answers</Text>
            <View style={style.pointsGained}>
              <Text style={{fontSize: 16, color: 'lightgreen'}}>{answersCorrect}</Text>
            </View>
          </View>
          <View style={{textAlign: 'flex-end', justifyContent: 'center'}}>
            <Text>+</Text>
          </View>
          <View>
            <Text style={{textAlign: 'center'}}>Time</Text>
            <View style={style.pointsGained}>
              <Text style={{fontSize: 16, color: 'yellow'}}>{formatTimer(totalTimeSpent)}</Text>
            </View>
          </View>
          <View style={{textAlign: 'flex-end', justifyContent: 'center'}}>
            <Text>=</Text>
          </View>
          <View>
            <Text style={{textAlign: 'center'}}>Gained</Text>
            <View style={style.pointsGained}>
              <Text style={{fontSize: 16, color: 'blue'}}>{pointsGained}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.exitBtn}>
        <Button title="Exit" props={{onPress: () => navigation.navigate(routes.Drawer), optionalStyle: {width: safeArea().width - 20}}} type="default"/>
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
      borderRadius: 44/2,
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