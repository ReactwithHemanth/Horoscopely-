import {Image, Text, View} from 'react-native';
import {HIcon} from '../../Components/SvgComponent';
import React, {useContext, useEffect, useState} from 'react';
import {height, width} from '../../Utils/helperFunctions';
import styles from '../../Styles/styles';
import {LogoTitle} from '../../Components/CustomComponents';

const AppInfo = props => {
  return (
    <View style={styles.aligncenter}>
      <Image
        source={require('../../Assets/versionPage/ComponentBg.png')}
        style={styles.loadingView1}
        resizeMode="contain"
      />

      <View style={{marginBottom: 30, justifyContent: 'space-between'}}>
        <Text style={[styles.TextWhite, {marginBottom: 10}]}>
          Horoscope.ly Astrology App
        </Text>
        <Text style={styles.TextWhiteS12}>VERSION 2.21.11.18</Text>
      </View>
      <LogoTitle />

      <View style={{marginTop: 15}}>
        <Text style={styles.TextWhiteS10}>@2021-2028 Horoscope.ly Inc</Text>
      </View>
    </View>
  );
};
export default AppInfo;
