import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Orders} from '../screens';
import {OrderDetail} from '../screens';
import {Pdf} from '../screens/App/Pdf';
import {Transition} from 'react-native-reanimated';

const OrdersStack = createStackNavigator();

export const OrdersNavigator = () => {
  return (
    <OrdersStack.Navigator
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
      <OrdersStack.Screen name="Orders" component={Orders} />
      <OrdersStack.Screen name="OrderDetail" component={OrderDetail} />
      <OrdersStack.Screen name="Pdf" component={Pdf} />
    </OrdersStack.Navigator>
  );
};
