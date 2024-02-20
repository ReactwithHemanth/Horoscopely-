import {Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {ArrowLeft} from '../Components/SvgComponent';
import styles from '../Styles/styles';
import {Color} from '../Utils/Color';
import {FilterDate} from '../Utils/Dummy';

const FilterAnimation = () => {
  const animheight = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [SelectFilter, setSelectFilter] = useState('Today');
  const [Toggle, setToggle] = useState(false);

  const TouchableAnimation = Animated.createAnimatedComponent(TouchableOpacity);
  useEffect(() => {
    animheight.value = withSpring(40);
  }, []);
  const handleDropDown = useCallback(() => {
    setToggle(!Toggle);
    animheight.value = withSpring(Toggle ? 40 : 100);
    opacity.value = withTiming(Toggle ? 0 : 1, {duration: 500});
  }, [Toggle]);

  const dropDownAnimated = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  return (
    <Animated.View style={[styles.filterStyle, {height: animheight}]}>
      <TouchableOpacity style={styles.row} onPress={() => handleDropDown()}>
        <Text style={[styles.filterTextStyle, {color: Color.darkViolet}]}>
          {SelectFilter}
        </Text>
        <View style={{transform: [{rotate: Toggle ? '180deg' : '0deg'}]}}>
          <ArrowLeft fill={'#fff'} />
        </View>
      </TouchableOpacity>
      {FilterDate.filter(item => item !== SelectFilter).map(value => (
        <TouchableAnimation
          key={value}
          style={[styles.row, dropDownAnimated]}
          onPress={() => {
            setSelectFilter(value);
            handleDropDown();
          }}>
          <Text style={styles.filterTextStyle2}>{value}</Text>
        </TouchableAnimation>
      ))}
    </Animated.View>
  );
};

export default FilterAnimation;
