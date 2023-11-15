import {
  View,
  TextInput,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {Firebase_app} from '../../Confg/Firebase';
import styles from '../../Styles/styles';
import {LinearCommonButton} from '../../Components/CustomComponents';

const auth = getAuth(Firebase_app);

const EmailSignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false);

  const signInFn = async () => {
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
  const signUpFn = async () => {
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

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.Container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          autoCapitalize="none"
        />
        {loading ? (
          <ActivityIndicator size="large" color={'#0000ff'}></ActivityIndicator>
        ) : (
          <>
            <LinearCommonButton title={'Login'} onPress={signInFn} />
            <LinearCommonButton title={'Create account"'} onPress={signUpFn} />
            <LinearCommonButton title={'Skip'} onPress={goBack} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default EmailSignUp;
