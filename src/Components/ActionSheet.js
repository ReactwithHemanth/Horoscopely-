import React, {forwardRef, useContext, useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {Color} from '../Utils/Color';
import {SPACING} from '../Styles/styles';
import {DearSvg, MoreSvg, SettingSvg} from './SvgComponent';
import {getIcon} from './GetIcon';
import LinearGradient from 'react-native-linear-gradient';
import Navigations from '../Navigations';
import auth from '@react-native-firebase/auth';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainContext} from '../Confg/Context';
const {screenDiagonal, height, width} = require('../Utils/helperFunctions');
const dgl = screenDiagonal();
const ActionSheetView = forwardRef((props, ref) => {
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);
  // const actionSheetRef = useRef(null);
  const offset = 150;
  const listItem = [
    {id: 0, name: 'Subscription Packages', value: 'bell', nav: 'ManageIntrest'},
    {id: 1, name: 'Manage Interest', value: 'like', nav: 'ManageIntrest'},
    {id: 1, name: 'View Profile', value: 'CircleProfile', nav: 'Profile'},
    {id: 1, name: 'Invite Friends', value: 'invite', nav: 'ManageIntrest'},
    {id: 1, name: 'View Reports', value: 'File', nav: 'ManageIntrest'},
    {id: 1, name: 'Manage Payment', value: 'payment', nav: 'ManageIntrest'},
    {id: 1, name: 'Settings', value: 'settings', nav: 'Settings'},
    {id: 1, name: 'FAQs', value: 'FAQ', nav: 'ManageIntrest'},
    {id: 1, name: 'Help', value: 'help', nav: 'ManageIntrest'},
    {id: 1, name: 'Terms and Privacy', value: 'terms', nav: 'ManageIntrest'},
    {id: 1, name: 'App Info', value: 'info', nav: 'ManageIntrest'},
    {
      id: 1,
      name: 'Sign Out',
      value: 'info',
      nav: 'signout',
    },
  ];
  // const NavigateFn = nav => {
  //   console.log('Navigate', nav);
  //   props.navigation.navigate(nav);
  //   setFooterVisible(true);
  // };

  const HandleNavigation = async value => {
    console.log(value?.nav);
    setFooterVisible(true);
    props.onPress();

    switch (value?.nav) {
      case 'signout':
        return await auth().signOut();
      // case 'ManageIntrest':
      //   return props.navigation.navigate('ManageIntrest');
      default:
        return props.navigation.navigate(value?.nav);
    }
    // if (value?.nav !== 'signout') {
    //   props.navigation.navigate('ManageIntrest');
    // } else {
    //   //add storage clear fn
    //   await auth().signOut();
    // }
  };
  return (
    <ActionSheet
      gestureEnabled
      ref={ref}
      containerStyle={{
        backgroundColor: Color.shadedWhite,
      }}>
      <View>
        <Image
          source={require('../Assets/MoreMenu/logofinal.png')}
          resizeMode="contain"
          style={{
            width: dgl * 0.15,
            height: dgl * 0.05,
            alignSelf: 'center',
          }}
        />
        {listItem.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => HandleNavigation(item)}
              style={{
                padding: SPACING * 2,
                width: width,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: 20,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}>
              {getIcon(item)}
              {/* <SettingSvg /> */}
              <Text style={{marginLeft: SPACING}}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ActionSheet>
  );
});

export {ActionSheetView};
