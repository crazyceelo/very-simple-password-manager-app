'use strict';

import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import history from './routedViews/history';
import reducers from './reducers';
import sagas from './sagas/index';

const initRouterMiddleware = routerMiddleware(history);
const initSagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
  ...reducers,
  form: reduxFormReducer  
});

const middleware = applyMiddleware(initSagaMiddleware, initRouterMiddleware);

let composeEnhancers;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

const store = createStore(combinedReducers, composeEnhancers(middleware));

initSagaMiddleware.run(sagas);

export default store;

