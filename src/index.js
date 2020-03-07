import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
