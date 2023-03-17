import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import {SignUp} from '../screens/Auth/SignUp';
import {Login} from '../screens/Auth/Login';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
