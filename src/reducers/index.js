'use strict';

import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';


export default {
  router: routerReducer,
  reduxForm: reduxFormReducer
};