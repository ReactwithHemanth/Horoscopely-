import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles, {SPACING} from '../../Styles/styles';
import {height, screenDiagonal, width} from '../../Utils/helperFunctions';
import {Color} from '../../Utils/Color';
import SimpleGradientProgressbarView from 'react-native-simple-gradient-progressbar-view';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const dgl = screenDiagonal();

const CompatibilityDetails = () => {
  const [Tabs, setTabs] = useState('Friendship');
  const TAB_WIDTH = 120;

  const offset = useSharedValue(-TAB_WIDTH);

  const dummy =
    'Taurus tend to focus on one thing at a time while Gemini keeps shifting its interest from one point to another, they both can learn a lot from each other. Gemini is versatile and flexible. While Taurus is determined and practical. Taurus demands total devotion from his partner, and Gemini is unable to give it. Gemini prefers change and Taurus needs stability. Their married life is usually unstable.';
  const TABS = ['Friendship', 'Destiny', 'Romance'];

  const AnimatedTabs = () => {
    const HandleTabs = tab => {
      setTabs(tab);
      const newOffset = (() => {
        switch (tab) {
          case 'Friendship':
            return -TAB_WIDTH;
          case 'Destiny':
            return 0;
          case 'Romance':
            return TAB_WIDTH;
          default:
            return -TAB_WIDTH;
        }
      })();
      offset.value = withTiming(newOffset);
    };

    const HandleTabView = tab => {
      switch (tab) {
        case 'Friendship':
          return (
            <View
              style={{
                height: height / 2,
                width: width,
                padding: SPACING * 3,
              }}>
              <Text style={styles.traitsText}>
                You may have had trouble communicating in early life. Perhaps
                you suffer from feelings of inadequacy. You overcome these
                feelings through sheer necessity, for you have determination in
                achieving your goals and purposes in life. You will have strong
                likes and dislikes, and can be very reserved and dignified,
                though when vexed you are apt to be sharp and sarcastic if not
                actually cruel. Avoid pride, cultivate sympathy and endeavour to
                see things from others standpoints as well as your own.
              </Text>
              {/* <PlanetTables /> */}
            </View>
          );
        case 'Destiny':
          return (
            <View
              style={{
                height: height / 2,
                width: width,
                padding: SPACING * 3,
              }}>
              <Text style={styles.traitsText}>
                for you have determination in achieving your goals and purposes
                in life. You will have strong likes and dislikes, and can be
                very reserved and dignified, though when vexed you are apt to be
                sharp and sarcastic if not actually cruel. Avoid pride,
                cultivate sympathy and endeavour to see things from others
                standpoints as well as your own.
              </Text>
              {/* <HouseTables /> */}
            </View>
          );
        case 'Romance':
          return (
            <View
              style={{
                height: height / 2,
                width: width,
                padding: SPACING * 3,
              }}>
              <Text style={styles.traitsText}>
                You may have had trouble communicating in early life. Perhaps
                you suffer from feelings of inadequacy. You overcome these
                feelings through sheer necessity, for you have determination in
                achieving your goals and purposes in life. You will have strong
                likes and dislikes, and can be very reserved and dignified,
                though when vexed you are apt to be sharp and sarcastic if not
                actually cruel. Avoid pride, cultivate sympathy and endeavour to
                see things from others standpoints as well as your own.
              </Text>
              <Text style={styles.traitsText}>
                You will have strong likes and dislikes, and can be very
                reserved and dignified, though when vexed you are apt to be
                sharp and sarcastic if not actually cruel. Avoid pride,
                cultivate sympathy and endeavour to see things from others
                standpoints as well as your own.
              </Text>
              <View style={styles.TabTextView}>
                <Text style={styles.SemiBoldText1}>Spiritual lesson </Text>
                <Text style={styles.normalText1}>
                  : Sociability (lighten up)
                </Text>
              </View>
              <View style={styles.TabTextView}>
                <Text style={styles.SemiBoldText1}>key quality</Text>
                <Text style={styles.normalText1}>: We think</Text>
              </View>
            </View>
          );
        default:
          return (
            <View
              style={{
                backgroundColor: 'red',
                height: height / 2,
                width: width,
              }}></View>
          );
      }
    };
    const animatedStyles = useAnimatedStyle(() => ({
      transform: [{translateX: offset.value}],
    }));
    return (
      <View style={styles.tabsView}>
        <View style={styles.tabsView2}>
          {TABS.map((tab, i) => {
            return (
              <Pressable
                key={tab}
                style={i !== TABS.length - 1 ? styles.tab : styles.tab}
                onPress={() => {
                  HandleTabs(tab);
                }}>
                <Text
                  style={[
                    styles.TextAlign,
                    styles.textSemiBold,
                    {color: Color.shadedWhite},
                  ]}>
                  {tab}
                </Text>
              </Pressable>
            );
          })}
        </View>
        {/* <Animated.View style={styles.animatedBorderbg}> */}
        <Animated.View style={[styles.animatedBorder, animatedStyles]} />
        {/* </Animated.View> */}

        {HandleTabView(Tabs)}
      </View>
    );
  };
  return (
    <ImageBackground
      source={require('../../Assets/Compatibilitydetail/Component_711.png')}
      resizeMode="cover"
      style={styles.imageBgView}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <View
          style={{
            marginTop: dgl * 0.06,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: dgl * 0.1,
                width: dgl * 0.1,
                backgroundColor: Color.whiteOpacity,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: dgl * 0.009,
              }}>
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

            <View style={styles.compatibilityView}>
              <Text style={styles.compatibilityText}>Capricus</Text>
              <Text style={styles.compatibilitySubText}>Mar 22 - Apr 19</Text>
            </View>
          </View>
          <View style={{}}>
            <Text style={[styles.TextWhite, {padding: 20}]}>+</Text>
          </View>

          <View style={{alignItems: 'center'}}>
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
            <View style={styles.compatibilityView}>
              <Text style={styles.compatibilityText}>Capricus</Text>
              <Text style={styles.compatibilitySubText}>Mar 22 - Apr 19</Text>
            </View>
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
          <Text style={styles.textMargin}>{dummy}</Text>
          <LinearGradient
            colors={[Color.regularViolet, Color.primaryBlue]}
            style={styles.compatibilityView2}>
            <AnimatedTabs />
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CompatibilityDetails;
