import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Transition} from 'react-native-reanimated';
import {Quotations} from '../screens/App/Quotations';
import {QuotationList} from '../screens/App/Quotations/QuotationList';
const QuotationStack = createStackNavigator();

export const QuotationNavigator = () => {
  return (
    <QuotationStack.Navigator
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
      <QuotationStack.Screen name="Quotations" component={Quotations} />
      <QuotationStack.Screen name="QuotationList" component={QuotationList} />
    </QuotationStack.Navigator>
  );
};
