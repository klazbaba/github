import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens';

export type RootStackParamList = {
  LoginScreen: undefined;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="LoginScreen" component={LoginScreen} />
    </AppStack.Navigator>
  );
}
