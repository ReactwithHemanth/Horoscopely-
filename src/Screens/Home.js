import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useAUth} from '../hooks/useAuth';
import styles from '../Styles/styles';

const Home = () => {
  const user = useAUth();
  return (
    <View style={styles.Container}>
      <Text style={styles.text1}>Welcome {user?.email}</Text>
    </View>
  );
};

export default Home;
