import {Alert, Dimensions, Platform, ToastAndroid} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const screenDiagonal = () => {
  let diagonal = Math.sqrt(width * width + height * height);
  return parseFloat(diagonal.toFixed(2));
};

export const Toast = (title = '', msg = '') => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(title, msg);
  } else {
    Alert.alert(title, msg);
  }
};

export const FormateDate = date => {
  let dat = new Date(date);

  // January 1 , 1998 09 Format
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false, // Use 24-hour format
    timeZone: 'UTC', // Specify the timezone, adjust as needed
  };
  let formatedDate = dat.toLocaleDateString('en-US', options);
  return formatedDate;
};
