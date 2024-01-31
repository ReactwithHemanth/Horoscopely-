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
import React, {useEffect, useRef, useState} from 'react';
import styles, {SPACING} from '../../Styles/styles';
import {height, screenDiagonal, width} from '../../Utils/helperFunctions';
import {Color} from '../../Utils/Color';
// import SimpleGradientProgressbarView from 'react-native-simple-gradient-progressbar-view';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {dummyText, traits} from '../../Utils/Dummy';
import LinearGradient from 'react-native-linear-gradient';
const dgl = screenDiagonal();

const CompatibilityDetails = () => {
  const [Tabs, setTabs] = useState('Friendship');
  const AnimWidth = useSharedValue(0);
  const TAB_WIDTH = 120;
  const offset = useSharedValue(-TAB_WIDTH);
  const [progress, setProgress] = useState(0);
  const AnimatedLinearView = Animated.createAnimatedComponent(LinearGradient);
  // let animation = useRef(Animated.Value(0));
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
    const animatedStyles = useAnimatedStyle(() => ({
      transform: [{translateX: offset.value}],
    }));
    const HandleTabView = tab => {
      switch (tab) {
        case 'Friendship':
          return (
            <View style={styles.tabView}>
              <Text style={styles.traitsText}>{dummyText}</Text>
            </View>
          );
        case 'Destiny':
          return (
            <View style={styles.tabView}>
              <Text style={styles.traitsText}>{dummyText}</Text>
            </View>
          );
        case 'Romance':
          return (
            <View style={styles.tabView}>
              <Text style={styles.traitsText}>{dummyText}</Text>
              <Text style={styles.traitsText}>{traits}</Text>
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
                height: height / 2,
                width: width,
              }}></View>
          );
      }
    };

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
        <Animated.View style={[styles.animatedBorder, animatedStyles]} />
        {HandleTabView(Tabs)}
      </View>
    );
  };
  const LinearProgressBar = props => {
    const {value} = props;
    useEffect(() => {
      progress(value);
    }, []);

    const progress = value => {
      AnimWidth.value = withSpring((value / 100) * 100);
    };
    return (
      <View
        style={{
          height: 10,
          width: dgl * 0.2,
          backgroundColor: Color.darkViolet,
          borderRadius: 10,
        }}>
        <AnimatedLinearView
          colors={[Color.lightViolet, Color.regularViolet]}
          start={{x: 0, y: 1.5}}
          end={{x: 1, y: 1.5}}
          style={[
            StyleSheet.absoluteFill,
            {backgroundColor: '#8BED4F', width: AnimWidth, borderRadius: 10},
          ]}
        />
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
        <View style={styles.compatiblityView4}>
          <View style={styles.align}>
            <View style={styles.compatiblityView3}>
              <LinearGradient
                colors={[Color.lightBlue, Color.primaryBlue]}
                style={styles.compatibilityContainer}>
                <Image
                  source={require('../../Assets/Compatibility/aries.png')}
                  style={styles.zodiaImageView}
                  resizeMode="center"
                />
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

          <View style={styles.align}>
            <LinearGradient
              colors={[Color.lightBlue, Color.primaryBlue]}
              style={[styles.compatibilityContainer]}>
              <Image
                source={require('../../Assets/Compatibility/aries.png')}
                style={styles.zodiaImageView}
                resizeMode="center"
              />
            </LinearGradient>
            <View style={styles.compatibilityView}>
              <Text style={styles.compatibilityText}>Capricus</Text>
              <Text style={styles.compatibilitySubText}>Mar 22 - Apr 19</Text>
            </View>
          </View>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <View style={[styles.rowBox, styles.alignItemStyle]}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: Color.shadedWhite,
              }}>
              Overall
            </Text>

            <LinearProgressBar value={80} />
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
