import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {List, WebView} from '../screens';

export type RootTabsParamList = {
  List: undefined;
  WebView: undefined;
  ScannedData: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

export const BottomTabsNavigation = () => (
  <Tab.Navigator
    initialRouteName="List"
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: false,
    }}>
    <Tab.Screen name="List" component={List} />
    <Tab.Screen name="WebView" component={WebView} />
    <Tab.Screen name="ScannedData" component={List} />
  </Tab.Navigator>
);
