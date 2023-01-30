import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {SignUp} from '../screens/Auth/SignUp';
import {Home} from '../screens/App/Home';
import {Home2} from '../screens/App/Home2';
import {Home3} from '../screens/App/Home3';
import {Home4} from '../screens/App/Home4';

const Stack = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="Home3" component={Home3} />
      <Stack.Screen name="Home4" component={Home4} />
    </Stack.Navigator>
  );
};
