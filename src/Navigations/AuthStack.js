import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../Screens/EntryScreens/SignUpMethods';
import SplashScreen from '../Screens/EntryScreens/SplashScreen';
import EmailSignUp from '../Screens/EntryScreens/EmailSignUp';
import NumberSignUp from '../Screens/EntryScreens/NumberSignUp';
const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
        <Stack.Screen name="NumberSignUp" component={NumberSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
