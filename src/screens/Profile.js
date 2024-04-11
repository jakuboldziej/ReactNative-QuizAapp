/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "@constants/colors";
import { AuthContext } from "@context/AuthContext";

function Profile({ navigation }) {
  const [inputValue, setInputValue] = useState('');
  const { user } = useContext(AuthContext);

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text>{user?.displayName}</Text>
      <TextInput style={{
        padding: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 50,
        width: '100%'
      }}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder={'Change your name...'} />
      <Button title="Save" onPress={() => { alert("Changed: " + inputValue); navigation.goBack() }} />
    </View>
  )
}

export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
});

export default Profile