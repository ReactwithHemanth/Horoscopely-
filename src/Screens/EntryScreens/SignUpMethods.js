import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Button,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {Firebase_app} from '../../Confg/Firebase';
import styles from '../../Styles/styles';
import {Methods} from '../../Utils/Dummy';
import {SocialIcon} from '@rneui/base-edge';
import {Icon} from 'react-native-elements';
import {SignUpBgTheme, SignUpTheme2} from '../../Components/SvgComponent';
import {Image} from 'react-native';
const auth = getAuth(Firebase_app);
const colorArray = ['#ba55d3', '#00bfff', '#f8f8ff', '#4169e1', '#ffff'];
const SignUp = props => {
  return (
    <View style={styles.Container}>
      <View style={{position: 'absolute', top: 0, left: 90}}>
        <SignUpBgTheme />
      </View>

      <View style={[{flex: 1.2, justifyContent: 'center'}, styles.Cmargin]}>
        <Image source={require('../../Assets/Signup/AppName.png')} />
        <Text style={{fontSize: 30}}>
          <Text style={{fontWeight: 'bold'}}>W</Text>elcome
        </Text>
        <Text>Choose one of the below to get started</Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', marginTop: 10}}>
        {Methods.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => props.navigation.navigate(item.nav)}
              style={[
                styles.Button,
                {
                  flexDirection: 'row',
                  backgroundColor: colorArray[index],
                },
              ]}>
              <View style={{marginHorizontal: 25}}>{item.icon}</View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: item.textColor,
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          // backgroundColor: 'red',
          justifyContent: 'center',
          // marginVertical: 30,
        }}>
        <Text style={{margin: 20, color: 'grey'}}>SKIP</Text>
        <Text>By Continuing you agree to the</Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'blue',
              textDecorationLine: 'underline',
            }}>
            Terms & condtion
          </Text>
          <Text>&</Text>
          <Text
            style={{
              color: 'blue',
              textDecorationLine: 'underline',
            }}>
            Privacy policy
          </Text>
        </View>

        <Text style={{fontSize: 10, textAlign: 'center', padding: 22}}>
          Your privacy is respected and protected. All personal information is
          used for astrological calculations only.
        </Text>
      </View>
      <View style={{bottom: 0, position: 'absolute', alignSelf: 'center'}}>
        <SignUpTheme2 heigth={310} />
      </View>
    </View>
  );
};

export default SignUp;
