import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useNavigation,
  useNavigationState,
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
import {useAuth} from '../hooks/useAuth';
import CompatibilityDetails from '../Screens/Footer/compatibilityDetails';
import {MainContext} from '../Confg/Context';
import {LogoTitle} from '../Components/CustomComponents';
import {RnGet} from '../hooks/RnstoreHook';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const dgl = screenDiagonal();

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
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);

  const defaultOptions = {
    headerShown: true,
    headerTransparent: true,
    headerBack: {color: Color.darkViolet},
    headerBackTitleVisible: false,
    headerTintColor: Color.shadedWhite,
    headerTitleStyle: {color: Color.white},
    headerTintColor: Color.primaryBlue,
  };

  return (
    <Stack.Navigator
      initialRouteName={FirstLaunched ? 'onBoarding' : 'Home'}
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
          headerLeft: () => <></>,
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
          ...defaultOptions,
          headerLeft: () => <></>,
        }}
      />

      <Stack.Screen
        name="Remedy"
        component={RemedyScreen}
        options={defaultOptions}
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
      <Stack.Screen
        name="CompatibilityDetails"
        component={CompatibilityDetails}
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

const LoggedStack = () => {
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
