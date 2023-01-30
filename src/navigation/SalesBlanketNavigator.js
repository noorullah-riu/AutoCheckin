import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Transition} from 'react-native-reanimated';
import {SalesBlankets} from '../screens/App/SalesBlanket';
import {SalesAggrement} from '../screens/App/SalesBlanket/SalesAggrement';

const salesStack = createStackNavigator();

export const SalesBlanketNavigator = () => {
  return (
    <salesStack.Navigator
      screenOptions={{
        headerShown: false,
        transition: (
          <Transition.Together>
            <Transition.Out
              type="slide-bottom"
              durationMs={400}
              interpolation="easeIn"
            />
            <Transition.In type="fade" durationMs={500} />
          </Transition.Together>
        ),
      }}>
      <salesStack.Screen name="SalesBlanket" component={SalesBlankets} />
      <salesStack.Screen name="SalesAggrement" component={SalesAggrement} />
    </salesStack.Navigator>
  );
};
