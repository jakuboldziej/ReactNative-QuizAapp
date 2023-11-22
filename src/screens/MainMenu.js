/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { Text, View, ScrollView, Button, StyleSheet } from 'react-native';
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
      <ScrollView contentContainerStyle={scrollView}>
        <View style={buttons}>
          <Button title='+' color="#f194ff" onPress={() => setStatyw(statyw + 1)}/>
          <Button title='-' color="#f194ff" onPress={() => setStatyw(statyw - 1)}/>
          <Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text><Text>{statyw}</Text>
          <Text>Bottom</Text>
        </View>
      </ScrollView>
    </View>
  );
}
export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    marginTop: insets.top,
  },
  scrollView: {
    backgroundColor: '#67595E',
    padding: 5,
  },
  buttons: {
    flexDirection: 'column',
    width: 100,
    gap: 5
  }
})
export default MainMenu