import 'react-native-gesture-handler';
import React from 'react';
import {RootNavigator} from './navigation/RootNavigator';
//import {EcomProvider} from './contextApi/DataProvider';
//import ApiProvider from './networking/ApiProvider';
//import Toast from 'react-native-toast-message';
//import {Provider} from 'react-redux';
//import {store} from './redux/store/store';
//import {PersistGate} from 'redux-persist/integration/react';
///import persistStore from 'redux-persist/es/persistStore'

const App = () => {
  return (
      <RootNavigator />
  );
};

export default App;
