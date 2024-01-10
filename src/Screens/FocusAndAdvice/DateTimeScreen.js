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
// import styles from '../../Styles/styles';
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
import styles, {SPACING} from '../../Styles/styles';

const DateTimeScreen = ({navigation}) => {
  const dateList = [
    {id: '4', label: 'DOB'},
    {id: '5', label: 'TOB'},
  ];
  const ref = useRef();
  const [index, setindex] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: index,
      animated: true,
      viewOffset: 0.5 || 1 ? 0 : SPACING,
    });
  }, [index]);

  const RenderItem = ({item, idx}) => {
    switch (item.label) {
      case 'DOB':
        return (
          <View style={styles.cardSpace}>
            <Text style={styles.titleText}>Date of birth</Text>
            <DatePicker date={date} onDateChange={setDate} mode={'date'} />

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
            <DatePicker date={date} onDateChange={setDate} mode={'time'} />
            <LinearCommonButton
              title={'Submit'}
              onPress={() => navigation.navigate('CalenderAdvice')}
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
      <WelcomeText
        SubTitle={'Set a Date'}
        title={'For your daily horoscope notification'}
      />
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        style={{flexGrow: 0}}
        data={dateList}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item, index}) => {
          return <RenderItem item={item} />;
        }}
      />
    </View>
  );
};

export default DateTimeScreen;

const styles1 = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  container2: {flex: 1, alignItems: 'center'},
  paginagtionView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
