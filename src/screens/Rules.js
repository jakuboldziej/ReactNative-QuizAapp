/* eslint-disable react/prop-types */
import { View, Text, Button, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../constants/colors";

function Rules({ navigation }) {
  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
      <View style={style.container}>
        <View>
          <Text>Rules:</Text>
        </View>
        <View style={style.backButton}>
          <Button title="Back" onPress={() => { navigation.goBack() }} />
        </View>
      </View>
  )
}

export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
    gap: 10,
    marginTop: insets.top,
    padding: 10,
  },
  backButton: {
    flex: 1,
    justifyContent: 'flex-end',
  }
});

export default Rules