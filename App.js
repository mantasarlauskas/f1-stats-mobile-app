import React from 'react';
import { NativeRouter } from 'react-router-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';
import thunk from 'redux-thunk';
import Routes from './Routes';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default () => (
  <Provider store={store}>
    <NativeRouter>
      <Routes />
    </NativeRouter>
  </Provider>
);
