import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from 'react-query';

import HomeScreen from '../screens/HomeScreen';
import {User} from '../types/User';
import DetailsScreen from '../screens/DetailsScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: User;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export default function AppNavigation() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStack.Navigator>
        <AppStack.Screen name="HomeScreen" component={HomeScreen} />
        <AppStack.Screen name="DetailsScreen" component={DetailsScreen} />
      </AppStack.Navigator>
    </QueryClientProvider>
  );
}
