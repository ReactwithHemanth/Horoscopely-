import {
  FlatList,
  ImageBackground,
  SafeAreaView,
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
import {Remedy} from '../../Utils/Dummy';

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
      <LinearGradient
        colors={[Color1, Color2]}
        style={styles.MainBox}
        start={{x: 0, y: 1.5}}
        end={{x: 1, y: 1.5}}>
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
      <SafeAreaView>
        <FlatList
          data={Remedy}
          showsVerticalScrollIndicator={false}
          style={{margin: dgl * 0.01}}
          renderItem={({item, index}) => {
            return (
              <LinearBox
                Color1={item.grd?.Color1}
                Color2={item.grd?.Color2}
                Title={item.remedy}
                Description={item.desc}
              />
            );
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RemedyScreen;
