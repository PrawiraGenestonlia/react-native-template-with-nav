import React from 'react';
import { Platform, } from 'react-native';
import { createStackNavigator, } from 'react-navigation-stack';
import { createBottomTabNavigator, } from 'react-navigation-tabs';

import {
  ItsMeScreen,
  ReactDefaultScreen
} from '../screens'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ItsMeStack = createStackNavigator(
  {
    ItsMe: ItsMeScreen,
  },
  config
);

ItsMeStack.navigationOptions = {
  tabBarLabel: 'Its Me',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
};

// ItsMeStack.path = '';

const DefaultStack = createStackNavigator(
  {
    ReactDefault: ReactDefaultScreen,
  },
  config
);

DefaultStack.navigationOptions = {
  tabBarLabel: 'Default',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
};

DefaultStack.path = '';


const tabNavigator = createBottomTabNavigator({
  ItsMeStack,
  DefaultStack
});

tabNavigator.path = '';

export default tabNavigator;
