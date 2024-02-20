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
import {RnGet} from '../../hooks/RnstoreHook';
import {getZodiac} from '../../Utils/zodiac';
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
  const [userZoddiac, setuserZoddiac] = useState();
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);
  useEffect(() => {
    handleScrollIndex();
    checkZodiaSign();
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
    {
      id: 0,
      img: require('../../Assets/Compatibility/aries.png'),
      zodiac: 'Aries',
    },
    {
      id: 1,
      img: require('../../Assets/Compatibility/xsscs2.png'),
      zodiac: 'Taurus',
    },
    {
      id: 2,
      img: require('../../Assets/Compatibility/aries.png'),
      zodiac: 'Gemini',
    },
    {
      id: 3,
      img: require('../../Assets/Compatibility/aries.png'),
      zodiac: 'Cancer',
    },
    {
      id: 4,
      img: require('../../Assets/Compatibility/aries.png'),
      zodiac: 'Leo',
    },
    {
      id: 1,
      img: require('../../Assets/Compatibility/aries.png'),
      zodiac: 'Virgo',
    },
    {
      id: 5,
      img: require('../../Assets/Compatibility/aries.png'),
      zodiac: 'Libra',
    },
    {
      id: 6,
      img: require('../../Assets/Compatibility/aries.png'),
      zodiac: 'Scorpio',
    },
    {
      id: 7,
      img: require('../../Assets/Compatibility/aries.png'),
      zodiac: 'Sagittarius',
    },
    {
      id: 8,
      img: require('../../Assets/Compatibility/aries.png'),
      zodiac: 'Capricorn',
    },
    {
      id: 9,
      img: require('../../Assets/Compatibility/aries.png'),
      zodiac: 'Aquarius',
    },
    {
      id: 10,
      img: require('../../Assets/Compatibility/aries.png'),
      zodiac: 'Pisces',
    },
  ];
  const checkZodiaSign = async () => {
    const user = await RnGet('userData');
    const zodiac = getZodiac(user?.DOB);
    setuserZoddiac(zodiac);
  };
  const defaultIndex = data.filter((item, idx) => {
    userZoddiac == item.zodiac && item.id;
  });

  return (
    <ImageBackground
      source={require('../../Assets/Compatibility/ComponentBG3.png')}
      resizeMode="cover"
      style={styles.imageBgViewCustom}>
      <SafeAreaView style={styles.safeArea}>
        <Carousel
          // loop
          width={width / 1.1}
          height={width / 2}
          // autoPlay={true}
          data={data}
          maxScrollDistancePerSwipe={500}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 150,
            parallaxAdjacentItemScale: 0.7,
          }}
          scrollAnimationDuration={1000}
          onSnapToItem={index => setMyindex(index)}
          renderItem={({item, index}) => (
            <View
              style={{
                flex: 0.5,
                aspectRatio: 1,
                marginLeft: dgl * 0.15,
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View style={{flex: 1, alignItems: 'center'}}>
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
                    {userZoddiac == item.zodiac && (
                      <View style={styles.zodiaActive}>
                        <Text style={{color: Color.white}}>You</Text>
                      </View>
                    )}
                  </LinearGradient>
                </View>
                <View style={styles.compatibilityView}>
                  <Text style={styles.compatibilityText}>{item.zodiac}</Text>
                  <Text style={styles.compatibilitySubText}>
                    Mar 22 - Apr 19
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
        <Carousel
          loop
          width={width / 1.1}
          height={dgl * 0.22}
          autoPlay={false}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 150,
            parallaxAdjacentItemScale: 0.7,
          }}
          onSnapToItem={index => setindex(index)}
          style={{alignSelf: 'center', backgroundColor: 'red'}}
          renderItem={({index: fIndex}) => (
            <View
              style={{
                flex: 0.5,
                aspectRatio: 1,
                marginLeft: dgl * 0.15,
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View style={{flex: 1, alignItems: 'center'}}>
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
                  <Text style={styles.compatibilitySubText}>
                    Mar 22 - Apr 19
                  </Text>
                </View>
              </View>
            </View>
          )}
        />

        {/* <View style={styles.arrowStyle}>
          <View style={{transform: [{rotate: '180deg'}]}}>
            <CompatibilityArrow />
          </View>
          <View>
            <CompatibilityArrow />
          </View>
        </View> */}
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
