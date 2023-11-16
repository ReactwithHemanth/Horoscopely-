import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {getAuth} from 'firebase/auth';
import {Firebase_app} from '../../Confg/Firebase';
import styles from '../../Styles/styles';
import {Methods} from '../../Utils/Dummy';
import {SignUpBgTheme, SignUpTheme2} from '../../Components/SvgComponent';
import {Image} from 'react-native';
const auth = getAuth(Firebase_app);
const colorArray = ['#ba55d3', '#00bfff', '#f8f8ff', '#4169e1', '#ffff'];
const SignUp = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.TopRightSvgStyle}>
        <SignUpBgTheme />
      </View>

      <View style={[styles.signUpMethView2, styles.Cmargin]}>
        <Image source={require('../../Assets/Signup/AppName.png')} />
        <Text style={styles.StandartText}>
          <Text style={styles.weighted}>W</Text>elcome
        </Text>
        <Text>Choose one of the below to get started</Text>
      </View>

      <View style={styles.signUpMethView}>
        {Methods.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => props.navigation.navigate(item.nav)}
              style={[
                styles.Button,
                {flexDirection: 'row', backgroundColor: colorArray[index]},
              ]}>
              <View style={styles.IconMargin}>{item.icon}</View>
              <Text style={[styles.buttonTextStyle, {color: item.textColor}]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.signUpMethBottomView}>
        <Text style={styles.SkipText}>SKIP</Text>
        <Text>By Continuing you agree to the</Text>
        <View style={styles.CRow}>
          <Text style={styles.LinkText}>Terms & condtion</Text>
          <Text> & </Text>
          <Text style={styles.LinkText}>Privacy policy</Text>
        </View>

        <Text style={styles.smallText}>
          Your privacy is respected and protected. All personal information is
          used for astrological calculations only.
        </Text>
      </View>
      <View style={styles.BottomSvgStyle}>
        <SignUpTheme2 heigth={310} />
      </View>
    </View>
  );
};

export default SignUp;
