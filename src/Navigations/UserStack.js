import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import Home from '../Screens/Footer/Home';
import RemedyScreen from '../Screens/Footer/RemedyScreen';
import Footer from '../Screens/Footer/Footer';
import styles from '../Styles/styles';
import {CalenderSvg, NotificationSvg} from '../Components/SvgComponent';
import {Color} from '../Utils/Color';
import CompatibilityScreen from '../Screens/Footer/CompatibilityScreen';
import OnBoarding from '../Screens/OnBoarding/OnBoarding';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const BottomTabStack = () => (
//   <Tab.Navigator tabBar={props => <CustomFooter {...props} />}>
//     <Tab.Screen name="Screen1" component={Home} />
//     <Tab.Screen name="Screen2" component={RemedyScreen} />
//   </Tab.Navigator>
// );

const LogoTitle = () => {
  return <Image source={require('../Assets/Home/LogoHeader1.png')} />;
};

const Notify = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Your icon */}
      <NotificationSvg fill={Color.white} />
    </View>
  );
};

const UserStack = () => {
  const [dataCollection, setdataCollection] = useState(true);
  return (
    <Stack.Navigator
      initialRouteName={dataCollection ? 'Home' : 'OnBoarding'}
      screenOptions={{
        // headerShown: false,
        headerTransparent: true,
        headerTitle: () => <LogoTitle />,
        headerRight: () => <Notify />,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="onBoarding" component={OnBoarding} />
      <Stack.Screen name="Compatibility" component={CompatibilityScreen} />
      <Stack.Screen name="Remedy" component={RemedyScreen} />
    </Stack.Navigator>
  );
};
export default LoggedStrack = () => {
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
