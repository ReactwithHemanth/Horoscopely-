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
import styles, {_spacing} from '../../Styles/styles';
import {screenDiagonal, width} from '../../Utils/helperFunctions';
import {data} from '../../Utils/Dummy';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DearSvg} from '../../Components/SvgComponent';
import {Color} from '../../Utils/Color';
const dgl = screenDiagonal();
const CompatibilityScreen = ({navigation}) => {
  const IMAGE_WIDTH = width * (1 / 2.5);
  const cardWidth = width / 2 - 20;
  // TODO :
  // mail id phone number screens

  // gap between each cards;
  const gap = 16;

  const halfGap = gap / 2;

  const ref = useRef();
  const ref2 = useRef();
  const [index, setindex] = useState(0);
  const [index2, setindex2] = useState(0);
  useEffect(() => {
    ref.current?.scrollToIndex({
      index: index,
      animated: true,
      viewOffset: 0.5 || 1 ? 0 : _spacing,
    });

    // handleGetStarted('false');
  }, [index, index2, navigation]);
  useEffect(() => {
    ref2.current?.scrollToIndex({
      index: index2,
      animated: true,
      viewOffset: 0.5 || 1 ? 0 : _spacing,
    });

    // handleGetStarted('false');
  }, [index2, navigation]);

  const RenderItem = ({item, fIndex}) => {
    console.log(item, fIndex, 'klh', index);
    return (
      <TouchableOpacity
        onPress={() => {
          if (index >= 0) {
            setindex(index + 1);
          }
          // if (index === item.length - 1) {
          //   setindex(index - 1);
          // }
        }}
        style={{
          height: dgl * 0.09,
          width: dgl * 0.09,
          padding: dgl * 0.03,
          marginHorizontal: width / 3,
          backgroundColor: Color.whiteOpacity,
          justifyContent: 'center',
          borderRadius: dgl * 0.009,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: dgl * 0.08,
            width: dgl * 0.08,
            // padding: dgl * 0.04,
            justifyContent: 'center',
            borderRadius: dgl * 0.009,
            backgroundColor:
              index === fIndex ? Color.lightBlue : Color.regularViolet,
            // alignItems: 'center',
          }}>
          <Image
            source={require('../../Assets/Compatibility/aries.png')}
            style={{width: dgl * 0.07, height: dgl * 0.07}}
          />
          {/* <DearSvg width={dgl * 0.1} height={dgl * 0.1} /> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('../../Assets/Compatibility/ComponentBG3.png')}
      resizeMode="cover"
      style={styles.imageBgView}>
      <SafeAreaView
        style={{
          flex: 2.6,
          justifyContent: 'space-around',
          // backgroundColor: 'cyan',
        }}>
        <FlatList
          ref={ref}
          decelerationRate={0}
          snapToAlignment={'center'}
          initialScrollIndex={index}
          style={{flexGrow: 0}}
          data={data}
          keyExtractor={item => item.key}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index: fIndex}) => {
            return <RenderItem item={item} fIndex={fIndex} />;
          }}
        />
        <FlatList
          ref={ref2}
          initialScrollIndex={index2}
          style={{flexGrow: 0}}
          data={data}
          keyExtractor={item => item.key}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index: fIndex}) => {
            return <RenderItem item={item} fIndex={fIndex} />;
          }}
        />
      </SafeAreaView>
      <View style={{flex: 1}}>
        <View
          style={{
            padding: dgl * 0.02,
            backgroundColor: Color.white,
            borderRadius: dgl * 0.05,
          }}>
          <Text>Check Compatibility</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CompatibilityScreen;
