import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ImageBackgroundView} from '../../Components/CustomComponents';
import styles from '../../Styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {height, screenDiagonal, width} from '../../Utils/helperFunctions';
import {Color} from '../../Utils/Color';
import LinearGradient from 'react-native-linear-gradient';
import {
  ArrowLeft,
  CalenderSvg,
  DearSvg,
  SunSvg,
} from '../../Components/SvgComponent';
import CircularProgress from 'react-native-circular-progress-indicator';
const dgl = screenDiagonal();

const ReportDetails = () => {
  const SvgBox = props => {
    const {backgroundColor, iconColor, title, icon, onPress} = props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.BoxView, {backgroundColor: backgroundColor}]}>
        <View style={{flex: 1}}>
          <Text style={{color: iconColor}}>{title}</Text>
        </View>
        <View style={styles.SvgView}>
          {icon}
          <View style={{transform: [{rotate: '270deg'}]}}>
            <ArrowLeft fill={iconColor} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackgroundView disableScroll={false}>
      <SafeAreaView>
        <ImageBackground
          source={require('../../Assets/ManageInterest/Component.png')}
          style={styles.ReportDetails}>
          <View style={styles.reportAlign}>
            <Text style={styles.ReportHeading}>Horoscope</Text>
          </View>
          <View style={styles.reportDdetailContainer}>
            <View style={styles.reportContainerStyle}>
              <View style={styles.alignView}>
                <CircularProgress
                  value={85}
                  radius={dgl * 0.04}
                  duration={2000}
                  activeStrokeWidth={dgl * 0.01}
                  inActiveStrokeWidth={dgl * 0.008}
                  progressValueColor={Color.black}
                  progressValueStyle={{fontWeight: '400'}}
                  valueSuffix={'%'}
                  maxValue={100}
                  activeStrokeColor={Color.primaryBlue}
                />
                <Text style={styles.textMarginBlack}> Love</Text>
              </View>
              <View style={styles.alignView}>
                <CircularProgress
                  value={67}
                  radius={dgl * 0.04}
                  duration={2000}
                  activeStrokeWidth={dgl * 0.01}
                  inActiveStrokeWidth={dgl * 0.008}
                  valueSuffix={'%'}
                  progressValueStyle={{fontWeight: '400'}}
                  progressValueColor={Color.black}
                  activeStrokeColor={Color.primaryBlue}
                  maxValue={100}
                />
                <Text style={styles.textMarginBlack}> Career</Text>
              </View>
              <View style={styles.alignView}>
                <CircularProgress
                  value={49}
                  radius={dgl * 0.04}
                  duration={2000}
                  activeStrokeWidth={dgl * 0.01}
                  inActiveStrokeWidth={dgl * 0.008}
                  valueSuffix={'%'}
                  progressValueStyle={{fontWeight: '400'}}
                  progressValueColor={Color.black}
                  activeStrokeColor={Color.primaryBlue}
                  maxValue={100}
                  titleColor={'white'}
                  titleStyle={{fontWeight: '100'}}
                />
                <Text style={styles.textMarginBlack}> Health</Text>
              </View>
            </View>
            <ScrollView style={styles.ReportDetailsDesc}>
              <Text style={styles.SubTitileDark}>
                Adopting a healthy lifestyle is on the cards and will lead you
                to total fitness. Chance for setting out on a pilgrimage may
                materialise. High rentals may discourage some from shifting
                residence to someplace decent. A outstanding payment is likely
                to be received soon and add to your wealth. Your eye for detail
                and willingness to put in extra hours at work will be richly
                rewarded on the professional front.
              </Text>
              <Text style={styles.SubTitileDark}>
                Chance for setting out on a pilgrimage may materialise. High
                rentals may discourage some from shifting residence to someplace
                decent. A outstanding payment is likely to be received soon and
                add to your wealth. Your eye for detail and willingness to put
                in extra hours at work will be richly rewarded on the
                professional front.
              </Text>
            </ScrollView>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ImageBackgroundView>
  );
};

export default ReportDetails;
