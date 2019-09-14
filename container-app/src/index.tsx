import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStateProvider } from './store';
import './index.css';

ReactDOM.render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>,
 document.getElementById('root'),
);
