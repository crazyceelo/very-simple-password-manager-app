'use strict';

import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import history from './routedViews/history';
import reducers from './reducers';
import sagas from './sagas/index'; // may need to set up this file

// routes middleware
const initRouterMiddleware = routerMiddleware(history);
const initSagaMiddleware = createSagaMiddleware();

// reducer middleware
const combinedReducers = combineReducers({
  ...reducers
});

const middleware = applyMiddleware(initSagaMiddleware, initRouterMiddleware);

// may need to review this
let composeEnhancers;
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducers, composeEnhancers(middleware));

initSagaMiddleware.run(sagas);

export default store;