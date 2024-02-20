import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import styles from '../Styles/styles';

const ANGLE = 10;
const TIME = 100;
const EASING = Easing.elastic(1.5);

export default function ShakeAnimation(props) {
  const {isEnabled} = props;
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: rotation.value}],
  }));

  const handlePress = () => {
    // highlight-next-line
    // rotation.value = withSequence(
    // deviate left to start from -ANGLE
    rotation.value = withSpring(rotation.value + 50);
    // highlight-next-line
  };

  return (
    <View>
      <Animated.View style={[styles1.container, animatedStyle]}>
        <Animated.Text style={styles.AttributeText}>
          Please provide your email
        </Animated.Text>
      </Animated.View>

      {/* <Button title="wobble" onPress={handlePress} /> */}
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginBottom: 30,
  },
});
