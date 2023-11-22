// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {initializeAuth} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

// Initialize Firebase
export const Firebase_app = initializeApp(firebaseConfig);

// initializeAuth(Firebase_app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });
// export const analytics = getAnalytics(Firebase_app);
