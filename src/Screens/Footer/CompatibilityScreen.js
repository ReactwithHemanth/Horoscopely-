import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../../Styles/styles';

const CompatibilityScreen = () => {
  return (
    <ImageBackground
      source={require('../../Assets/Home/Component1.png')}
      style={styles.imageBgView}>
      {/* <LinearWidget />
      <View style={{flex: 1, width: dgl * 0.4}}>
        <View style={{alignItems: 'flex-start', padding: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: Color.white}}>
            Your Horoscope of the Day
          </Text>
          <View style={styles.BoxView2}>
            <View style={[styles.LinearLineAlign]}>
              <View style={styles.Cmargin}>
                <ShareSvg fill={Color.white} />
              </View>
              <View style={styles.Cmargin}>
                <CalenderSvg fill={Color.white} />
              </View>
            </View>
            <View style={styles.filterStyle}>
              <Text
                style={{
                  color: '#fff',
                }}>
                Today
              </Text>
              <ArrowLeft fill={'#fff'} />
            </View>
          </View>
          <View style={{padding: 10}}>
            <Text style={{color: Color.white}}>{dummies}</Text>
          </View>
        </View>
      </View> */}
      {/* <Text style={styles.text1}>Welcome {user?.email}</Text>
      <Text onPress={handleSignOut} style={styles.text1}>
        SignOut {user?.email}
      </Text> */}
    </ImageBackground>
  );
};

export default CompatibilityScreen;
