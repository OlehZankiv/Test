import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {WebsiteItem} from '../api';
import {List, ScannerResults, WebsiteScanner} from '../screens';

export type RootTabsParamList = {
  List: undefined;
  WebsiteScanner: WebsiteItem | undefined;
  ScannerResults: undefined;
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
    <Tab.Screen name="WebsiteScanner" component={WebsiteScanner} />
    <Tab.Screen name="ScannerResults" component={ScannerResults} />
  </Tab.Navigator>
);
