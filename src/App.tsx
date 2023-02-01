import 'react-native-gesture-handler';
import React from 'react';
import {EcomProvider} from './contextApi/DataProvider';
import {RootNavigator} from './navigation/RootNavigator';

const App = () => {
  return (
    <EcomProvider>
      <RootNavigator />
    </EcomProvider>
  );
};

export default App;
