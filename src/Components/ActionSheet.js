import React, {forwardRef, useContext, useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {Color} from '../Utils/Color';
import {SPACING} from '../Styles/styles';
import {getIcon} from './GetIcon';
import auth from '@react-native-firebase/auth';

import {MainContext} from '../Confg/Context';
const {screenDiagonal, height, width} = require('../Utils/helperFunctions');
const dgl = screenDiagonal();
const ActionSheetView = forwardRef((props, ref) => {
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);
  const listItem = [
    {
      id: 0,
      name: 'Subscription Packages',
      value: 'bell',
      nav: 'PackageDetails',
    },
    {id: 1, name: 'Manage Interest', value: 'like', nav: 'ManageIntrest'},
    {id: 1, name: 'View Profile', value: 'CircleProfile', nav: 'Profile'},
    {id: 1, name: 'Invite Friends', value: 'invite', nav: 'ManageIntrest'},
    {id: 1, name: 'View Reports', value: 'File', nav: 'ViewReports'},
    {id: 1, name: 'Manage Payment', value: 'payment', nav: 'MakePayment'},
    {id: 1, name: 'Settings', value: 'settings', nav: 'Settings'},
    {id: 1, name: 'FAQs', value: 'FAQ', nav: 'FAQ'},
    {id: 1, name: 'Help', value: 'help', nav: 'HelpSection'},
    {id: 1, name: 'Terms and Privacy', value: 'terms', nav: 'ManageIntrest'},
    {id: 1, name: 'App Info', value: 'info', nav: 'AppInfo'},
    {
      id: 1,
      name: 'Sign Out',
      value: 'info',
      nav: 'signout',
    },
  ];

  const HandleNavigation = async value => {
    setFooterVisible(true);
    props.onPress();

    switch (value?.nav) {
      case 'signout':
        return await auth().signOut();
      default:
        return props.navigation.navigate(value?.nav);
    }
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
              key={item.id}
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
