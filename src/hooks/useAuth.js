import {getAuth, onAuthStateChanged} from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import {defaultapp} from '../Confg/Firebase';
import auth from '@react-native-firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const unSubscribeFromAuthStateChange = auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else setUser(undefined);
    });

    return () => {
      unSubscribeFromAuthStateChange;
    };
  }, []);
  return user;
};
