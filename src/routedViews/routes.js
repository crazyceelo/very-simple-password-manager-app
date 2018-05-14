'use strict';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PasswordListView from '../components/PasswordListView';

import {
  ROUTES
} from '../constants/routesConst';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path={ROUTES.HOME}>
          <PasswordListView />
        </Route>
      </Switch>
    );
  }
}