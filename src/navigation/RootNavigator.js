import React, {useEffect, useState, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTab} from './BottomTab';
import {
  NavigationContainer,
  useTheme,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
//import {useColorScheme} from 'react-native';
//import EcomContext from '../contextApi/DataProvider';
import {AuthNavigator} from './AuthNavigator';
import {CardStyleInterpolators} from '@react-navigation/stack';

const Stack = createStackNavigator();
export const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {UserAuthentic, etUserAuthentic} = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //   Alert.alert("root app ,",term);
      setIsLoading(false);
    }, 2000);
  }, []);

  /*   if (isLoading) {
    return <Splash />;
  }
 */
  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,

        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      {!UserAuthentic ? (
        <Stack.Screen name="App" component={BottomTab} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

// export const RootNavigator = () => (
//   const scheme = useColorScheme();
//   <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
//     <Root />
//   </NavigationContainer>
// );

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
