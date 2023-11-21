/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { Text, View, ScrollView, Button, Alert, StyleSheet } from 'react-native';
import { useSafeAreaInsets, useSafeAreaFrame } from 'react-native-safe-area-context';

function MainMenu() {
  const [statyw, setStatyw] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStatyw(statyw + 1);
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  });
  
  const insets = useSafeAreaInsets();
  const { container, scrollView, buttons } = styles(insets)
  return (
    <View style={container}>
      <ScrollView style={scrollView}>
        <View style={buttons}>
          <Button title="asd" color="#f194ff" onPress={() => Alert.alert("elo","asdf", [{text: 'elo'},{text: 'Cancel'}])}/>
          <Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    marginTop: insets.top,
    padding: 10,
    height: useSafeAreaFrame().height,
  },
  scrollView: {
    backgroundColor: '#606c38',
  },
  buttons: {
    flexDirection: 'column',
    width: 45,
    gap: 5
  }
})
export default MainMenu