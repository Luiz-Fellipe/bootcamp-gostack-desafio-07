import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

const defaultOptions = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: '#141419',
  },
  headerTintColor: '#FFF',
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen name="Main" component={Home} />
        <Stack.Screen name="User" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
