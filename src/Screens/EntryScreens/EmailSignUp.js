import {
  View,
  TextInput,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../Styles/styles';
import {
  BottomImage,
  FirstTheme,
  LinearCommonButton,
  LoadingView,
} from '../../Components/CustomComponents';
import auth from '@react-native-firebase/auth';
import {RnStore} from '../../hooks/RnstoreHook';
import {Toast, screenDiagonal} from '../../Utils/helperFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';
const dgl = screenDiagonal();

const EmailSignUp = ({navigation}) => {
  const [email, setEmail] = useState('infoappmaker@gmail.com');
  const [loading, setloading] = useState(false);

  const signInFn = async () => {
    setloading(true);
    try {
      const res = await auth().signInAnonymously();
      if (res)
        Toast('sign In Succesfull', 'Your Email Address has been verified');
    } catch (error) {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }

      Toast(
        'sign In failed: ' + error.message,
        'If you are new here, create an account now!',
      );
    } finally {
      setloading(false);
    }
  };

  if (loading) return <LoadingView />;

  return (
    <View style={styles.Container}>
      <FirstTheme item={'topSvg'} />
      <Image
        source={require('../../Assets/Signup/AppName.png')}
        style={{width: dgl * 0.21}}
      />
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.titleText}>Email Address</Text>
        <TextInput
          placeholder="Enter your email address"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
        />

        {loading ? (
          <ActivityIndicator size="large" color={'#0000ff'}></ActivityIndicator>
        ) : (
          <>
            <LinearCommonButton title={'Login'} onPress={signInFn} />
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => navigation.goBack()}>
              <Text style={styles.SkipText}>BACK TO SIGNUP OPTIONS</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>

      <BottomImage />
    </View>
  );
};

export default EmailSignUp;
