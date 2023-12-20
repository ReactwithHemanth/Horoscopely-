import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {width} from '../../Utils/helperFunctions';
import styles from '../../Styles/styles';
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
import {RnGet, RnStore} from '../../hooks/RnstoreHook';

const OnBoarding = ({navigation, route}) => {
  const _spacing = 10;

  const user = useAuth();

  const ref = useRef();
  const [index, setindex] = useState(0);
  const [username, setUsername] = useState(0);
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
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: index,
      animated: true,
      viewOffset: 0.5 || 1 ? 0 : _spacing,
    });
  }, [index]);

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
      const store = await RnStore(user.uid, data);
      //navigate Home
      if (store) navigation.navigate('Home');
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
            <View
              style={{
                padding: _spacing,
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
