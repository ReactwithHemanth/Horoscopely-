import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import styles from '../../Styles/styles';
import PhoneInput from 'react-native-international-phone-number';
import {
  BottomImage,
  FirstTheme,
  LinearCommonButton,
} from '../../Components/CustomComponents';
import {getAuth, signInWithPhoneNumber} from 'firebase/auth';
import {defaultapp} from '../../Confg/Firebase';
import {firebase} from '@react-native-firebase/auth';

const NumberSignUp = () => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [loading, setloading] = useState(false);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');
  const [selectedCountry, setselectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  // const auth = firebase.auth();

  const user = useAuth();
  const auth = getAuth(defaultapp);

  console.log(user, '---->>');
  // Handle login
  // function onAuthStateChanged(user) {
  //   if (user) {
  //     // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
  //     // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
  //     // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
  //     // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
  //   }
  // }

  // useEffect(() => {
  //  const subscriber = onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // Handle the button press
  async function signInWithPhoneNumberFn(country, phoneNumber) {
    let combine = country + phoneNumber;
    const formated = combine.trim();
    console.log(formated, 'format1');
    const confirmation = await signInWithPhoneNumber(auth, formated);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  // if (!confirm) {
  //   return (
  //     <SafeAreaView>
  //       <Button
  //         title="Phone Number Sign In"
  //         onPress={() => signInWithPhoneNumber('+919562275795')}
  //       />
  //     </SafeAreaView>
  //   );
  // }
  return (
    <View style={styles.Container}>
      <FirstTheme item={'topSvg'} />

      {/* <View style={[styles.Cmargin]}>
                <Image source={require('../../Assets/Signup/AppName.png')} />

                <Text>Choose one of the below to get started</Text>
              </View> */}

      <View style={styles.signUpMethView2}>
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
