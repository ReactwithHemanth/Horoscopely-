// Import the functions you need from the SDKs you need
import {initializeApp, getApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
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

// if (apps.length) {
export const defaultapp = initializeApp(firebaseConfig);
// }
// Initialize Firebase
// const analytics = getAnalytics(app);
