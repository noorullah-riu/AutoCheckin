import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, View} from 'react-native';
import {Home} from '../screens/App/Home';
import {CheckIn} from '../screens/App/Checkin';
import {CheckOut} from '../screens/App/Checkout';
import {History} from '../screens/App/History';
import rfSpacing from '../theme/rfSpacing';

const Stack = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
        tabBarActiveTintColor: '#296faa',
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
                marginBottom: rfSpacing.xs,
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
                height: rfSpacing['5xl'],
                width: rfSpacing['5xl'],
                marginTop: rfSpacing.m,
                marginBottom: rfSpacing.xs,
              }}
            />
          ),
        }}
        name="CheckIn"
        component={CheckIn}
      />
      <Stack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../Assets/Home/checkout.png')}
              style={{
                resizeMode: 'contain',
                height: rfSpacing['6xl'],
                width: rfSpacing['6xl'],
                marginTop: rfSpacing.m,
                marginBottom: rfSpacing.xs,
              }}
            />
          ),
        }}
        name="CheckOut"
        component={CheckOut}
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
                marginBottom: rfSpacing.xs,
              }}
            />
          ),
        }}
        name="History"
        component={History}
      />
    </Stack.Navigator>
  );
};
