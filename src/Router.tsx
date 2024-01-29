import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './navigations';

const Router = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Router;
