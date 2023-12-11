import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {getAuth, signOut} from 'firebase/auth';
import {defaultapp} from '../../Confg/Firebase';
import {useAuth} from '../../hooks/useAuth';
import {
  ArrowLeft,
  CalenderSvg,
  DearSvg,
  ShareSvg,
  SunSvg,
} from '../../Components/SvgComponent';
import {
  ImageBackgroundView,
  LoadingView,
} from '../../Components/CustomComponents';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgress from 'react-native-circular-progress-indicator';
import {screenDiagonal} from '../../Utils/helperFunctions';
import styles from '../../Styles/styles';
import {Color} from '../../Utils/Color';
import {dummies} from '../../Utils/Dummy';
import {Picker} from '@react-native-picker/picker';
// import {firebase} from '@react-native-firebase/auth';
// const auth = firebase.auth();
const dgl = screenDiagonal();
const Home = ({navigation}) => {
  const user = useAuth();
  const auth = getAuth(defaultapp);

  const [loading, setLoading] = useState(false);
  const [SelectFilter, setSelectFilter] = useState('Today');

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Signed out successfully ');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return <LoadingView />;
  }

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
        {/* CalenderSvg */}
      </TouchableOpacity>
    );
  };

  const LinearWidget = () => {
    return (
      <LinearGradient colors={['#32A0EE', '#9713C6']} style={styles.LinearView}>
        <View style={styles.LinearLineAlign}>
          <View>
            <Text style={{fontSize: 20}}>Hello,harper</Text>
            <Text>january 1 , 1998 09</Text>
          </View>
          <DearSvg fill={Color.shadedWhite} />
        </View>
        <View style={styles.LinearLineAlign}>
          <View style={styles.alignView}>
            <CircularProgress
              value={60}
              radius={30}
              duration={2000}
              progressValueColor={'#ecf0f1'}
              valueSuffix={'%'}
              maxValue={100}
              activeStrokeColor={'#84CAFF'}
              titleColor={'white'}
            />
            <Text style={styles.textMargin}> Love</Text>
          </View>
          <View style={styles.alignView}>
            <CircularProgress
              value={60}
              radius={30}
              duration={2000}
              valueSuffix={'%'}
              progressValueColor={'#ecf0f1'}
              activeStrokeColor={'#84CAFF'}
              maxValue={100}
              titleColor={'white'}
            />
            <Text style={styles.textMargin}> Career</Text>
          </View>
          <View style={styles.alignView}>
            <CircularProgress
              value={60}
              radius={30}
              valueSuffix={'%'}
              duration={2000}
              progressValueColor={Color.shadedWhite}
              activeStrokeColor={Color.lightBlue}
              maxValue={100}
              titleColor={'white'}
              titleStyle={{fontWeight: '100'}}
            />
            <Text style={styles.textMargin}> Health</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
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

  return (
    <ImageBackgroundView>
      <LinearWidget />
      <View style={styles.homeView2}>
        <View style={styles.homeView3}>
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
            <View style={styles.filterStyle}>
              <Text style={{color: '#fff'}}>Today</Text>
              <ArrowLeft fill={'#fff'} />
            </View>
          </View>
          <View style={styles.Cpadding}>
            <Text style={{color: Color.white}}>{dummies}</Text>
          </View>
        </View>
      </View>
      {/* <Text style={styles.text1}>Welcome {user?.email}</Text>
      <Text onPress={handleSignOut} style={styles.text1}>
        SignOut {user?.email}
      </Text> */}
    </ImageBackgroundView>
  );
};
const styles1 = StyleSheet.create({});
export default Home;
