import React from 'react';
import 'raf/polyfill';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root'),
);
