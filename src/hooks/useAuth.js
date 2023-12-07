import {getAuth, onAuthStateChanged} from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import {defaultapp} from '../Confg/Firebase';
// const auth = firebase.auth();

export const useAuth = () => {
  const auth = getAuth(defaultapp);
  const [user, setUser] = useState({});
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
  return user;
};
