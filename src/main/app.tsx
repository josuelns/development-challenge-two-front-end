import React from 'react';
import { Provider } from 'react-redux';
import store from '@/main/store';
import { Routes } from '@/main/routes';

const App = () => {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  )
}

export default App