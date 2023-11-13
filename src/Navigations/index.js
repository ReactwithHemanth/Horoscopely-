import React from 'react';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import {useAUth} from '../hooks/useAuth';

export default AppNavigation = () => {
  const user = useAUth();

  return user ? <UserStack /> : <AuthStack />;
};
