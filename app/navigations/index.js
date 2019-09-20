
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './main-tab.navigations';

const App = createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
}));

export default App;