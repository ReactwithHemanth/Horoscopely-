import React from 'react';
import AuthStack from './AuthStack';
import {useAuth} from '../hooks/useAuth';
import LoggedStack from './UserStack';
/**
 * is it anonymous USER?
 * Do data Collection required on every time
 *
 */
export default AppNavigation = () => {
  const user = useAuth();

  return user ? <LoggedStack /> : <AuthStack />;
};
