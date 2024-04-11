/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from "@constants/colors";
import HomeCategories from '@components/HomeCategories';

function Home({ navigation }) {
  const displayRoundParams = {
    circleBg: null,
    round: 1,
    category: 'All'
  }

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text style={style.defaultFont}>Wybierz Quiz</Text>
      <HomeCategories />
      {/* <Button title="Quick Play" props={{onPress: () => navigation.navigate(routes.Game)}}/> */}
    </View>
  );
}
export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.mainBackgroundColor,
    padding: 10,
    gap: 5,
  },
  defaultFont: {
    color: 'black',
    fontSize: 15,
  },
  categories: {
    paddingTop: 5,
    gap: 5,
  }
})

export default Home