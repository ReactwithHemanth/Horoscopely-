import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {screenDiagonal, width} from '../../Utils/helperFunctions';
import {Color} from '../../Utils/Color';
import styles from '../../Styles/styles';
import {
  ArrowLeft,
  CalenderSvg,
  CloseSvg,
  ShareSvg,
} from '../../Components/SvgComponent';
import LinearGradient from 'react-native-linear-gradient';
const dgl = screenDiagonal();

const ViewReports = ({navigation}) => {
  const Customheader = () => {
    return (
      <View style={styles.reportHeader}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View>
            <Text style={styles.reportHeaderText}>Selected Date Range</Text>
            <Text>31 Dec 2020 - 05 Feb 2021</Text>
          </View>
          <View style={styles.reportHeaderAlign}>
            <CloseSvg />
          </View>

          <CalenderSvg fill={Color.primaryBlue} />
        </View>
      </View>
    );
  };
  const LinearBox = props => {
    const {Color1, Color2, Title, Description} = props;
    return (
      <LinearGradient
        colors={[Color1, Color2]}
        start={{x: 0, y: 1.5}}
        end={{x: 1, y: 1.5}}
        style={styles.MainBox}>
        <View style={styles.ColoumBox}>
          <View style={styles.rowBoxHeadline}>
            <Text style={styles.BoxTitle}>{Title}</Text>
            <View>
              <Text style={styles.BoxTitle}>13 Jan 2021</Text>
            </View>
          </View>
          <View style={styles.rowBox2}>
            <Text style={styles.SubDescription3}>{Description}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportDetails')}
            style={styles.reportViewMoreButton}>
            <Text style={styles.TextBlue}>View Details</Text>
            <View style={{transform: [{rotate: '270deg'}]}}>
              <ArrowLeft
                fill={Color.primaryBlue}
                height={dgl * 0.01}
                width={dgl * 0.01}
              />
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Color.shadedWhite}}>
      <Customheader />
      <LinearBox
        Color1={'#446FFE'}
        Color2={'#8925AEBF'}
        Title={'Horoscope'}
        Description="Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
                malesuada ullamcorper Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
                malesuada ullamcorper"
      />
    </View>
  );
};

export default ViewReports;
