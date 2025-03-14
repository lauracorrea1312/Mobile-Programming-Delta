import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../screens/HomePage';

const Stack = createStackNavigator ();

export default function StackNavigator() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Page" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}