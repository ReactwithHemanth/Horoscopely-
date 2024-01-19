import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import Home from '../Screens/Footer/Home';
import RemedyScreen from '../Screens/Footer/RemedyScreen';
import Footer from '../Screens/Footer/Footer';
import styles from '../Styles/styles';
import {
  NotificationSvg,
  SettingSvg,
  ShareSvg,
} from '../Components/SvgComponent';
import {Color} from '../Utils/Color';
import CompatibilityScreen from '../Screens/Footer/CompatibilityScreen';
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
import {screenDiagonal} from '../Utils/helperFunctions';
import Notification from '../Screens/Notification/Notification';
import Settings from '../Screens/Notification/Settings';
import DateTimeScreen from '../Screens/FocusAndAdvice/DateTimeScreen';
import FocusDay from '../Screens/FocusAndAdvice/FocusDay';
import CalenderAdvice from '../Screens/FocusAndAdvice/CalenderAdvice';
import CompatibilityDetails from '../Screens/Footer/compatibilityDetails';
import {MainContext} from '../Confg/Context';
import {LogoTitle} from '../Components/CustomComponents';
import {RnGet} from '../hooks/RnstoreHook';
import ManageIntrest from '../Screens/ActionSheetScreens/ManageIntrest';
import InviteFriend from '../Screens/ActionSheetScreens/InviteFriend';
import ManagePayment from '../Screens/ActionSheetScreens/ManagePayment';
import Profile from '../Screens/ActionSheetScreens/Profile';
import ViewReports from '../Screens/ActionSheetScreens/ViewReports';
import Share from 'react-native-share';
import PlanetScreen from '../Screens/ProfileScreen/PlanetScreen';
import ReportDetails from '../Screens/ActionSheetScreens/ReportDetails';
import FAQ from '../Screens/ActionSheetScreens/FAQ';
import PackageDetails from '../Screens/ActionSheetScreens/PackageDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Top=createMaterialTopTabNavigator();
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
      <SettingSvg fill={Color.primaryBlue} />
    </TouchableOpacity>
  );
};

const ShareButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.headerContainer}
      onPress={() =>
        Share.open({url: 'https://horoscope.ly' + '/mbaksmhdfgab'})
      }>
      <ShareSvg fill={Color.shadedWhite} />
    </TouchableOpacity>
  );
};

const ProfileStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Planet" component={PlanetScreen} />
      <Tab.Screen name="Houses" component={PlanetScreen} />
      <Tab.Screen name="Traits" component={PlanetScreen} />
    </Tab.Navigator>
  );
};
const UserStack = ({navigation, route}) => {
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);
  const [DetailsExist, setDetailsExist] = useState(false);

  useEffect(() => {
    CheckLaunchedFirst();
  }, []);

  const CheckLaunchedFirst = async () => {
    const user = await RnGet('userData');
    if (user?.name != '') {
      setDetailsExist(true);
      // navigation.navigate('Home');
      setFirstLaunched(false);
    } else {
      setFirstLaunched(false);
    }
  };
  const customOptions = {
    headerShown: true,
    headerTitleStyle: {color: Color.black},
    headerTintColor: Color.primaryBlue,
    // headerRight: () => <LogoTitle />,
  };
  const defaultOptions = {
    headerShown: true,
    headerTransparent: true,
    headerBack: {color: Color.darkViolet},
    headerBackTitleVisible: false,
    headerTintColor: Color.shadedWhite,
    headerTitleStyle: {color: Color.white},
    // headerTintColor: Color.primaryBlue,
  };
  return (
    <Stack.Navigator
      initialRouteName={FirstLaunched ? 'onBoarding' : 'Home'}
      screenOptions={{
        // headerTransparent: true,
        headerBack: {color: Color.darkViolet},
        headerBackTitleVisible: false,
        headerTintColor: Color.shadedWhite,
        headerTitleStyle: {fontFamily: 'Molle-Italic'},
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
        options={{...customOptions, headerRight: () => <SettingsButton />}}
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
        options={{...customOptions}}
      />
      <Stack.Screen
        name="CalenderAdvice"
        component={CalenderAdvice}
        options={{...customOptions}}
      />
      <Stack.Screen
        name="CompatibilityDetails"
        component={CompatibilityDetails}
        options={{...defaultOptions}}
      />
      <Stack.Screen
        name="ManageIntrest"
        component={ManageIntrest}
        options={{...customOptions}}
      />
      <Stack.Screen
        name="InviteFriend"
        component={InviteFriend}
        options={{...customOptions}}
      />
      <Stack.Screen
        name="ManagePayment"
        component={ManagePayment}
        options={{...customOptions}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        // component={ProfileStack}
        options={{...defaultOptions, headerRight: () => <ShareButton />}}
      />
      <Stack.Screen
        name="ViewReports"
        component={ViewReports}
        options={{...customOptions}}
      />
      <Stack.Screen
        name="ReportDetails"
        component={ReportDetails}
        options={{...defaultOptions}}
      />
      <Stack.Screen name="FAQ" component={FAQ} options={{...customOptions}} />
      <Stack.Screen
        name="PackageDetails"
        component={PackageDetails}
        options={{
          ...defaultOptions,
          title: 'Packages',
          headerRight: () => <ShareButton />,
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
        <Tab.Screen name="UserStack" component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default LoggedStack;
