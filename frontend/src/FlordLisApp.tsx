import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import './assets/css/styles.css';

export const FlordLisApp = () => {
  return (
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
  )
}