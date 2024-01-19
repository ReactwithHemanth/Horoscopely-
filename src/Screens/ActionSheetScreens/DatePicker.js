import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import styles from '../../Styles/styles';
import {ArrowLeft} from '../../Components/SvgComponent';
import {Color} from '../../Utils/Color';

const DateInput = props => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const formatDate = dateString => {
      const date = new Date(dateString);
      setDay(String(date.getDate()).padStart(2, '0'));
      setMonth(String(date.getMonth() + 1).padStart(2, '0')); // Months are 0-indexed
      setYear(String(date.getFullYear()).slice(2));
    };

    // Format the given date string
    formatDate(props.dateTime);
    // console.log(props.dateTime);
  }, [props.dateTime]);

  return (
    <View style={styles.InputContainer}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.DateTimeInput}
          placeholder="DD"
          keyboardType="numeric"
          maxLength={2}
          value={day}
          onChangeText={text => setDay(text)}
        />
        <ArrowLeft fill={Color.grey} />
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.DateTimeInput}
          placeholder="MM"
          keyboardType="numeric"
          maxLength={2}
          value={month}
          onChangeText={text => setMonth(text)}
        />
        <ArrowLeft fill={Color.grey} />
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.DateTimeInput}
          placeholder="YY"
          keyboardType="numeric"
          maxLength={2}
          value={year}
          onChangeText={text => setYear(text)}
        />
        <ArrowLeft fill={Color.grey} />
      </View>
    </View>
  );
};
export {DateInput};
