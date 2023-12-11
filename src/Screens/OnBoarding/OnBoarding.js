import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {width} from '../../Utils/helperFunctions';
import styles, {_spacing} from '../../Styles/styles';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const OnBoarding = ({navigation, route}) => {
  const user = useAuth();

  const ref = useRef();
  const [index, setindex] = useState(0);
  const [username, setUsername] = useState(0);
  const [email, setEmail] = useState(user?.email);
  const [number, setNumber] = useState(0);
  const [Dob, setDob] = useState(new Date());
  const [Tob, setTob] = useState(new Date());
  const [placeOB, setPlaceOB] = useState(0);
  const [gender, setGender] = useState(genderArray[0].value);
  const [activeGender, setactiveGender] = useState(0);
  const [date, setDate] = useState(new Date());
  const [RelationShip, setRelationShip] = useState(
    RelationShipStatus[0]?.value,
  );
  const [RelationShipIndex, setRelationShipIndex] = useState(0);

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: index,
      animated: true,
      viewOffset: 0.5 || 1 ? 0 : _spacing,
    });
    // handleGetStarted('false');
  }, [index, navigation]);

  useFocusEffect(
    useCallback(() => {
      // This function will be called when the screen gains focus
      console.log('Screen focused');
      const checkOnBoarding = async () => {
        try {
          const onBoarding = await AsyncStorage.getItem('onboardingShown');
          if (onBoarding) {
            navigation.navigate('Home');
          }
        } catch (e) {
          const onBoarding = await AsyncStorage.setItem(
            'onboardingShown',
            'false',
          );

          console.error('Error reading from AsyncStorage:', error);
        }
      };
      checkOnBoarding();

      // You can perform actions when the screen gains focus, such as updating data

      // You can also listen for the hardware back button press (Android)
      const onHardwareBackPress = () => {
        // Your custom logic for handling the hardware back press
        console.log('Hardware back button pressed');
        return false; // Return true to prevent default behavior (going back)
      };

      // Add the back press listener
      navigation.addListener('beforeRemove', onHardwareBackPress);

      // Clean up the listener when the screen loses focus or unmounts
      return () => {
        console.log('Screen blurred');
        navigation.removeListener('beforeRemove', onHardwareBackPress);
      };
    }, [navigation]),
  );

  const handleGetStarted = async payload => {
    try {
      const res = await AsyncStorage.setItem('onboardingShown', payload);
      // if (res)
      //   navigation.reset({
      //     index: 0,
      //     routes: [{name: 'Home'}],
      //   }); // Change to your Home screen navigator
    } catch (error) {
      console.error('Error saving to AsyncStorage:', error);
    }
  };

  const handleSubmit = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
    handleGetStarted('true');
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
    switch (item.label) {
      case 'nameInput':
        return (
          <View key={idx} style={styles.cardSpace}>
            <Text style={styles.titleText}>Name</Text>

            <TextInput
              placeholder="name"
              style={styles.input}
              onChangeText={value => setUsername(value)}
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
        );
      case 'emailInput':
        return (
          <View style={styles.cardSpace}>
            <Text style={styles.titleText}>Email</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={user?.email ?? email}
              onChangeText={value => setEmail(value)}
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
        );
      case 'numberInput':
        return (
          <View style={styles.cardSpace}>
            <Text style={styles.titleText}>Phone Number</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={value => setNumber(value)}
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
        );
      case 'DOB':
        return (
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
        );
      case 'TOB':
        return (
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
        );
      case 'Gender':
        return (
          <View style={styles.cardSpace}>
            <Text style={styles.titleText}>Gender</Text>
            <View
              style={{
                padding: _spacing,
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
        );
      case 'RelationShip':
        return (
          <View style={styles.cardSpace}>
            <Text style={styles.titleText}>Place of birth</Text>

            <View
              style={{
                padding: _spacing,
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
        );
      case 'push':
        return (
          <View style={styles.cardSpace}>
            <Text style={styles.titleText}>Push Notification</Text>
            <View
              style={{
                padding: _spacing,
                flexDirection: 'row',
              }}>
              {/* {genderArray.map(gender => {
                return (
                  <>
                    <View
                      style={{
                        borderColor: Color.primaryBlue,
                        borderWidth: 1,
                        padding: 2,
                        borderRadius: 20,
                        marginLeft: 10,
                      }}>
                      <View
                        style={{
                          padding: 8,
                          backgroundColor: '#B342F2',
                          borderRadius: 20,
                        }}
                      />
                    </View>

                    <Text style={{fontSize: 18, marginLeft: 10}}>
                      {gender.value}
                    </Text>
                  </>
                );
              })} */}
            </View>
            <LinearCommonButton
              title={'Submit'}
              onPress={() => {
                handleSubmit();
              }}
            />
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <View style={styles1.container2}>
      <FirstTheme item={'topImage'} />
      <WelcomeText SubTitle={'Welcome User'} title={'Lets ge started'} />
      <FlatList
        ref={ref}
        scrollEnabled={false}
        initialScrollIndex={index}
        style={{flexGrow: 0}}
        data={data}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item, index: fIndex}) => {
          return <RenderItem item={item} />;
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: _spacing * 2,
          width: width,
          padding: _spacing * 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{padding: _spacing}}>
          <Text>
            {index}/{data.length}
          </Text>
        </View>
        <View
          style={[
            styles1.paginagtionView,
            {
              padding: _spacing,
            },
          ]}>
          {data.map((item, idx) => {
            return (
              <TouchableOpacity
                onPress={() => setindex(idx)}
                style={{
                  padding: _spacing / 2,
                  margin: _spacing / 2,
                  borderRadius: _spacing,
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
  container2: {flex: 1, alignItems: 'center'},
  paginagtionView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
