import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {Firebase_app} from '../Confg/Firebase';

const auth = getAuth(Firebase_app);

export const useAUth = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unSubscribeFromAuthStateChange = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else setUser(undefined);
    });

    return () => {
      unSubscribeFromAuthStateChange;
    };
  }, []);
  console.log(user, 'user');
  return user;
};
