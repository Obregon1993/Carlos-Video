import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CreateStore } from 'redux';
import App from './routes/App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app'),
);
