import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { FlordLisApp } from './FlordLisApp';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FlordLisApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
