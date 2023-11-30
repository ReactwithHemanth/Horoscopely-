import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {getAuth, signOut} from 'firebase/auth';
import {defaultapp} from '../Confg/Firebase';
import {useAuth} from '../hooks/useAuth';
import {DearSvg} from '../Components/SvgComponent';
import {LoadingView} from '../Components/CustomComponents';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgress from 'react-native-circular-progress-indicator';
// import {firebase} from '@react-native-firebase/auth';
// const auth = firebase.auth();

const Home = () => {
  const user = useAuth();
  const auth = getAuth(defaultapp);

  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return <LoadingView />;
  }

  return (
    <ImageBackground
      source={require('../Assets/Home/Component1.png')}
      style={styles.imageBgView}>
      <LinearGradient colors={['#32A0EE', '#9713C6']} style={styles.LinearView}>
        <View style={styles.LinearLineAlign}>
          <View>
            <Text>Hello,harper</Text>
            <Text>january 1 , 1998 09</Text>
          </View>
          <View>
            <DearSvg />
          </View>
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
              titleStyle={{fontWeight: '100'}}
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
              // subtitle={'Love'}
              titleColor={'white'}
              titleStyle={{fontWeight: '100'}}
            />
            <Text style={styles.textMargin}> Career</Text>
          </View>
          <View style={styles.alignView}>
            <CircularProgress
              value={60}
              radius={30}
              valueSuffix={'%'}
              duration={2000}
              progressValueColor={'#ecf0f1'}
              activeStrokeColor={'#84CAFF'}
              maxValue={100}
              titleColor={'white'}
              titleStyle={{fontWeight: '100'}}
            />
            <Text style={styles.textMargin}> Health</Text>
          </View>
        </View>
        <View style={{}}>
          <View style={{backgroundColor: 'red`'}}></View>
          <View></View>
        </View>
      </LinearGradient>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      {/* <Text style={styles.text1}>Welcome {user?.email}</Text>
      <Text onPress={handleSignOut} style={styles.text1}>
        SignOut {user?.email}
      </Text> */}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imageBgView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  LinearView: {
    width: '90%',
    height: 300,
    marginTop: 100,
    borderRadius: 20,
    padding: 20,
  },
  alignView: {alignItems: 'center'},
  textMargin: {marginTop: 10},
  LinearLineAlign: {flexDirection: 'row', justifyContent: 'space-between'},
});
export default Home;
