import React, {useEffect, useState} from 'react';
import {auth} from '../Confg/Firebase';

export const useAuth = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const unSubscribeFromAuthStateChange = auth.onAuthStateChanged(
      auth,
      user => {
        if (user) {
          setUser(user);
        } else setUser(undefined);
      },
    );

    return () => {
      unSubscribeFromAuthStateChange;
    };
  }, []);
  return user;
};
