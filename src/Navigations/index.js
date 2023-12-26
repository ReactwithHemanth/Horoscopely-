import React, {useState} from 'react';
import AuthStack from './AuthStack';
import {useAuth} from '../hooks/useAuth';
import LoggedStack from './UserStack';
import {MainContext} from '../Confg/Context';
/**
 * is it anonymous USER?
 * Do data Collection required on every time
 *
 */
export default AppNavigation = () => {
  const user = useAuth();
  const [FirstLaunched, setcheckLauched] = useState(false);
  const [FooterVisibility, setShowFooter] = useState(true);
  const setFirstLaunched = () => {
    setcheckLauched(!FirstLaunched);
  };
  const setFooterVisible = () => {
    setShowFooter(!FooterVisibility);
  };
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
