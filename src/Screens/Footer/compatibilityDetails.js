import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles, {SPACING} from '../../Styles/styles';
import {height, screenDiagonal, width} from '../../Utils/helperFunctions';
import {Color} from '../../Utils/Color';
import SimpleGradientProgressbarView from 'react-native-simple-gradient-progressbar-view';
import LinearGradient from 'react-native-linear-gradient';
const dgl = screenDiagonal();

const CompatibilityDetails = () => {
  const dummy =
    'Taurus tend to focus on one thing at a time while Gemini keeps shifting its interest from one point to another, they both can learn a lot from each other. Gemini is versatile and flexible. While Taurus is determined and practical. Taurus demands total devotion from his partner, and Gemini is unable to give it. Gemini prefers change and Taurus needs stability. Their married life is usually unstable.';
  return (
    <ImageBackground
      source={require('../../Assets/Compatibilitydetail/Component_711.png')}
      resizeMode="cover"
      style={styles.imageBgView}>
      <SafeAreaView
        style={{
          flex: 1,
          // backgroundColor: 'red',

          width: width,
          alignItems: 'center',
          // marginTop: dgl * 0.1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: dgl * 0.05,
            width: width,
          }}>
          <View style={styles.zodiacBox}>
            <LinearGradient
              colors={[Color.lightBlue, Color.primaryBlue]}
              style={styles.compatibilityContainer}>
              <Image
                source={require('../../Assets/Compatibility/aries.png')}
                style={styles.zodiaImageView}
                resizeMode="center"
              />
              {/* {Myindex === fIndex && (
                  <View style={styles.zodiaActive}>
                    <Text style={{color: Color.white}}>You</Text>
                  </View>
                )} */}
            </LinearGradient>
          </View>
          <View>
            <Text style={styles.TextWhite}>+</Text>
          </View>
          <View style={styles.zodiacBox}>
            <LinearGradient
              colors={[Color.lightBlue, Color.primaryBlue]}
              style={[
                styles.compatibilityContainer,
                // {
                //   backgroundColor:
                //     index === fIndex ? Color.lightBlue : Color.regularViolet,
                // },
              ]}>
              <Image
                source={require('../../Assets/Compatibility/aries.png')}
                style={styles.zodiaImageView}
                resizeMode="center"
              />
              {/* {Myindex === fIndex && (
                  <View style={styles.zodiaActive}>
                    <Text style={{color: Color.white}}>You</Text>
                  </View>
                )} */}
            </LinearGradient>
          </View>
        </View>
        <ScrollView
          style={{
            flex: 2,
            // backgroundColor: 'cyan',
            marginTop: dgl * 0.05,
            padding: SPACING * 2,
          }}>
          <View style={[styles.rowBox, styles.alignItemStyle]}>
            <Text style={{fontSize: 20}}>Overall</Text>
            <SimpleGradientProgressbarView
              style={styles.box}
              fromColor={Color.regularViolet}
              toColor={'#F785FF'}
              progress={0.5}
              maskedCorners={[1, 1, 1, 1]}
              cornerRadius={7.0}
            />
            <Text>50%</Text>
          </View>
          <Text>{dummy}</Text>
          <LinearGradient
            colors={[Color.regularViolet, Color.primaryBlue]}
            style={{
              backgroundColor: 'red',
              width: width - 30,
              height: height / 2,
              borderRadius: SPACING,
              marginTop: SPACING,
              // padding: 20,
            }}></LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CompatibilityDetails;
