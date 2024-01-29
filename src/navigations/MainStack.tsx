import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from './TabStack';
import type {RootParamList} from 'types/navigation';

const RootNavigation = createNativeStackNavigator<RootParamList>();

const RootStack = () => {
  return (
    <RootNavigation.Navigator initialRouteName={'Tab'}>
      <RootNavigation.Screen
        name="Tab"
        component={TabStack}
        options={{headerShown: false}}
      />
    </RootNavigation.Navigator>
  );
};

export default RootStack;
