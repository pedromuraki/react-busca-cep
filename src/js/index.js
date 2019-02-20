/* React */
import React from 'react';
import { render } from 'react-dom';

/* Redux */
import { Provider } from 'react-redux';
import store from './store/index';

/* App */
import App from './components/App';
import '../scss/index.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
