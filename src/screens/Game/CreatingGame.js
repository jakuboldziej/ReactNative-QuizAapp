/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator, BackHandler } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "@constants/colors";
import routes from "@constants/routes";
import { GameContext } from "context/GameContext";
import { getQuestion } from "@utils";

function CreatingGame({ navigation, route }) {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const { startCategory } = route.params;
  const { categories, setCategory, setQuestions, setCurrentQuestion, round, setCircles } = useContext(GameContext);

  // prevent back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  useEffect(() => {
    const handleGameStart = async () => {
      try {
        if (startCategory === 'Random') {
          const randomCategory = categories[Math.floor(Math.random() * categories.length)];
          const questionsPromise = randomCategory.questions.map(async (questionId) => {
            const questionRes = await getQuestion(questionId);
            return questionRes;
          })
          const questionsRes = await Promise.all(questionsPromise);
          setCategory(randomCategory);
          setQuestions(questionsRes);
          setCurrentQuestion(questionsRes[round - 1]);
          let createCircles = [];
          questionsRes.map((question) => {
            createCircles.push("#A49393");
          })
          setCircles(createCircles);
        }
      } catch (err) {
        console.log(err);
      } finally {
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