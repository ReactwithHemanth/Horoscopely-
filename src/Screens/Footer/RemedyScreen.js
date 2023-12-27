import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageBackgroundView} from '../../Components/CustomComponents';
import LinearGradient from 'react-native-linear-gradient';
import styles, {SPACING} from '../../Styles/styles';
import {ShareSvg} from '../../Components/SvgComponent';
import {Color} from '../../Utils/Color';
import {screenDiagonal} from '../../Utils/helperFunctions';
const dgl = screenDiagonal();
const RemedyScreen = () => {
  const LinearBox = props => {
    const {Color1, Color2, Title, Description} = props;
    return (
      <LinearGradient colors={[Color1, Color2]} style={styles1.MainBox}>
        <View style={styles1.ColoumBox}>
          <View style={styles1.rowBox}>
            <Text style={styles1.BoxTitle}>{Title}</Text>
            <ShareSvg fill={Color.white} />
          </View>
          <View style={styles1.rowBox2}>
            <Text style={styles1.SubTitileText}>{Description}</Text>
          </View>
        </View>
      </LinearGradient>
    );
  };
  return (
    <ImageBackground
      source={require('../../Assets/Home/Component1.png')}
      style={styles1.imageBgView}>
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

const styles1 = StyleSheet.create({
  imageBgView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainBox: {
    // flexDirection: 'row',
    backgroundColor: Color.whiteOpacity,
    borderRadius: SPACING,
    margin: SPACING,
  },
  rowBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Color.white,
    // width: dgl * 0.38,
  },
  rowBox2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING,

    // width: dgl * 0.38,
  },
  SubTitileText: {
    fontSize: dgl * 0.015,
    paddingLeft: SPACING,
    color: Color.grey,
  },
  ColoumBox: {
    margin: SPACING,
    width: dgl * 0.38,
    // flexDirection: 'column',
  },
  BoxTitle: {
    fontSize: 18,
    paddingLeft: SPACING,
    color: Color.shadedWhite,
    fontWeight: '700',
  },
  SubTitileText: {
    fontSize: dgl * 0.018,
    padding: SPACING,
    color: Color.grey,
  },
});
