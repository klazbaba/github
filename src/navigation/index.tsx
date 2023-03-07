import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
    </AppStack.Navigator>
  );
}
