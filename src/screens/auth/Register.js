import { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getAuth, updateProfile } from 'firebase/auth';
import { firebaseApp, firebaseDb } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import colors from "@constants/colors";
import routes from '@constants/routes';

function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [loading, setLoading] = useState('');

  const auth = getAuth(firebaseApp);

  const signUp = async () => {
    if (password !== passwordVerify) {
      alert("Password must match!");
      return;
    }
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;

      updateProfile(user, {
        displayName: username
      })

      setDoc((doc(firebaseDb, 'users', user.uid)), {
        displayName:username,
        email: email,
        uid: user.uid,
        level: 0
      });
      navigation.navigate(routes.Drawer);
    } catch (err) {
      console.log(err);
      alert('Registration failed:' + err.message)
    } finally {
      setLoading(false);
    }
  }

  const insets = useSafeAreaInsets();
  const style = styles(insets);
  return (
    <View style={style.container}>
      <Text>Register</Text>
      <TextInput textContentType='nickname' value={username} style={style.input} placeholder='Username' autoCapitalize='none' onChangeText={(text) => setUsername(text)}></TextInput>
      <TextInput textContentType='emailAddress' value={email} style={style.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput textContentType='password' secureTextEntry={true} value={password} style={style.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
      <TextInput textContentType='password' secureTextEntry={true} value={passwordVerify} style={style.input} placeholder='Verify Password' autoCapitalize='none' onChangeText={(text) => setPasswordVerify(text)}></TextInput>
      
      {loading ? <ActivityIndicator size="large" color="#0000ff" />
      : <Button title='Register' onPress={signUp}/>}
      <View style={style.signUp}>
        <Text>Already have an account? </Text>
        <Text onPress={() => navigation.navigate(routes.Login)} style={{color: 'blue', textDecorationLine: 'underline'}}>Sign In</Text>
      </View>
    </View>
  )
}

export const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainBackgroundColor,
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

export default Register