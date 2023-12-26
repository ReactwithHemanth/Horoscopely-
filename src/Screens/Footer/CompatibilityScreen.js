import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles, {SPACING} from '../../Styles/styles';
import {screenDiagonal, width} from '../../Utils/helperFunctions';
import {data} from '../../Utils/Dummy';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../Utils/Color';
import {CompatibilityArrow} from '../../Components/SvgComponent';
const dgl = screenDiagonal();
const CompatibilityScreen = ({navigation}) => {
  /**
   * TODO:
   * Remove inline-styles
   * API integration
   * save user Zodiac index
   * calculation based on compatibility
   * add animation
   * refactoring of compatibility screens
   * NOTE:
   * users zodiac index need to be collected on async storage
   *
   */
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [index, setindex] = useState(0);
  const [Myindex, setMyindex] = useState(3);
  useEffect(() => {
    handleScrollIndex();
  }, [index, Myindex, navigation]);

  const handleScrollIndex = () => {
    ref.current?.scrollToIndex({
      index: index == 8 ? 0 : index,
      animated: true,
      viewOffset: 0.5 || 1 ? 0 : SPACING,
    });
  };

  return (
    <ImageBackground
      source={require('../../Assets/Compatibility/ComponentBG3.png')}
      resizeMode="cover"
      style={styles.imageBgView}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          ref={ref2}
          initialScrollIndex={index}
          style={{flexGrow: 0}}
          data={data}
          keyExtractor={item => item.key}
          contentContainerStyle={{paddingLeft: SPACING}}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index: fIndex}) => {
            return (
              <View style={styles.zodiacBox}>
                <View
                  style={[
                    styles.compatibilityContainer,
                    {
                      backgroundColor:
                        Myindex === fIndex
                          ? Color.lightBlue
                          : Color.regularViolet,
                    },
                  ]}>
                  <Image
                    source={require('../../Assets/Compatibility/aries.png')}
                    style={styles.zodiaImageView}
                    resizeMode="center"
                  />
                  {Myindex === fIndex && (
                    <View style={styles.zodiaActive}>
                      <Text style={{color: Color.white}}>You</Text>
                    </View>
                  )}
                  {/* <DearSvg width={dgl * 0.1} height={dgl * 0.1} /> */}
                </View>
              </View>
            );
          }}
        />
        <FlatList
          ref={ref}
          initialScrollIndex={index}
          style={{flexGrow: 0}}
          data={data}
          keyExtractor={item => item.key}
          contentContainerStyle={{paddingLeft: SPACING}}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index: fIndex}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (index == 0) {
                    setindex(index + 1);
                  }
                  if (data.length - 1) {
                    setindex(index + 1);
                  }
                }}
                style={styles.flatListView1}>
                <View
                  style={[
                    styles.zodiaNormal,
                    {
                      backgroundColor:
                        index === fIndex
                          ? Color.lightBlue
                          : Color.regularViolet,
                    },
                  ]}>
                  <Image
                    source={require('../../Assets/Compatibility/aries.png')}
                    style={styles.zodiaImageView2}
                  />
                  {/* <DearSvg width={dgl * 0.1} height={dgl * 0.1} /> */}
                </View>
              </TouchableOpacity>
            );
          }}
          // getItemLayout={getItemLayoutfn}
        />
        <View style={styles.arrowStyle}>
          <View style={{transform: [{rotate: '180deg'}]}}>
            <TouchableOpacity
              onPress={() => {
                if (index === 0) return;

                setindex(index - 1);
              }}>
              <CompatibilityArrow />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (index === data.length - 1) {
                  return;
                }

                setindex(index + 1);
              }}>
              <CompatibilityArrow />
            </TouchableOpacity>
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
