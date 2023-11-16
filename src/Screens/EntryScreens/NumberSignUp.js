import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  PhoneAuthCredential,
  PhoneAuthProvider,
  getAuth,
  signInWithPhoneNumber,
} from 'firebase/auth';
import {Firebase_app} from '../../Confg/Firebase';
import styles from '../../Styles/styles';

import {
  BottomImage,
  FirstTheme,
  LinearCommonButton,
} from '../../Components/CustomComponents';
import {useAuth} from '../../hooks/useAuth';
import PhoneInput from 'react-native-international-phone-number';

const NumberSignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [selectedCountry, setselectedCountry] = useState(null);
  const [loading, setloading] = useState(false);
  const [verificationId, setVerificationId] = useState(null);
  const [code, setcode] = useState('');
  const phone = useRef();

  //hook for ubscubscribe user in unmount
  const user = useAuth();
  const auth = getAuth(Firebase_app);

  /**
   *
   * @param {*} selectedCountry
   * @param {*} phoneNumber
   *
   */

  const sendCode = async (selectedCountry, phoneNumber) => {
    setloading(false);
    try {
      const confirmation = await signInWithPhoneNumber(formattedNumber);
      console.log(confirmation);
    } catch (error) {
      setloading(false);
      console.log('Error sending  code:' + error);
    }
  };

  const confirmCodeFn = async () => {
    try {
      if (verificationId) {
        const credential = PhoneAuthProvider.credential(
          verificationId,
          confirmCode,
        );
        await auth().signInWithCredential(credential);
      } else {
        console.error('Verification ID is null or undefined');
      }
    } catch (error) {
      console.error('Error confirming code:', error);
    }
  };

  if (user) {
    return (
      <View>
        <Text>Welcome, {user.phoneNumber}</Text>
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      <FirstTheme />

      {/* <View style={[styles.Cmargin]}>
        <Image source={require('../../Assets/Signup/AppName.png')} />

        <Text>Choose one of the below to get started</Text>
      </View> */}

      <View style={styles.signUpMethView2}>
        <Text style={styles.titleText}>Mobile Number</Text>

        <>
          {code ? (
            <TextInput
              placeholder="Enter your Code"
              style={styles.input}
              value={code}
              onChangeText={text => setcode(text)}
            />
          ) : (
            <PhoneInput
              value={phoneNumber}
              defaultCountry="IN"
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={setselectedCountry}
              onChangePhoneNumber={setPhoneNumber}
            />
          )}
        </>
        {loading ? (
          <ActivityIndicator size="large" color={'#0000ff'}></ActivityIndicator>
        ) : (
          <>
            {code ? (
              <LinearCommonButton
                title={'Confirm Code'}
                onPress={() => confirmCodeFn(phoneNumber)}
              />
            ) : (
              <LinearCommonButton
                title={'Send Code'}
                onPress={() => {
                  sendCode(selectedCountry, phoneNumber);
                  onSubmit();
                }}
              />
            )}
          </>
        )}
      </View>

      {/* <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={styles.signUpMethBottomView}>
        <Text style={styles.SkipText}>BACK TO SIGNUP OPTIONS</Text>
      </TouchableOpacity> */}
      <BottomImage />
    </View>
  );
};

export default NumberSignUp;
