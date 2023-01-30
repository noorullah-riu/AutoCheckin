import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Customers} from '../screens';
import {Products} from '../screens';
import {Cart} from '../screens';
import {PostOrder} from '../screens/App/PostOrder';
import {Transition} from 'react-native-reanimated';

const customersStack = createStackNavigator();

export const CustomerNavigator = () => {
  return (
    <customersStack.Navigator
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
      <customersStack.Screen name="Customers" component={Customers} />
      <customersStack.Screen name="PostOrder" component={PostOrder} />
      <customersStack.Screen name="Products" component={Products} />
      <customersStack.Screen name="Cart" component={Cart} />
    </customersStack.Navigator>
  );
};
