import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, View} from 'react-native';
import {Home} from '../screens/App/Home';
import {CheckIn} from '../screens/App/Checkin';
import {CheckOut} from '../screens/App/Checkout';
import {History} from '../screens/App/History';
import rfSpacing from '../theme/rfSpacing';
import Spacings from '../theme/Spacings';
import {ResetPassword} from '../screens/App/ResetPassword';
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
                height: Spacings['4xl'],
                width: Spacings['w4xl'],
                marginTop: Spacings.m,
                marginBottom: Spacings.xs,
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
                height: Spacings['4xl'],
                width: Spacings['w4xl'],
                marginTop: Spacings.m,
                marginBottom: Spacings.xs,
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
                height: Spacings['5xl'],
                width: Spacings['w5xl'],
                marginTop: Spacings.m,
                marginBottom: Spacings.xs,
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
                height: Spacings['4xl'],
                width: Spacings['w4xl'],
                marginTop: Spacings.m,
                marginBottom: Spacings.xs,
              }}
            />
          ),
        }}
        name="History"
        component={History}
      />
      <Stack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../Assets/Home/setting.png')}
              style={{
                resizeMode: 'contain',
                height: Spacings['4xl'],
                width: Spacings['w4xl'],
                marginTop: Spacings.m,
                marginBottom: Spacings.xs,
              }}
            />
          ),
        }}
        name="Reset Password"
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
};
