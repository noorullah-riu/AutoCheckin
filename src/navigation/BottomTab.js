import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {SignUp} from '../screens/Auth/SignUp';
import {Home} from '../screens/App/Home';



const Stack = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Checkin" component={Home} />
      <Stack.Screen name="CheckOut" component={Home} />
      <Stack.Screen name="History" component={Home} />
    </Stack.Navigator>
  );
};
