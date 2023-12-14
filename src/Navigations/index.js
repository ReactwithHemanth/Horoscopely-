import React from 'react';
import AuthStack from './AuthStack';
import {useAuth} from '../hooks/useAuth';
import LoggedStack from './UserStack';
export default AppNavigation = () => {
  const user = useAuth();
  console.log(
    user,
    '================================================================',
  );
  return user ? <LoggedStack /> : <AuthStack />;
  // return <AuthStack />;
};
