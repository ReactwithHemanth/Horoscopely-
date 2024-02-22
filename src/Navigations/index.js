import React, {useState} from 'react';
import AuthStack from './AuthStack';
import {useAuth} from '../hooks/useAuth';
import LoggedStack from './UserStack';
import {MainContext} from '../Confg/Context';

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
