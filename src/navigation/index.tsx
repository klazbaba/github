import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from 'react-query';

import HomeScreen from '../screens/HomeScreen';
import {User} from '../types/User';
import DetailsScreen from '../screens/DetailsScreen';
import {UserContext} from '../contexts';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: User;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export default function AppNavigation() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user: user as User, setUser}}>
      <QueryClientProvider client={queryClient}>
        <AppStack.Navigator>
          <AppStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{header: () => null}}
          />
          <AppStack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{headerTitle: 'User Details'}}
          />
        </AppStack.Navigator>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}
