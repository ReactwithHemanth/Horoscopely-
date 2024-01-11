import React, {useState} from 'react';
import AuthStack from './AuthStack';
import {useAuth} from '../hooks/useAuth';
import LoggedStack from './UserStack';
import {MainContext} from '../Confg/Context';
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
/**
 * is it anonymous USER?
 * Do data Collection required on every time
 *
 */
export default AppNavigation = () => {
  const user = useAuth();
  const [FirstLaunched, setFirstLaunched] = useState(false);
  const [FooterVisibility, setFooterVisible] = useState(true);

  return (
    <MainContext.Provider
      value={{
        setFirstLaunched,
        setFooterVisible,
        FirstLaunched,
        FooterVisibility,
      }}>
      {user ? <LoggedStack /> : <AuthStack />}
    </MainContext.Provider>
  );
};
