import React, {
  useCallback,
  useContext,
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
import {screenDiagonal, width} from '../../Utils/helperFunctions';
import styles, {SPACING} from '../../Styles/styles';
import {
  FirstTheme,
  LinearCommonButton,
  WelcomeText,
} from '../../Components/CustomComponents';
import {useAuth} from '../../hooks/useAuth';
import DatePicker from 'react-native-date-picker';
import {Color} from '../../Utils/Color';
import {
  RelationShipStatus,
  data,
  genderArray,
  sectionNames,
} from '../../Utils/Dummy';
import {RnGet, RnStore} from '../../hooks/RnstoreHook';
import {useIsFocused} from '@react-navigation/native';
import {MainContext} from '../../Confg/Context';

const OnBoarding = ({navigation, route}) => {
  const user = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(user?.email);
  const [number, setNumber] = useState(0);
  const [Dob, setDob] = useState(new Date());
  const [Pob, setPob] = useState('');
  const [Tob, setTob] = useState(new Date());
  const [EnablePush, setEnablePush] = useState(true);
  const [gender, setGender] = useState(genderArray[0].value);
  const [activeGender, setactiveGender] = useState(0);
  const [date, setDate] = useState(new Date());
  const [RelationShip, setRelationShip] = useState(
    RelationShipStatus[0]?.value,
  );
  const dgl = screenDiagonal();

  const ref = useRef();
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);

  const [RelationShipIndex, setRelationShipIndex] = useState(0);
  const [dataSourceCords, setDataSourceCords] = useState([]);
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const CARD_WIDTH = Dimensions.get('window').width * 0.8;
  const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
  const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 5;

  useEffect(() => {
    setFooterVisible();
  }, []);

  //First launched && check userdata is already stored
  const CheckLaunchedFirst = async () => {
    //userdata is already stored
    const user = await RnGet('userData');
    if (user) {
      setFirstLaunched(false);
      navigation.navigate('Home');
    } else {
      handleGetStarted(user);
    }
  };

  const handleGetStarted = async user => {
    try {
      const data = {
        uid: user?.uid,
        name: username,
        email: email,
        number: number,
        DOB: Dob,
        POB: Pob,
        TOB: Tob,
        gender: gender,
        relationShip: RelationShip,
      };
      const status = await RnStore('userData', data);
      if (status) {
        setFirstLaunched(false);
        navigation.navigate('Home');
      }
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
  const changeName = name => {
    setUsername(name);
  };

  //use scroll handler to scroll x direction
  const scrollHandler = key => {
    setScrollToIndex(key - 1);
    if (dataSourceCords.length > scrollToIndex) {
      ref?.current.scrollTo({
        x: dataSourceCords[key],
        y: 0, //we get the offset value from array based on key
        animated: true,
      });
    }
  };

  return (
    <View style={styles1.container2}>
      <FirstTheme item={'topImage'} />
      <WelcomeText SubTitle={'Welcome User'} title={'Lets get started'} />
      <ScrollView
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        scrollEnabled={false}
        decelerationRate={0}
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
        <>
          <View
            style={styles.cardSpace}
            key={1}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[1] = layout.x;
            }}>
            <Text style={styles.titleText}>Name</Text>

            <TextInput
              placeholder="name"
              style={styles.input}
              onChangeText={changeName}
              value={username}
            />
            <LinearCommonButton
              title={'Continue'}
              onPress={() => {
                username !== '' && scrollHandler(2);
              }}
            />
          </View>

          <View
            style={styles.cardSpace}
            key={2}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[2] = layout.x;
            }}>
            <Text style={styles.titleText}>Email</Text>
            <TextInput
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
                scrollHandler(3);
              }}
            />
          </View>

          <View
            style={styles.cardSpace}
            key={3}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[3] = layout.x;
            }}>
            <Text style={styles.titleText}>Phone Number</Text>
            <TextInput
              autoFocus
              placeholder="Phone Number"
              style={styles.input}
              value={number}
              onChangeText={e => setNumber(e)}
            />
            <LinearCommonButton
              title={'Continue'}
              onPress={() => {
                scrollHandler(4);
              }}
            />
          </View>

          <View
            style={styles.cardSpace}
            key={4}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[4] = layout.x;
            }}>
            <Text style={styles.titleText}>Date of birth</Text>
            <DatePicker
              date={Dob}
              onDateChange={setDob}
              mode={'date'}
              style={{width: width - 20}}
            />

            <LinearCommonButton
              title={'Submit'}
              onPress={() => {
                scrollHandler(5);
              }}
            />
          </View>
          <View
            style={styles.cardSpace}
            key={5}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[5] = layout.x;
            }}>
            <Text style={styles.titleText}>Time of birth</Text>
            <DatePicker
              date={Tob}
              onDateChange={setTob}
              mode={'time'}
              style={{width: width - 20}}
            />

            <LinearCommonButton
              title={'Submit'}
              onPress={() => {
                scrollHandler(6);
              }}
            />
          </View>

          <View
            style={styles.cardSpace}
            key={6}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[6] = layout.x;
            }}>
            <Text style={styles.titleText}>Place of birth</Text>

            <TextInput
              autoFocus
              placeholder="Place of birth"
              style={styles.input}
              value={Pob}
              onChangeText={e => setPob(e)}
            />
            <LinearCommonButton
              title={'Submit'}
              onPress={() => {
                scrollHandler(7);
              }}
            />
          </View>

          <View
            style={styles.cardSpace}
            key={7}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[7] = layout.x;
            }}>
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
                scrollHandler(8);
              }}
            />
          </View>

          <View
            style={styles.cardSpace}
            key={8}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[8] = layout.x;
            }}>
            <Text style={styles.titleText}>Place of birth</Text>

            <View style={styles.RelationShipStatusView}>
              {RelationShipStatus.map((item, index) => {
                return (
                  <View style={styles.RelationShipStatusView2}>
                    <View style={styles.radiostyle}>
                      <TouchableOpacity
                        style={[
                          styles.radioButton,
                          {
                            backgroundColor:
                              index == RelationShipIndex ? '#B342F2' : '#FFFF',
                          },
                        ]}
                        onPress={() => changeRelationShipStatus(index)}
                      />
                    </View>

                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                );
              })}
            </View>
            <LinearCommonButton
              title={'Submit'}
              onPress={() => {
                scrollHandler(9);
              }}
            />
          </View>

          <View
            style={styles.cardSpace}
            key={9}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[9] = layout.x;
            }}>
            <View style={styles.pushNotificationSwitch}>
              <Text style={styles.titleText}>Push Notification</Text>
              <View>
                <Switch
                  trackColor={{false: '#767577', true: Color.regularViolet}}
                  thumbColor={Color.white}
                  ios_backgroundColor="#EDF0F1"
                  onValueChange={() => setEnablePush(!EnablePush)}
                  value={EnablePush}
                />
              </View>
            </View>
            <LinearCommonButton
              title={'Submit'}
              onPress={() => {
                CheckLaunchedFirst();
              }}
            />
          </View>
        </>
      </ScrollView>
      <View style={styles.OnBoardingParts}>
        <View style={styles.padded}>
          <Text>
            {scrollToIndex}/{sectionNames.length - 1}
          </Text>
        </View>

        <View
          style={[
            styles1.paginagtionView,
            {
              padding: SPACING,
            },
          ]}>
          {sectionNames.map((item, idx) => {
            return (
              <TouchableOpacity
                onPress={() => scrollHandler(item.value)}
                style={{
                  padding: SPACING / 2,
                  margin: SPACING / 2,
                  borderRadius: SPACING,
                  backgroundColor:
                    idx == scrollToIndex ? Color.primaryBlue : '#8EBDF3',
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
