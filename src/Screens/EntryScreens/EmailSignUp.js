import {
  View,
  TextInput,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Text,
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

const EmailSignUp = ({navigation}) => {
  const [email, setEmail] = useState('infoappmaker@gmail.com');
  const [password, setPassword] = useState('As@12345');
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const status = RnStore('footerDisabled', true);
  }, []);

  const signInFn = async () => {
    setloading(true);
    try {
      const res = await auth().signInWithEmailAndPassword(email, password);
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
            <LinearCommonButton title={'Create account'} onPress={signUpFn} />
            <LinearCommonButton title={'Skip'} onPress={_goBack} />
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
