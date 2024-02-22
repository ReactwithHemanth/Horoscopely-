import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
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
import ReportDetails from '../Screens/ActionSheetScreens/ReportDetails';
import FAQ from '../Screens/ActionSheetScreens/FAQ';
import PackageDetails from '../Screens/ActionSheetScreens/PackageDetails';
import HelpSection from '../Screens/ActionSheetScreens/HelpSection';
import MakePayment from '../Screens/ActionSheetScreens/MakePayment';
import ShowSubscriptionAd from '../Screens/ProfileScreen/SubscriptionAds';
import ShowSubscriptionNext from '../Screens/ProfileScreen/SubscriptionAdsNext';
import AppInfo from '../Screens/ProfileScreen/Appinfo';
import NotificationDetails from '../Screens/Notification/NotificationDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Notify = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.headerContainer}
      onPress={() => navigation.navigate('Notification')}>
      <NotificationSvg fill={Color.white} />
      <View style={styles.headerNotifyBar}>
        <Text style={styles.notifyRedDot}>3</Text>
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
      onPress={() =>
        Share.open({url: 'https://horoscope.ly' + '/mbaksmhdfgab'})
      }>
      <ShareSvg fill={Color.shadedWhite} />
    </TouchableOpacity>
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
      setFirstLaunched(false);
    } else {
      setFirstLaunched(false);
    }
  };
  const customOptions = {
    headerShown: true,
    headerTitleStyle: {color: Color.black},
    headerTintColor: Color.primaryBlue,
  };
  const defaultOptions = {
    headerShown: true,
    headerTransparent: true,
    headerBack: {color: Color.darkViolet},
    headerBackTitleVisible: false,
    headerTintColor: Color.shadedWhite,
    headerTitleStyle: {color: Color.white},
  };
  return (
    <Stack.Navigator
      initialRouteName={FirstLaunched ? 'HelpSection' : 'Home'}
      screenOptions={{
        headerBack: {color: Color.darkViolet},
        headerBackTitleVisible: false,
        headerTintColor: Color.shadedWhite,
        headerTitleStyle: {fontFamily: 'Molle-Italic'},
      }}>
      <Stack.Group>
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
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            ...customOptions,
            title: 'Notification',
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
        <Stack.Screen
          name="HelpSection"
          component={HelpSection}
          options={{
            headerShown: false,
            headerRight: () => <ShareButton />,
          }}
        />
        <Stack.Screen
          name="MakePayment"
          component={MakePayment}
          options={{
            ...defaultOptions,
            headerRight: () => <ShareButton />,
          }}
        />
        <Stack.Screen
          name="AppInfo"
          component={AppInfo}
          options={{
            ...defaultOptions,
            headerRight: () => <ShareButton />,
          }}
        />
        <Stack.Screen
          name="NotificationDetails"
          component={NotificationDetails}
          options={{
            ...customOptions,
            title: 'Notification',
            headerRight: () => <SettingsButton />,
          }}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          contentStyle: {backgroundColor: '#40404040'},
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen name="subscriptionAd" component={ShowSubscriptionAd} />
        <Stack.Screen
          name="ShowSubscriptionNext"
          component={ShowSubscriptionNext}
        />
      </Stack.Group>
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
