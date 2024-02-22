import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import {CloseSvg, MinusSvg} from '../../Components/SvgComponent';
import styles from '../../Styles/styles';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Color} from '../../Utils/Color';
import {FAQData} from '../../Utils/Dummy';

const FAQ = () => {
  const [selectedItem, setselectedItem] = useState(false);
  const opacity = useSharedValue(0);
  const animBG = useSharedValue(0);
  const RotateAnim = useSharedValue(0);

  const DropDownItem = props => {
    const {id, name, desc} = props.data;

    const backGroundAnimation = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          animBG.value,
          [0, 1],
          [Color.white, Color.shadedWhite],
        ),
      };
    });
    const AnimatedRotate = useAnimatedStyle(() => {
      return {
        transform: [
          {
            rotate: `${interpolate(
              id == selectedItem ? RotateAnim.value : 0,
              [0, 1],
              [90, 180],
              [0, 1],
            )}deg`,
          },
        ],
      };
    });
    const dropDownAnimated = useAnimatedStyle(() => ({
      opacity: opacity.value,
    }));
    const toggleItem = () => {
      opacity.value = withTiming(id == selectedItem ? 0 : 1, {duration: 500});
      animBG.value = withTiming(id == selectedItem ? 0 : 1 - animBG.value, {
        duration: 500,
      });
      RotateAnim.value = withSpring(
        id == selectedItem ? 0 : 1 - RotateAnim.value,
        {
          duration: 500,
        },
      );
    };

    return (
      <Animated.View
        key={name}
        style={[styles.FaqContainerStyle, backGroundAnimation]}>
        <TouchableOpacity
          style={[styles.dropdownStyle]}
          onPress={() => {
            setselectedItem(
              props?.active === selectedItem ? null : props?.active,
            );
            toggleItem();
          }}>
          <Text style={styles.textSemiBold}>{name}</Text>
          <Animated.View style={[AnimatedRotate]}>
            {id !== selectedItem && <CloseSvg fill={Color.primaryBlue} />}

            {id == selectedItem && <MinusSvg width={20} height={20} />}
          </Animated.View>
          {/* <Animated.View style={[AnimatedRotate, invertRotate]}>
            <MinusSvg width={20} height={20} />
          </Animated.View> */}
        </TouchableOpacity>

        <Animated.View style={[styles.dropdownStyle, dropDownAnimated]}>
          {id == selectedItem && (
            <Animated.Text style={[styles.subtextV2]}>{desc}</Animated.Text>
          )}
        </Animated.View>
      </Animated.View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={FAQData}
        renderItem={({item, index}) => (
          <DropDownItem data={item} active={index} />
        )}
      />
    </View>
  );
};

export default FAQ;
