import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import colors from './styles/colors';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

const Stack = createStackNavigator();

const defaultOptions = {
  header: ({ navigation }) => {
    return <Header navigation={navigation} />;
  },
  cardStyle: {
    backgroundColor: colors.dark,
  },
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOptions} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
