/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

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

  return (
    <View>
      <Text>{statyw}</Text>
    </View>
  );
}
export default MainMenu