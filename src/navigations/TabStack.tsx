import React from 'react';
import {TabParamList} from 'types/navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Home} from 'pages';
import {Color} from 'config';

const Tab = createBottomTabNavigator<TabParamList>();

const TabStack = () => {
  return (
    <Tab.Navigator initialRouteName="Home" backBehavior="history">
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => {
          return {
            title: 'Home',
            ...getCommonTabOption('thumb-up-outline'),
          };
        }}
      />
    </Tab.Navigator>
  );
};

function getCommonTabOption(iconName: string): BottomTabNavigationOptions {
  return {
    tabBarIcon: ({focused}) => {
      return (
        <Icon
          name={iconName}
          size={28}
          color={focused ? Color.orange : 'gray'}
        />
      );
    },
    headerStyle: {
      height: 72,
    },
    tabBarLabelStyle: {
      fontSize: 8,
    },
    tabBarActiveTintColor: Color.orange,
    tabBarInactiveTintColor: 'gray',
    headerShadowVisible: false,
    headerTitleStyle: {fontSize: 16},
    headerTitleAlign: 'center',
    headerLeftLabelVisible: true,
  };
}

export default TabStack;
