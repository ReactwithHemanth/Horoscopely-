import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useAuth} from '../../hooks/useAuth';
import {
  ArrowLeft,
  CalenderSvg,
  DearSvg,
  ShareSvg,
  SunSvg,
} from '../../Components/SvgComponent';
import {
  ErrorView,
  ImageBackgroundView,
  LoadingView,
  ShowSubscriptionAd,
} from '../../Components/CustomComponents';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgress from 'react-native-circular-progress-indicator';
import styles, {SPACING} from '../../Styles/styles';
import {Color} from '../../Utils/Color';
import {dummies} from '../../Utils/Dummy';
import {MainContext} from '../../Confg/Context';
import {useFocusEffect} from '@react-navigation/native';
import {RnGet} from '../../hooks/RnstoreHook';
import {FormateDate} from '../../Utils/helperFunctions';
import {FB_ID} from '@env';
const Home = ({navigation}) => {
  const user = useAuth();
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);

  useFocusEffect(React.useCallback(() => {}, []));
  const [loading, setLoading] = useState(false);
  const [Result, setResult] = useState([]);
  const [SelectFilter, setSelectFilter] = useState('Today');
  const duration = 2000;
  const ACTIVE_STROKE = 5;
  const INACTIVE_STROKE = 4;

  useEffect(() => {
    // set interval based in the logic of ads
    // const interval = setInterval(() => {
    //   navigation.navigate('subscriptionAd');
    // }, 7000);

    setFooterVisible(true);
    CheckLaunchedFirst();

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  if (loading) {
    return <LoadingView />;
  }
  // if (true) {
  //   return <SomeThingWentWrongView />;
  // }

  const CheckLaunchedFirst = async () => {
    const user = await RnGet('userData');
    if (user == undefined) {
      navigation.navigate('onBoarding');
    }
    setResult(user);
  };
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

  const LinearWidget = () => {
    return (
      <LinearGradient colors={['#32A0EE', '#9713C6']} style={styles.LinearView}>
        <View style={styles.LinearLineAlign}>
          <View>
            <Text style={styles.nameText}>Hello,{Result?.name}</Text>
            <Text style={styles.dateText}>{FormateDate(Result?.DOB)}</Text>
          </View>
          <DearSvg fill={Color.shadedWhite} />
        </View>
        <View style={styles.LinearLineAlign}>
          <View style={styles.alignView}>
            <CircularProgress
              value={80}
              radius={30}
              duration={duration}
              activeStrokeWidth={ACTIVE_STROKE}
              inActiveStrokeWidth={INACTIVE_STROKE}
              progressValueColor={'#ecf0f1'}
              progressValueStyle={styles.weight400}
              valueSuffix={'%'}
              maxValue={100}
              activeStrokeColor={'#84CAFF'}
            />
            <Text style={styles.textMargin}> Love</Text>
          </View>
          <View style={styles.alignView}>
            <CircularProgress
              value={60}
              radius={30}
              duration={duration}
              valueSuffix={'%'}
              activeStrokeWidth={ACTIVE_STROKE}
              inActiveStrokeWidth={INACTIVE_STROKE}
              progressValueStyle={styles.weight400}
              progressValueColor={'#ecf0f1'}
              activeStrokeColor={'#84CAFF'}
              maxValue={100}
            />
            <Text style={styles.textMargin}> Career</Text>
          </View>
          <View style={styles.alignView}>
            <CircularProgress
              value={50}
              radius={30}
              valueSuffix={'%'}
              duration={duration}
              activeStrokeWidth={ACTIVE_STROKE}
              inActiveStrokeWidth={INACTIVE_STROKE}
              progressValueStyle={styles.weight400}
              progressValueColor={Color.shadedWhite}
              activeStrokeColor={Color.lightBlue}
              maxValue={100}
              titleColor={'white'}
              titleStyle={{fontWeight: '100'}}
            />
            <Text style={styles.textMargin}> Health</Text>
          </View>
        </View>
        <View style={styles.svgBox}>
          <SvgBox
            backgroundColor={'#BEA1E2'}
            onPress={() => navigation.navigate('CalenderAdvice')}
            iconColor={Color.white}
            title={'Your Calendar Advice of the Day'}
            icon={<CalenderSvg fill={Color.white} />}
          />
          <SvgBox
            backgroundColor={Color.white}
            onPress={() => navigation.navigate('FocusDay')}
            iconColor={Color.primaryBlue}
            title={'Your Focus of the Day'}
            icon={<SunSvg fill={Color.primaryBlue} />}
          />
        </View>
      </LinearGradient>
    );
  };
  const FilterDate = () => {
    return (
      <View style={styles.filterStyle}>
        <Text style={styles.filterTextStyle}>Today</Text>
        <ArrowLeft fill={'#fff'} />
      </View>
    );
  };
  return (
    <ImageBackgroundView>
      <LinearWidget />
      <View style={styles.homeView2}>
        <Text style={styles.homeheading}>Your Horoscope of the Day</Text>
        <View style={styles.BoxView2}>
          <View style={[styles.LinearLineAlign]}>
            <View style={styles.Cmargin}>
              <ShareSvg fill={Color.white} />
            </View>
            <View style={styles.Cmargin}>
              <CalenderSvg fill={Color.white} />
            </View>
          </View>
          <FilterDate />
        </View>
        <View style={styles.Cpadding}>
          <Text style={styles.Desctext}>{dummies}</Text>
        </View>
      </View>
    </ImageBackgroundView>
  );
};
const styles1 = StyleSheet.create({});
export default Home;
