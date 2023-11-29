/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Text, View, Button, StyleSheet } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Settings({navigation}) {

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
        <Text style={style.defaultFontSize}>Settings</Text>
        <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  )
}
export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#67595E",
    marginTop: insets.top,
    padding: 10,
  },
  defaultFontSize: {
    fontSize: 25,
  }
})
export default Settings