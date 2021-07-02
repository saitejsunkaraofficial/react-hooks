import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UseEffectHooks from './UseEffectHooks';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UseEffectHooks />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
