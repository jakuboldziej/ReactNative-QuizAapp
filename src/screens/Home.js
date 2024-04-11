/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from "constants/colors";
import HomeCategories from 'components/HomeCategories';

function Home() {

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text style={{fontSize: 20}}>Wybierz Quiz</Text>
      <HomeCategories />
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
  }
})

export default Home