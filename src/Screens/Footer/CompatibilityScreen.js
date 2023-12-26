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

    // ref2.current?.scrollToIndex({
    //   index: Myindex,
    //   animated: true,
    //   viewOffset: 0.5 || 1 ? 0 : SPACING,
    // });
  };
  // const getItemLayoutfn = (data, index) => ({
  //   length: dgl * 0.1, // Replace ITEM_HEIGHT with the actual height of your list items
  //   offset: dgl * 0.1 * index,
  //   index,
  // });
  return (
    <ImageBackground
      source={require('../../Assets/Compatibility/ComponentBG3.png')}
      resizeMode="cover"
      style={styles.imageBgView}>
      <SafeAreaView
        style={{
          flex: 2.6,
          justifyContent: 'space-around',
        }}>
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
                  style={{
                    height: dgl * 0.09,
                    width: dgl * 0.09,
                    justifyContent: 'center',
                    borderRadius: dgl * 0.009,
                    backgroundColor:
                      Myindex === fIndex
                        ? Color.lightBlue
                        : Color.regularViolet,
                  }}>
                  <Image
                    source={require('../../Assets/Compatibility/aries.png')}
                    style={{
                      width: dgl * 0.06,
                      height: dgl * 0.06,
                      alignSelf: 'center',
                    }}
                    resizeMode="center"
                  />
                  {Myindex === fIndex && (
                    <View
                      style={{
                        backgroundColor: '#6F4ED0',
                        // alignItems: 'center',
                        paddingHorizontal: 8,
                        borderRadius: 10,
                        marginBottom: 5,
                        borderTopWidth: StyleSheet.hairlineWidth,
                        borderColor: Color.shadedWhite,
                        alignSelf: 'center',
                      }}>
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
                style={{
                  height: dgl * 0.1,
                  width: dgl * 0.1,
                  padding: dgl * 0.03,
                  marginHorizontal: width / 3,
                  backgroundColor: Color.whiteOpacity,
                  justifyContent: 'center',
                  borderRadius: dgl * 0.009,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: dgl * 0.09,
                    width: dgl * 0.09,
                    justifyContent: 'center',
                    borderRadius: dgl * 0.009,
                    backgroundColor:
                      index === fIndex ? Color.lightBlue : Color.regularViolet,
                  }}>
                  <Image
                    source={require('../../Assets/Compatibility/aries.png')}
                    style={{width: dgl * 0.07, height: dgl * 0.07}}
                  />
                  {/* <DearSvg width={dgl * 0.1} height={dgl * 0.1} /> */}
                </View>
              </TouchableOpacity>
            );
          }}
          // getItemLayout={getItemLayoutfn}
        />
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            width: width,
            // backgroundColor: 'red',
            justifyContent: 'space-between',
            paddingHorizontal: dgl * 0.08,
            alignItems: 'center',
            top: dgl * 0.35,
          }}>
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
          style={{
            padding: dgl * 0.02,
            backgroundColor: Color.white,
            borderRadius: dgl * 0.05,
          }}>
          <Text>Check Compatibility</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CompatibilityScreen;
