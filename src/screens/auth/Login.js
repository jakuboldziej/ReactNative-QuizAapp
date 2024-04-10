import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import colors from "../../constants/colors";
import routes from '../../constants/routes';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const { user } = useContext(AuthContext);

  const auth = getAuth(firebaseApp);

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate(routes.Drawer);
    } catch (err) {
      console.log(err);
      alert('Sign In failed:' + err.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user) navigation.navigate(routes.Drawer);
  }, [user]);

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text>Login</Text>
      <TextInput value={email} style={style.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} style={style.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
      
      {loading ? <ActivityIndicator size="large" color="#0000ff" />
      : <Button title='Login' onPress={signIn}/>}
      <View style={style.signUp}>
        <Text>Don't have an account? </Text>
        <Text onPress={() => navigation.navigate(routes.Register)} style={{color: 'blue', textDecorationLine: 'underline'}}>Sign Up</Text>
      </View>
    </View>
  )
}

export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainBackgroundColor
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    width: '40%'
  },
  signUp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
})

export default Login