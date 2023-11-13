import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Button,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {useAUth} from '../hooks/useAuth';
import {Firebase_app} from '../Confg/Firebase';
const auth = getAuth(Firebase_app);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false);

  const signIn = async () => {
    setloading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
      Alert.alert('sign In failed: ' + error.message);
    } finally {
      setloading(false);
    }
  };
  const signUp = async () => {
    setloading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
      Alert.alert('sign Up failed: ' + error.message);
    } finally {
      setloading(false);
    }
  };
  return (
    <View style={style.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          placeholder="Email"
          style={style.input}
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          style={style.input}
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          autoCapitalize="none"
        />
        {loading ? (
          <ActivityIndicator size="large" color={'#0000ff'}></ActivityIndicator>
        ) : (
          <>
            <Button title="Login" onPress={signIn} />
            <Button title="Create account" onPress={signUp} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', marginHorizontal: 20},
  input: {width: '100%', backgroundColor: 'white', margin: 5},
});
