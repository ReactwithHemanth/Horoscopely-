import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {width} from '../../Utils/helperFunctions';
import styles, {SPACING} from '../../Styles/styles';
import {
  FirstTheme,
  LinearCommonButton,
  WelcomeText,
} from '../../Components/CustomComponents';
import {useAuth} from '../../hooks/useAuth';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import {Color} from '../../Utils/Color';
import {RelationShipStatus, data, genderArray} from '../../Utils/Dummy';
import {RnGet, RnStore} from '../../hooks/RnstoreHook';
import {useIsFocused} from '@react-navigation/native';

const OnBoarding = ({navigation, route}) => {
  const user = useAuth();
  const refScroll = useRef(null);
  const [index, setindex] = useState(0);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(user?.email);
  const [number, setNumber] = useState(0);
  const [Dob, setDob] = useState(new Date());
  const [Tob, setTob] = useState(new Date());
  const [EnablePush, setEnablePush] = useState(true);
  const [gender, setGender] = useState(genderArray[0].value);
  const [activeGender, setactiveGender] = useState(0);
  const [date, setDate] = useState(new Date());
  const [RelationShip, setRelationShip] = useState(
    RelationShipStatus[0]?.value,
  );
  const [RelationShipIndex, setRelationShipIndex] = useState(0);

  const CARD_WIDTH = Dimensions.get('window').width * 0.8;
  const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
  const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10;

  useEffect(() => {
    FooterDisabled(focus);
  }, [navigation]);

  const focus = useIsFocused();

  const FooterDisabled = async focus => {
    const status = await RnStore('footerDisabled', focus);
  };

  const handleGetStarted = async user => {
    /**
     * case:
     * if user uid is already saved navigate to HomePage
     * if user uid is changes in every logg out state
     * if user uid is not used before store itemn
     */
    try {
      const data = {
        uid: user.uid,
        name: username,
        email: email,
        number: number,
        DOB: Dob,
        TOB: Tob,
        gender: gender,
        RelationShip: RelationShip,
      };
      // Store user data for later
      // const store = await RnStore(user.uid, data);
      //navigate Home
      const status = await RnStore('footerDisabled', false);
      if (status) navigation.navigate('Home');
    } catch (error) {
      console.error('Error handleGetStarted', error);
    }
  };

  const changeGender = index => {
    setGender(genderArray[index]?.value);
    setactiveGender(index);
  };

  const changeRelationShipStatus = index => {
    setRelationShip(RelationShipStatus[index]?.value);
    setRelationShipIndex(index);
  };

  const RenderItem = ({item, idx}) => {
    return (
      <>
        <View key={idx} style={styles.cardSpace}>
          <Text style={styles.titleText}>Name</Text>

          <TextInput
            key={idx}
            placeholder="name"
            autoFocus
            style={styles.input}
            onChangeText={e => console.log(e)}
            value={username}
          />
          <LinearCommonButton
            title={'Continue'}
            onPress={() => {
              if (index === data.length - 1) {
                return;
              }

              setindex(index + 1);
            }}
          />
        </View>

        <View style={styles.cardSpace}>
          <Text style={styles.titleText}>Email</Text>
          <TextInput
            key={idx}
            placeholder="Email"
            autoFocus
            style={styles.input}
            defaultValue={email}
            value={user?.email ?? email}
            onChangeText={e => setEmail(e)}
          />
          <LinearCommonButton
            title={'Continue'}
            onPress={() => {
              if (index === data.length - 1) {
                return;
              }
              setindex(index + 1);
            }}
          />
        </View>

        <View style={styles.cardSpace}>
          <Text style={styles.titleText}>Phone Number</Text>
          <TextInput
            key={idx}
            autoFocus
            placeholder="Phone Number"
            style={styles.input}
            value={number}
            onChangeText={e => setNumber(e?.target?.value)}
          />
          <LinearCommonButton
            title={'Continue'}
            onPress={() => {
              if (index === data.length - 1) {
                return;
              }
              setindex(index + 1);
            }}
          />
        </View>

        <View style={styles.cardSpace}>
          <Text style={styles.titleText}>Date of birth</Text>
          <DatePicker date={Dob} onDateChange={setDob} mode={'date'} />

          {/* <TextInput placeholder="Email" style={styles.input} /> */}
          <LinearCommonButton
            title={'Submit'}
            onPress={() => {
              if (index === data.length - 1) {
                return;
              }

              setindex(index + 1);
            }}
          />
        </View>

        <View style={styles.cardSpace}>
          <Text style={styles.titleText}>Place of birth</Text>
          <DatePicker date={Tob} onDateChange={setTob} mode={'time'} />

          <LinearCommonButton
            title={'Submit'}
            onPress={() => {
              if (index === data.length - 1) {
                return;
              }

              setindex(index + 1);
            }}
          />
        </View>

        <View style={styles.cardSpace}>
          <Text style={styles.titleText}>Gender</Text>
          <View
            style={{
              padding: SPACING,
              flexDirection: 'row',
            }}>
            {genderArray.map((gender, index) => {
              return (
                <>
                  <View
                    key={index}
                    style={{
                      borderColor: Color.primaryBlue,
                      borderWidth: 1,
                      padding: 2,
                      borderRadius: 20,
                      marginLeft: 10,
                    }}>
                    <TouchableOpacity
                      style={{
                        padding: 8,
                        backgroundColor:
                          index == activeGender ? '#B342F2' : '#fff',
                        borderRadius: 20,
                      }}
                      onPress={() => changeGender(index)}
                    />
                  </View>

                  <Text style={{fontSize: 18, marginLeft: 10}}>
                    {gender.value}
                  </Text>
                </>
              );
            })}
          </View>
          <LinearCommonButton
            title={'Submit'}
            onPress={() => {
              if (index === data.length - 1) {
                return;
              }

              setindex(index + 1);
            }}
          />
        </View>

        <View style={styles.cardSpace}>
          <Text style={styles.titleText}>Place of birth</Text>

          <View
            style={{
              padding: SPACING,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {RelationShipStatus.map((item, index) => {
              return (
                <>
                  <View
                    style={{
                      borderColor: Color.primaryBlue,
                      borderWidth: 1,
                      padding: 2,
                      marginVertical: 10,
                      borderRadius: 20,
                      marginLeft: 10,
                    }}>
                    <TouchableOpacity
                      style={{
                        padding: 8,
                        backgroundColor:
                          index == RelationShipIndex ? '#B342F2' : '#FFFF',
                        borderRadius: 20,
                      }}
                      onPress={() => changeRelationShipStatus(index)}
                    />
                  </View>

                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 10,
                      marginVertical: 10,
                    }}>
                    {item.value}
                  </Text>
                </>
              );
            })}
          </View>
          <LinearCommonButton
            title={'Submit'}
            onPress={() => {
              if (index === data.length - 1) {
                return;
              }

              setindex(index + 1);
            }}
          />
        </View>

        <View style={styles.cardSpace}>
          <View
            style={{
              padding: SPACING,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.titleText}>Push Notification</Text>
            <View>
              <Switch
                trackColor={{false: '#767577', true: Color.regularViolet}}
                thumbColor={Color.white}
                ios_backgroundColor="#EDF0F1"
                onValueChange={() => setEnablePush(!EnablePush)}
                value={EnablePush}
                // enabled={EnablePush}
              />
            </View>
          </View>
          <LinearCommonButton
            title={'Submit'}
            onPress={() => {
              // navigation.navigate('Home');
              handleGetStarted(user);
            }}
          />
        </View>
      </>
    );

    // default:
    //   return null;
    // }
  };
  // console.log(username);
  return (
    <View style={styles1.container2}>
      <FirstTheme item={'topImage'} />
      <WelcomeText SubTitle={'Welcome User'} title={'Lets get started'} />
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        scrollEnabled={true}
        decelerationRate={0}
        initialScrollIndex={index}
        snapToAlignment={'center'}
        snapToInterval={CARD_WIDTH + 10}
        contentInset={{
          // iOS ONLY
          top: 0,
          left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }} // Right spacing for the very last card
        contentContainerStyle={{
          // contentInset alternative for Android
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
        }}>
        <RenderItem />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: SPACING * 2,
          width: width,
          padding: SPACING * 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{padding: SPACING}}>
          <Text>
            {index}/{data.length}
          </Text>
        </View>
        <View
          style={[
            styles1.paginagtionView,
            {
              padding: SPACING,
            },
          ]}>
          {data.map((item, idx) => {
            return (
              <TouchableOpacity
                onPress={() => setindex(idx)}
                style={{
                  padding: SPACING / 2,
                  margin: SPACING / 2,
                  borderRadius: SPACING,
                  backgroundColor: idx == index ? Color.primaryBlue : '#8EBDF3',
                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles1 = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  container2: {flex: 1},
  paginagtionView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
