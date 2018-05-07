// const arr = [1, 2, 3];
// const iAmJavascriptES6 = () => console.log(...arr);
// window.iAmJavascriptES6 = iAmJavascriptES6;

import style from './main.css';

// import App from './App';

// import routing packages
import React from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// require('babel-core/register');
// require('babel-polyfill');

// import files
import history from './routedViews/history';
import RoutedViews from './routedViews/routes';
import store from './store';

render(
  <Provider store={store}>
    <Router history={history}>
      <RoutedViews />
    </Router>
  </Provider>
  , window.document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}

