import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import styles from '../../Styles/styles';
import {ArrowLeft} from '../../Components/SvgComponent';
import {Color} from '../../Utils/Color';

const TimePicker = props => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  useEffect(() => {
    const formatTime = timeString => {
      const time = new Date(timeString);
      setHours(String(time.getHours()).padStart(2, '0'));
      setMinutes(String(time.getMinutes()).padStart(2, '0'));
      setSeconds(String(time.getSeconds()).padStart(2, '0'));
    };

    // Format the given time string
    formatTime(props.dateTime);
  }, [props.dateTime]);

  return (
    <View style={styles.InputContainer}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.DateTimeInput}
          placeholder="HH"
          keyboardType="numeric"
          maxLength={2}
          value={hours}
          onChangeText={text => setHours(text)}
        />
        <ArrowLeft fill={Color.grey} />
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.DateTimeInput}
          placeholder="MM"
          keyboardType="numeric"
          maxLength={2}
          value={minutes}
          onChangeText={text => setMinutes(text)}
        />
        <ArrowLeft fill={Color.grey} />
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.DateTimeInput}
          placeholder="SS"
          keyboardType="numeric"
          maxLength={2}
          value={seconds}
          onChangeText={text => setSeconds(text)}
        />
        <ArrowLeft fill={Color.grey} />
      </View>
    </View>
  );
};
export {TimePicker};
