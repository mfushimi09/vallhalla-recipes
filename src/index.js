import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'tachyons';
 
ReactDOM.render(
  <div>
    <App />
  </div>
  , document.getElementById('root'));
registerServiceWorker();
