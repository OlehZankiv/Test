import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Auth} from '../screens';
import {BottomTabsNavigation} from './BottomTabsNavigation';

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={BottomTabsNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
);
