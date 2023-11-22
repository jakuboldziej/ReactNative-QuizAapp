/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Text, View, Button } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from "react-native";

function Settings({navigation}) {

  const insets = useSafeAreaInsets();
  return (
    <View style={styles(insets).container}>
        <Text>Settings</Text>
        <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  )
}
export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8B4B8",
    marginTop: insets.top,
    padding: 10,
  },
})
export default Settings