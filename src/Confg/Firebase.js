// Import the functions you need from the SDKs you need
import {firebase} from '@react-native-firebase/auth';
import {initializeApp, getApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAdg1HUsaCKCYzWQ5n45eXbCCxTZjnqsmo',
  authDomain: 'horoscopely-4e10f.firebaseapp.com',
  projectId: 'horoscopely-4e10f',
  storageBucket: 'horoscopely-4e10f.appspot.com',
  messagingSenderId: '729595887720',
  appId: '1:729595887720:web:716d8fd487419252ba7bdd',
  measurementId: 'G-DM4LH95ZQW',
};
// const auth = initializeAuth(firebaseConfig, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// if (apps.length) {
export const defaultapp = initializeApp(firebaseConfig);
export const authForDefaultApp = getAuth();
// }
// Initialize Firebase
// const analytics = getAnalytics(app);
