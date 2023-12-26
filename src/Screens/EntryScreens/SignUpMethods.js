import {View, Text, TouchableOpacity, findNodeHandle} from 'react-native';
import React, {useEffect, useState} from 'react';
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
const colorArray = ['#ba55d3', '#00bfff', '#f8f8ff', '#4169e1', '#ffff'];
/**
 *
 * @param {*} props
 * @returns
 * Flow:
 * Sign in With Email
 * * Success
 * * Data collection
 * * [Name, Email : Need Changes in design, DOB, TOB, POB, Gender, Martial Status, Push Notification, OTP Reciver ]
 * Sign in With google
 * Sign in With facebook
 * Sign in With phone Number
 * Sign in With Apple
 *
 */
const dgl = screenDiagonal();
const SignUp = props => {
  useEffect(() => {
    FirstLauched();

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
    /**
     * 'TODO: Test authentication in iOS'
     *  Apple authentication
     */
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
    const credentialsState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );
    if (credentialsState === appleAuth.State.AUTHORIZED) {
      //user autherised
      console.log(credentialsState);
    }
  };

  async function revokeSignInWithAppleToken() {
    // Get an authorizationCode from Apple
    const {authorizationCode} = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.REFRESH,
    });

    // Ensure Apple returned an authorizationCode
    if (!authorizationCode) {
      throw new Error(
        'Apple Revocation failed - no authorizationCode returned',
      );
    }

    // Revoke the token
    return auth().revokeToken(authorizationCode);
  }
  return (
    <View style={styles.Container}>
      <View style={styles.TopRightSvgStyle}>
        <SignUpBgTheme />
      </View>
      {/* <View style={styles.Container}> */}
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
        />
        <SignButtons
          title="Sign In With Facebook"
          icon={<FacebookIcon />}
          textColor={Color.white}
          BgColor={colorArray[3]}
        />
        {!appleAuthAndroid.isSupported && (
          <AppleButton
            buttonStyle={AppleButton.Style.WHITE_OUTLINE}
            buttonType={AppleButton.Type.SIGN_IN}
            style={{
              width: dgl * 0.35, // You must specify a width
              height: 45, // You must specify a height
              alignSelf: 'center',
              // borderRadius: dgl * 0.35,
            }}
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
      {/* </View> */}
    </View>
  );
};

export default SignUp;
