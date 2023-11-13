import {View, Text} from 'react-native';
import React from 'react';
import {useAUth} from '../hooks/useAuth';

const Home = () => {
  const user = useAUth();
  console.log(user.email);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 20, marginLeft: 30}}>Welcome {user.email}</Text>
    </View>
  );
};

export default Home;
