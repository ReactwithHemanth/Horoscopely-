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
import {MainContext} from '../../Confg/Context';

const OnBoarding = ({navigation, route}) => {
  const user = useAuth();
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
  // const [ref, setRef] = useState();
  const ref = useRef();
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);

  const [RelationShipIndex, setRelationShipIndex] = useState(0);
  const [dataSourceCords, setDataSourceCords] = useState([]);
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const CARD_WIDTH = Dimensions.get('window').width * 0.8;
  const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
  const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 5;
  /**
   * * TODO:
   * Refactor Required
   *
   * * CASE:
   * if user uid is already saved navigate to HomePage
   * if user uid is changes in every logg out state
   * if user uid is not used before store itemn
   *
   * initalise :
   * user initialted
   * on login in succes set isFirstLunched = true
   * if user isFirstLunched true show onboarding
   * else show users stack
   * if user logged in show footer , so we can avoid showing navigating without authentication
   */
  useEffect(() => {
    setFooterVisible();
    setFirstLaunched();
  }, []);

  const CheckLaunchedFirst = async () => {
    const user = await RnGet('userData');
    if (user.name != '') {
      navigation.navigate('Home');
    } else {
      handleGetStarted();
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
        TOB: Tob,
        gender: gender,
        RelationShip: RelationShip,
      };
      // const status = await RnStore('userData', data);
      setFirstLaunched(true);
      navigation.navigate('Home');
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
  const sectionNames = [
    // create dummy data so you can render two button
    {value: 1, text: 'Section 1'},
    {value: 2, text: 'Section 2'},
    {value: 3, text: 'Section 2'},
    {value: 4, text: 'Section 2'},
    {value: 5, text: 'Section 2'},
    {value: 6, text: 'Section 2'},
    {value: 7, text: 'Section 2'},
    {value: 8, text: 'Section 2'},
  ];
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
        // initialScrollIndex={index}
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
              dataSourceCords[1] = layout.x; // we store this offset values in an array
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
              dataSourceCords[2] = layout.x; // we store this offset values in an array
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
              dataSourceCords[3] = layout.x; // we store this offset values in an array
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
              dataSourceCords[4] = layout.x; // we store this offset values in an array
            }}>
            <Text style={styles.titleText}>Date of birth</Text>
            <DatePicker date={Dob} onDateChange={setDob} mode={'date'} />

            {/* <TextInput placeholder="Email" style={styles.input} /> */}
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
              dataSourceCords[5] = layout.x; // we store this offset values in an array
            }}>
            <Text style={styles.titleText}>Place of birth</Text>
            <DatePicker date={Tob} onDateChange={setTob} mode={'time'} />

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
              dataSourceCords[6] = layout.x; // we store this offset values in an array
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
                scrollHandler(7);
              }}
            />
          </View>

          <View
            style={styles.cardSpace}
            key={7}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[7] = layout.x; // we store this offset values in an array
            }}>
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
                // if (index === data.length - 1) {
                //   return;
                // }

                // setindex(index + 1);
                scrollHandler(8);
              }}
            />
          </View>

          <View
            style={styles.cardSpace}
            key={8}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[8] = layout.x; // we store this offset values in an array
            }}>
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
                CheckLaunchedFirst();
              }}
            />
          </View>
        </>
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
