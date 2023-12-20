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
const dgl = screenDiagonal();

const EmailSignUp = ({navigation}) => {
  const [email, setEmail] = useState('infoappmaker@gmail.com');
  const [password, setPassword] = useState('As@12345');
  const [loading, setloading] = useState(false);

  const signInFn = async () => {
    setloading(true);
    try {
      // const res = await auth().signInWithEmailAndPassword(email, password);
      constres = await auth().signInAnonymously();
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
  const handleGetStarted = async payload => {
    try {
      const res = await AsyncStorage.setItem('onboardingShown', payload);
      if (res) navigation.navigate('Home'); // Change to your Home screen navigator
    } catch (error) {
      console.error('Error saving to AsyncStorage:', error);
    }
  };

  const signUpFn = async () => {
    setloading(true);
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert('sign Up failed: ' + error.message);
    } finally {
      setloading(false);
    }
  };

  const _goBack = () => {
    navigation.goBack();
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
        <Text style={styles.titleText}>Email</Text>

        <TextInput
          placeholder="Enter your email address"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
        />
        {/* <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          autoCapitalize="none"
        /> */}
        {loading ? (
          <ActivityIndicator size="large" color={'#0000ff'}></ActivityIndicator>
        ) : (
          <>
            <LinearCommonButton title={'Login'} onPress={signInFn} />
            {/* <LinearCommonButton title={'Create account'} onPress={signUpFn} /> */}
            {/* <LinearCommonButton title={'Skip'} onPress={_goBack} /> */}
            <TouchableOpacity style={{alignItems: 'center'}} onPress={_goBack}>
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

// import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';
// // import auth from '@react-native-firebase/auth';

// const EmailSignUp = () => {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );
// };

// export default EmailSignUp;
