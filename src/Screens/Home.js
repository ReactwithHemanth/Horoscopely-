import {View, Text} from 'react-native';
import React from 'react';
import styles from '../Styles/styles';
import {getAuth, signOut} from 'firebase/auth';
import {defaultapp} from '../Confg/Firebase';
import {useAuth} from '../hooks/useAuth';
// import {firebase} from '@react-native-firebase/auth';
// const auth = firebase.auth();

const Home = () => {
  const user = useAuth();
  const auth = getAuth(defaultapp);

  console.log(user.email);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <View style={styles.Container}>
      <Text style={styles.text1}>Welcome {user?.email}</Text>
      <Text onPress={handleSignOut} style={styles.text1}>
        SignOut {user?.email}
      </Text>
    </View>
  );
};

export default Home;
