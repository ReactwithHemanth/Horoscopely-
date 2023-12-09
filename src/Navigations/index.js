import React from 'react';
import AuthStack from './AuthStack';
import {useAuth} from '../hooks/useAuth';
import LoggedStack from './UserStack';
export default AppNavigation = () => {
  const user = useAuth();
  return user ? <LoggedStack /> : <AuthStack />;
};
