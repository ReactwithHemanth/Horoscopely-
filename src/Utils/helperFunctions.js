import {Alert, Dimensions, Platform, ToastAndroid} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const screenDiagonal = () => {
  let diagonal = Math.sqrt(width * width + height * height);
  return parseFloat(diagonal.toFixed(2));
};

export const Toast = (title = '', msg = '') => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(title, msg);
  } else Alert.show(title, msg);
};
