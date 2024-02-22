import AsyncStorage from '@react-native-async-storage/async-storage';
import {Toast} from '../Utils/helperFunctions';

export const RnStore = async (key, params = '') => {
  try {
    const jsonValue = JSON.stringify(params);
    const result = await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (err) {
    Toast('Error Occured', err);
  }
};
export const RnGet = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    if (result !== null && result !== undefined) {
      return JSON.parse(result);
    }
  } catch (err) {
    Toast('Error Occured', err);
  }
};
