import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, View} from 'react-native';
import {Home} from '../screens/App/Home';
import {Home2} from '../screens/App/Checkin';
import {Home3} from '../screens/App/Checkout';
import {Home4} from '../screens/App/Home4';
import rfSpacing from '../theme/rfSpacing';

const Stack = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
      }}>
      <Stack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../Assets/Home/home.png')}
              style={{
                resizeMode: 'contain',
                height: rfSpacing['5xl'],
                width: rfSpacing['5xl'],
                marginTop: rfSpacing.m,
              }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../Assets/Home/check-in.png')}
              style={{
                resizeMode: 'contain',
                height: rfSpacing['8xl'],
                width: rfSpacing['8xl'],
                marginTop: rfSpacing.m,
              }}
            />
          ),
        }}
        name="CheckIn"
        component={Home2}
      />
      <Stack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../Assets/Home/checkout.png')}
              style={{
                resizeMode: 'contain',
                height: rfSpacing['8xl'],
                width: rfSpacing['8xl'],
                marginTop: rfSpacing.m,
              }}
            />
          ),
        }}
        name="CheckOut"
        component={Home3}
      />
      <Stack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../Assets/Home/history.png')}
              style={{
                resizeMode: 'contain',
                height: rfSpacing['5xl'],
                width: rfSpacing['5xl'],
                marginTop: rfSpacing.m,
                marginBottom: rfSpacing.s,
              }}
            />
          ),
        }}
        name="History"
        component={Home4}
      />
    </Stack.Navigator>
  );
};
