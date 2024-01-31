import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles, {SPACING} from '../../Styles/styles';
import {height, screenDiagonal, width} from '../../Utils/helperFunctions';
import {data} from '../../Utils/Dummy';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../Utils/Color';
import {CompatibilityArrow} from '../../Components/SvgComponent';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {MainContext} from '../../Confg/Context';
const dgl = screenDiagonal();
const CompatibilityScreen = ({navigation}) => {
  /**
   * TODO:
   * save user Zodiac index
   * calculation based on compatibility
   * add animation
   * refactoring of compatibility screens
   * NOTE:
   * users zodiac index need to be collected on async storage
   *
   */
  const ref = useRef(null);
  const [index, setindex] = useState(0);
  const [Myindex, setMyindex] = useState(3);
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);
  useEffect(() => {
    handleScrollIndex();
  }, [index, Myindex, navigation]);
  useFocusEffect(
    useCallback(() => {
      setFooterVisible(true);
    }, []),
  );
  const handleScrollIndex = () => {
    ref.current?.scrollToIndex({
      index: index == 8 ? 0 : index,
      animated: true,
      viewOffset: 0.5 || 1 ? 0 : SPACING,
    });
  };
  const data = [
    {id: 1, img: require('../../Assets/Compatibility/aries.png')},
    {id: 1, img: require('../../Assets/Compatibility/xsscs2.png')},
    {id: 1, img: require('../../Assets/Compatibility/aries.png')},
    {id: 1, img: require('../../Assets/Compatibility/aries.png')},
  ];
  return (
    <ImageBackground
      source={require('../../Assets/Compatibility/ComponentBG3.png')}
      resizeMode="cover"
      style={styles.imageBgViewCustom}>
      <SafeAreaView style={styles.safeArea}>
        <Carousel
          loop
          width={width}
          height={dgl * 0.2}
          autoPlay={false}
          data={data}
          scrollAnimationDuration={1000}
          style={{alignSelf: 'center'}}
          onSnapToItem={index => setMyindex(index)}
          renderItem={({item, index}) => (
            <View style={{alignItems: 'center'}}>
              <View style={styles.zodiacBox}>
                <LinearGradient
                  colors={[Color.lightBlue, Color.primaryBlue]}
                  style={[
                    styles.compatibilityContainer,
                    {
                      backgroundColor:
                        Myindex === index
                          ? Color.lightBlue
                          : Color.regularViolet,
                    },
                  ]}>
                  <Image
                    source={item.img}
                    style={styles.zodiaImageView}
                    resizeMode="center"
                  />
                  {Myindex === index && (
                    <View style={styles.zodiaActive}>
                      <Text style={{color: Color.white}}>You</Text>
                    </View>
                  )}
                </LinearGradient>
              </View>
              <View style={styles.compatibilityView}>
                <Text style={styles.compatibilityText}>Capricus</Text>
                <Text style={styles.compatibilitySubText}>Mar 22 - Apr 19</Text>
              </View>
            </View>
          )}
        />

        <Carousel
          loop
          width={width}
          height={dgl * 0.2}
          autoPlay={false}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          onSnapToItem={index => setindex(index)}
          style={{alignSelf: 'center'}}
          renderItem={({index: fIndex}) => (
            <View style={{alignItems: 'center'}}>
              <View style={styles.zodiacBox}>
                <LinearGradient
                  colors={[Color.lightBlue, Color.primaryBlue]}
                  style={[
                    styles.compatibilityContainer,
                    {
                      backgroundColor:
                        index === fIndex
                          ? Color.lightBlue
                          : Color.regularViolet,
                    },
                  ]}>
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
          )}
        />

        <View style={styles.arrowStyle}>
          <View style={{transform: [{rotate: '180deg'}]}}>
            <CompatibilityArrow />
          </View>
          <View>
            <CompatibilityArrow />
          </View>
        </View>
      </SafeAreaView>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CompatibilityDetails')}
          style={styles.compatibilityButon}>
          <Text>Check Compatibility</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CompatibilityScreen;
