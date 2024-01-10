const RnStore = async (key, params = '') => {
  try {
    const result = await AsyncStorage.setItem(key, params);
    return true;
  } catch (err) {
    Toast('Error Occured', err);
  }
};
const RnGet = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    return true;
  } catch (err) {
    Toast('Error Occured', err);
  }
};
