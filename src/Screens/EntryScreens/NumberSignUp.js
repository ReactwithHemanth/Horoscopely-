import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from '../../Styles/styles';
import PhoneInput from 'react-native-international-phone-number';
import {
  BottomImage,
  FirstTheme,
  LinearCommonButton,
} from '../../Components/CustomComponents';

import auth from '@react-native-firebase/auth';

const NumberSignUp = () => {
  const [confirm, setConfirm] = useState(null);
  const [loading, setloading] = useState(false);

  const [code, setCode] = useState('');
  const [selectedCountry, setselectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  // Handle the button press
  async function signInWithPhoneNumberFn(country, phoneNumber) {
    let combine = country?.callingCode + phoneNumber;
    const formated = combine.trim();
    const confirmation = await auth().signInWithPhoneNumber(formated);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return (
    <View style={styles.Container}>
      <FirstTheme item={'topSvg'} />
      <View>
        <Text style={styles.titleText}>Mobile Number</Text>
        <>
          {confirm ? (
            <TextInput
              placeholder="Enter your Code"
              style={styles.input}
              value={code}
              onChangeText={text => setCode(text)}
            />
          ) : (
            <PhoneInput
              value={phoneNumber}
              defaultCountry="IN"
              phoneInputStyles={{
                container: {borderWidth: 0, backgroundColor: 'transparent'},
                input: styles.customInput,
                flagContainer: styles.flagContainer,
              }}
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
            {confirm ? (
              <LinearCommonButton
                title={'Confirm Code'}
                onPress={() => confirmCode(phoneNumber)}
              />
            ) : (
              <LinearCommonButton
                title={'Send Code'}
                onPress={() => {
                  signInWithPhoneNumberFn(selectedCountry, phoneNumber);
                }}
              />
            )}
          </>
        )}
      </View>

      <BottomImage />
    </View>
  );
};

export default NumberSignUp;
