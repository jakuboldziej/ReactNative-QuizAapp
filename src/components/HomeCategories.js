/* eslint-disable react/prop-types */
import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

function HomeCategories() {
  const insets = useSafeAreaInsets()
  const style = styles(insets)

  const categories = [{
    uid: 0,
    name: "aaaa",
    questions: [{id: 0}]
  },
  {
    uid: 1,
    name: "bbbb",
    questions: [{id: 0}]
  }]

  return (
    <View style={style.categories}>
      {categories.map((category) => (
        <View key={category.uid} style={style.category}>
          <Text>{category.name}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = (insets) =>
  StyleSheet.create({
    categories: {

    },
    category: {
      width: 100,
      height: 20,
      borderColor: "white",
      borderWidth: 1,
      color: 'black'
    }
  })

export default HomeCategories