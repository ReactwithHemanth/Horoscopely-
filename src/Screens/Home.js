import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useAUth} from '../hooks/useAuth';

const Home = () => {
  const user = useAUth();
  return (
    <View style={style.container}>
      <Text style={{fontSize: 20, marginLeft: 30}}>Welcome {user.email}</Text>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
