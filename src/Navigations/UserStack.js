import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import OnBoarding from '../Screens/OnBoarding/OnBoarding';

export default UserStack = () => {
  const Stack = createNativeStackNavigator();
  const [dataCollection, setdataCollection] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={dataCollection ? 'Home' : 'OnBoarding'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Horoscope.ly',
            headerShown: true,
            headerTitleStyle: {
              fontFamily: 'Molle',
              fontSize: 20,
              backgroundColor: 'transparent',
              color: '#fff',
            },
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
