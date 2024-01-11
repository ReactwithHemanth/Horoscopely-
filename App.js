import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppNavigation from './src/Navigations';
import NetInfo from '@react-native-community/netinfo';
import {LoadingView2} from './src/Components/CustomComponents';

const App = () => {
  const [isConnected, setisConnected] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      // console.log('Connection type', state.type);
      // console.log('Is connected?', state.isConnected);
      setisConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  if (!isConnected) {
    return <LoadingView2 />;
  }
  return <AppNavigation />;
};

export default App;
