import {Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/styles';

export const LinearCommonButton = props => {
  return (
    <LinearGradient
      colors={['#32A0EE', '#9713C6']}
      start={{x: 0, y: 0}}
      style={styles.LinearBotton}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.TextWhite}>{props.title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
