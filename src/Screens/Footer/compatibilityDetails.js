import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../../Styles/styles';

const CompatibilityDetails = () => {
  return (
    <ImageBackground
      source={require('../../Assets/Compatibilitydetail/Component_711.png')}
      resizeMode="cover"
      style={styles.imageBgView}></ImageBackground>
  );
};

export default CompatibilityDetails;
