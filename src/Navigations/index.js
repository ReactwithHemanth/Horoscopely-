import React from 'react';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import {useAuth} from '../hooks/useAuth';

export default AppNavigation = () => {
  const user = useAuth();

  return user ? <UserStack /> : <AuthStack />;
};
