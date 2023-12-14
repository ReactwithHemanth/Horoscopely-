import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import Home from '../Screens/Footer/Home';
import RemedyScreen from '../Screens/Footer/RemedyScreen';
import Footer from '../Screens/Footer/Footer';
import styles from '../Styles/styles';
import {NotificationSvg, SettingSvg} from '../Components/SvgComponent';
import {Color} from '../Utils/Color';
import CompatibilityScreen from '../Screens/Footer/CompatibilityScreen';
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
import {screenDiagonal} from '../Utils/helperFunctions';
import Notification from '../Screens/Notification/Notification';
import Settings from '../Screens/Notification/Settings';
import DateTimeScreen from '../Screens/FocusAndAdvice/DateTimeScreen';
import FocusDay from '../Screens/FocusAndAdvice/FocusDay';
import CalenderAdvice from '../Screens/FocusAndAdvice/CalenderAdvice';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const dgl = screenDiagonal();

const LogoTitle = () => {
  return <Image source={require('../Assets/Home/LogoHeader1.png')} />;
};

const Notify = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.headerContainer}
      onPress={() => navigation.navigate('Notification')}>
      {/* Your icon */}
      <NotificationSvg fill={Color.white} />
      <View style={styles.headerNotifyBar}>
        <Text style={{color: Color.shadedWhite}}>3</Text>
      </View>
    </TouchableOpacity>
  );
};

const SettingsButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.headerContainer}
      onPress={() => navigation.navigate('Settings')}>
      {/* Your icon */}
      <SettingSvg fill={Color.primaryBlue} />
    </TouchableOpacity>
  );
};
const UserStack = ({navigation, route}) => {
  const [dataCollection, setdataCollection] = useState(true);

  return (
    <Stack.Navigator
      initialRouteName={'onBoarding'}
      screenOptions={{
        // headerTransparent: true,
        headerBack: {color: Color.darkViolet},
        headerBackTitleVisible: false,
        headerTintColor: Color.shadedWhite,
      }}>
      <Stack.Screen
        name="onBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
          headerTitleStyle: {color: Color.black},
          headerTintColor: Color.primaryBlue,
          headerRight: () => <SettingsButton />,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <LogoTitle />,
          headerRight: () => <Notify />,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="DateTimeScreen"
        component={DateTimeScreen}
        options={{
          headerShown: false,
          headerTintColor: Color.black,
          // headerRight: () => <Notify />,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: true,
          headerTitleStyle: {color: Color.black},
          headerTintColor: Color.primaryBlue,
          headerRight: () => <SettingsButton />,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: true, headerTintColor: Color.black}}
      />
      <Stack.Screen
        name="Compatibility"
        component={CompatibilityScreen}
        options={{
          headerShown: true,
          headerTitleStyle: {color: Color.black},
          headerTintColor: Color.primaryBlue,
          headerRight: () => <LogoTitle />,
        }}
      />

      <Stack.Screen
        name="Remedy"
        component={RemedyScreen}
        options={{
          headerShown: true,
          headerTitleStyle: {color: Color.black},
          headerTintColor: Color.primaryBlue,
          headerRight: () => <LogoTitle />,
        }}
      />
      <Stack.Screen
        name="FocusDay"
        component={FocusDay}
        options={{
          headerShown: true,
          headerTitleStyle: {color: Color.black},
          headerTintColor: Color.primaryBlue,
          // headerRight: () => <LogoTitle />,
        }}
      />
      <Stack.Screen
        name="CalenderAdvice"
        component={CalenderAdvice}
        options={{
          headerShown: true,
          headerTitleStyle: {color: Color.black},
          headerTintColor: Color.primaryBlue,
          // headerRight: () => <LogoTitle />,
        }}
      />
    </Stack.Navigator>
  );
};
const onBoardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
          headerTitleStyle: {color: Color.black},
          headerTintColor: Color.primaryBlue,
          headerRight: () => <SettingsButton />,
        }}
      />
    </Stack.Navigator>
  );
};
const LoggedStack = () => {
  const [LaunchFirst, setLaunchFirst] = useState(true);
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <Footer {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="Profile" component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default LoggedStack;
