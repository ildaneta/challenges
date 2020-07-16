import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const App = createStackNavigator();

import Home from '../pages/Home';
import Cards from '../pages/Cards';

export default function Routes() {
  return (
    <App.Navigator
      initialRouteName="Cards"
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Cards" component={Cards} />
    </App.Navigator>
  );
}
