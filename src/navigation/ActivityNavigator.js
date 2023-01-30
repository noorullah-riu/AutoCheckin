import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Transition} from 'react-native-reanimated';
import {Activities} from '../screens/App/Activities';
import {Location} from '../screens/App/Activities/Location';
const ActivityStack = createStackNavigator();

export const ActivityNavigator = () => {
  return (
    <ActivityStack.Navigator
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
      <ActivityStack.Screen name="Activities" component={Activities} />
      <ActivityStack.Screen name="Location" component={Location} />
    </ActivityStack.Navigator>
  );
};
