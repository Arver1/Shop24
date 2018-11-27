import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from '../store';

function Root(){
  return (
    <Provider store = { store}>
      <App />
    </Provider>
  )
}

export default Root
