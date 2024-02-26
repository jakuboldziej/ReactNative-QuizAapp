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
        <View style={style.buttons}>
          <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
          <Button title="Rules" onPress={() => navigation.navigate("Rules")} />
        </View>
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
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  }
})
export default Settings