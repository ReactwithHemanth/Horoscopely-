import {
  View,
  TextInput,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {Firebase_app, auth} from '../../Confg/Firebase';
import styles from '../../Styles/styles';
import {
  BottomImage,
  FirstTheme,
  LinearCommonButton,
} from '../../Components/CustomComponents';

const EmailSignUp = ({navigation}) => {
  const [email, setEmail] = useState('infoappmaker@gmail.com');
  const [password, setPassword] = useState('As@12345');
  const [loading, setloading] = useState(false);

  const signInFn = async () => {
    setloading(true);
    try {
      const res = await auth.signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Alert.alert(
        'sign In failed: ' + error.message,
        'If you are new here, create an account now!',
      );
    } finally {
      setloading(false);
    }
  };

  const signUpFn = async () => {
    setloading(true);
    try {
      const res = await auth.createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
    } catch (error) {
      Alert.alert('sign Up failed: ' + error.message);
    } finally {
      setloading(false);
    }
  };

  const _goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.Container}>
      <FirstTheme />
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.titleText}>Email</Text>

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
            <LinearCommonButton title={'Skip'} onPress={_goBack} />
          </>
        )}
      </KeyboardAvoidingView>

      <BottomImage />
    </View>
  );
};

export default EmailSignUp;
