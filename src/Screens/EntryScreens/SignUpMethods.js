import {View, Text, TouchableOpacity, findNodeHandle} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Firebase_app} from '../../Confg/Firebase';
import styles from '../../Styles/styles';
import {Methods} from '../../Utils/Dummy';
import {
  AppleIcon,
  EmailIcon,
  FacebookIcon,
  GoogleSvg,
  PhoneIcon,
  SignUpBgTheme,
  SignUpTheme2,
} from '../../Components/SvgComponent';
import {Image} from 'react-native';
import {screenDiagonal} from '../../Utils/helperFunctions';
import appleAuth, {
  AppleButton,
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication';
import {Color} from '../../Utils/Color';
import {RnGet, RnStore} from '../../hooks/RnstoreHook';
import {MainContext} from '../../Confg/Context';
const colorArray = ['#ba55d3', '#00bfff', '#f8f8ff', '#4169e1', '#ffff'];
const dgl = screenDiagonal();

const SignUp = props => {
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);

  useEffect(() => {
    setFirstLaunched(true);
    if (appleAuth.isSupported)
      return appleAuth.onCredentialRevoked(async () => {
        console.warn(
          'If this function executes, User Credentials have been Revoked',
        );
      });
  }, []);

  const SignButtons = ({nav, BgColor, icon, title, textColor}) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate(nav)}
        style={[
          styles.Button,
          {flexDirection: 'row', backgroundColor: BgColor},
        ]}>
        <View style={styles.IconMargin}>{icon}</View>
        <Text style={[styles.buttonTextStyle, {color: textColor}]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const onAppleButtonPress = async () => {
    if (appleAuth.isSupported) {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });
      const credentialsState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );

      //user autherised
      if (credentialsState === appleAuth.State.AUTHORIZED) {
        console.log(credentialsState);
      }
    }
  };

  // async function revokeSignInWithAppleToken() {
  //   // Get an authorizationCode from Apple
  //   const {authorizationCode} = await appleAuth.performRequest({
  //     requestedOperation: appleAuth.Operation.REFRESH,
  //   });

  //   if (!authorizationCode) {
  //     throw new Error(
  //       'Apple Revocation failed - no authorizationCode returned',
  //     );
  //   }

  //   return auth().revokeToken(authorizationCode);
  // }
  return (
    <View style={styles.Container}>
      <View style={styles.TopRightSvgStyle}>
        <SignUpBgTheme />
      </View>
      <View style={styles.signUpMethView2}>
        <Image
          source={require('../../Assets/Signup/AppName.png')}
          style={{width: dgl * 0.21}}
        />
        <View>
          <Text style={styles.StandartText}>
            <Text style={styles.weighted}>W</Text>elcome
          </Text>
          <Text>Choose one of the below to get started</Text>
        </View>
      </View>

      <View style={styles.signUpMethView}>
        <SignButtons
          title="Mobile Number"
          icon={<PhoneIcon />}
          textColor={Color.white}
          BgColor={colorArray[0]}
          nav={'NumberSignUp'}
        />
        <SignButtons
          title="Email Address"
          icon={<EmailIcon />}
          textColor={Color.white}
          BgColor={colorArray[1]}
          nav={'EmailSignUp'}
        />
        <SignButtons
          title="Sign In With Google"
          icon={<GoogleSvg />}
          textColor={Color.grey}
          BgColor={colorArray[2]}
          nav={'EmailSignUp'}
        />
        <SignButtons
          title="Sign In With Facebook"
          icon={<FacebookIcon />}
          textColor={Color.white}
          BgColor={colorArray[3]}
        />
        {appleAuthAndroid.isSupported && (
          <AppleButton
            buttonStyle={AppleButton.Style.DEFAULT}
            buttonType={AppleButton.Type.SIGN_IN}
            cornerRadius={30}
            style={styles.signupButton}
            onPress={() => onAppleButtonPress()}
          />
        )}
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
