import {createContext} from 'react';

export const MainContext = createContext({
  FooterVisibility: true,
  FirstLaunched: false,
  setFirstLaunched: () => {},
  setFooterVisible: () => {},
});
