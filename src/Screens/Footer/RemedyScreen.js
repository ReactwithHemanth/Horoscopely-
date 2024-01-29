import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles, {SPACING} from '../../Styles/styles';
import {ShareSvg} from '../../Components/SvgComponent';
import {Color} from '../../Utils/Color';
import {screenDiagonal} from '../../Utils/helperFunctions';
import Share from 'react-native-share';

const dgl = screenDiagonal();

const RemedyScreen = () => {
  const HandleShare = () => {
    let randonString = 'KJSKFDNSKJ';
    Share.open({url: 'https://horoscope.ly' + randonString})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const LinearBox = props => {
    const {Color1, Color2, Title, Description} = props;
    return (
      <LinearGradient colors={[Color1, Color2]} style={styles.MainBox}>
        <View style={styles.ColoumBox}>
          <View style={styles.rowBox}>
            <Text style={styles.BoxTitle}>{Title}</Text>
            <TouchableOpacity onPress={HandleShare}>
              <ShareSvg fill={Color.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.rowBox2}>
            <Text style={styles.SubTitileText}>{Description}</Text>
          </View>
        </View>
      </LinearGradient>
    );
  };

  return (
    <ImageBackground
      source={require('../../Assets/Home/Component1.png')}
      style={styles.imageBgView}>
      <View>
        <LinearBox
          Color1={'#14C17B'}
          Color2={'#30D2C2'}
          Title={'Health'}
          Description="Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
                malesuada ullamcorper"
        />
        <LinearBox
          Color1={'#446FFE'}
          Color2={'#0ACDFF'}
          Title={'Careers'}
          Description="Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
                malesuada ullamcorper"
        />
        <LinearBox
          Color1={'#FF6BBA'}
          Color2={'#FE3D91'}
          Title={'Love'}
          Description="Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
                malesuada ullamcorper"
        />
      </View>
    </ImageBackground>
  );
};

export default RemedyScreen;
