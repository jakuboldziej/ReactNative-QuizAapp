/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

function Profile({navigation}) {
  const [inputValue, setInputValue] = useState('');
  const [nick, setNick] = useState('');
  useEffect(() => {
    setNick('nickname');
  }, [])

  const insets = useSafeAreaInsets();
  const { container } = styles(insets);
  return (
    <View style={container}>
      <Text>{nick}</Text>
      <TextInput style={{
            padding: 10,
            borderColor: 'red',
            borderWidth: 1,
          }}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder={'Please type here…'}/>
        <Button title="Save" onPress={() => {alert("Changed: " + inputValue); navigation.goBack()}} />
    </View>
  )
}

export const styles = (insets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      gap: 10,
      marginTop: insets.top,
      padding: 10,
    },
});

export default Profile