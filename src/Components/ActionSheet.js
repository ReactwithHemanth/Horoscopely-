import React, {forwardRef, useContext, useRef} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {Color} from '../Utils/Color';
import {SPACING} from '../Styles/styles';
import {getIcon} from './GetIcon';
import auth from '@react-native-firebase/auth';

import {MainContext} from '../Confg/Context';
import {listItem} from '../Utils/Dummy';
const {screenDiagonal, height, width} = require('../Utils/helperFunctions');
const dgl = screenDiagonal();
const ActionSheetView = forwardRef((props, ref) => {
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);

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
    <SafeAreaView>
      <ActionSheet gestureEnabled ref={ref} closable>
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
    </SafeAreaView>
  );
});

export {ActionSheetView};
