/* eslint-disable react/prop-types */
import { GameContext } from "context/GameContext";
import React, { useContext } from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

function HomeCategories() {
  const { categories } = useContext(GameContext);

  const insets = useSafeAreaInsets()
  const style = styles(insets)
  return (
    <View style={style.categories}>
      {categories.map((category) => (
        <View key={category.name} style={style.category}>
          <Image source={require('../../assets/icon.png')} style={{ width: 100, height: 100 }} />
          <Text style={style.categoryName}>{category.name}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = (insets) =>
  StyleSheet.create({
    categories: {
      width: "100%",
      flexDirection: 'row',
      gap: 20,
      justifyContent: 'center'
    },
    categoryName: {
      width: 100,
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 22,
      backgroundColor: 'white',
      textAlign: 'center'
    },
    category: {
      color: 'black',
      padding: 3,
      gap: 10
    }
  })

export default HomeCategories