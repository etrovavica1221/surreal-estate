import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'raf/polyfill';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>, document.getElementById('root'),
);
