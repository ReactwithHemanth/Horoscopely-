import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useAUth} from '../hooks/useAuth';
import styles from '../Styles/styles';

const Home = () => {
  const user = useAUth();
  return (
    <View style={styles.Container}>
      <Text style={{fontSize: 20, marginLeft: 30}}>Welcome {user?.email}</Text>
    </View>
  );
};

export default Home;
