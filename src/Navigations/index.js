import React from 'react';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
// import {useAuth} from '../hooks/useAuth';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {firebaseConfig} from '../Confg/Firebase';
import {useAuth} from '../hooks/useAuth';
export default AppNavigation = () => {
  const user = useAuth();
  return user ? <UserStack /> : <AuthStack />;
};
