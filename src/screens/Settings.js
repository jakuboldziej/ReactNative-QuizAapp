/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Text, View, Button } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from "react-native";

function Settings({navigation}) {

  const insets = useSafeAreaInsets();
  const { container } = styles(insets)
  return (
    <View style={container}>
        <Text>Settings</Text>
        <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  )
}
export const styles = (insets) => StyleSheet.create({
  container: {
    marginTop: insets.top,
    padding: 10,
  },
})
export default Settings