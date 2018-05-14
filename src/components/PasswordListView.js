'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import links or other pages
import FormView from './FormView';
// footer
// navbar
// page title

// import other components if needed

import {
  ROUTES
} from '../constants/routesConst';

class PasswordListView extends React.Component {
  render() {
    return (
      <div>
        {/* <p>tes asdf t</p> */}
        <FormView />
      </div>
    );
  }
}

export default PasswordListView;