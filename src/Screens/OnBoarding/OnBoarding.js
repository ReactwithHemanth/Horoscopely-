import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
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
} from '../../Components/CustomComponents';
import {useAuth} from '../../hooks/useAuth';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';

export default function HomeScreen({navigation}) {
  const _spacing = 10;
  const data = [
    {id: '1', label: 'nameInput'},
    {id: '2', label: 'emailInput'},
    {id: '3', label: 'numberInput'},
    {id: '4', label: 'DOB'},
    {id: '5', label: 'TOB'},
    {id: '6', label: 'Gender'},
    {id: '7', label: 'RelationShip'},
    {id: '8', label: 'push'},
  ];
  const genderArray = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];
  const RelationShipStatus = [
    {label: 'single', value: 'single'},
    {label: 'Married', value: 'Married'},
    {label: 'Engaged', value: 'Engaged'},
    {label: 'InRelationship', value: 'In a Relationship'},
  ];
  const user = useAuth();

  const ref = useRef();
  const [index, setindex] = useState(0);
  const [username, setUsername] = useState(0);
  const [email, setEmail] = useState(user?.email);
  const [number, setNumber] = useState(0);
  const [DOB, setDob] = useState(0);
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
  }, [index]);

  const WelcomeText = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'flex-start',
          marginLeft: _spacing * 2,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'left',
          }}>
          Welcome User
        </Text>
        <Text style={{fontSize: 25, padding: 5, fontWeight: 'bold'}}>
          Lets ge started
        </Text>
      </View>
    );
  };
  const changeGender = index => {
    console.log(index);
    setGender(genderArray[index]?.value);
    setactiveGender(index);
  };
  const changeRelationShipStatus = index => {
    console.log(index);

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
            <DatePicker date={date} onDateChange={setDate} />

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
            <TextInput placeholder="Email" style={styles.input} />
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
                        borderColor: '#328AEE',
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
                        borderColor: '#328AEE',
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
                        borderColor: '#328AEE',
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
              onPress={() => navigation.navigate('Home')}
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
      <WelcomeText />
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
                  backgroundColor: idx == index ? '#328AEE' : '#8EBDF3',
                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}
const styles1 = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  container2: {flex: 1, alignItems: 'center'},
  paginagtionView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
