'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import publicAPIsURL from './../config/publicAPIs';

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
    const showResults = async (test) => {
      console.log(test);
      try {
        return await fetch(`${publicAPIsURL}/post`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
          body: test
        });
      } catch (err) {
        throw err;
      }
    }

    return (
      <div>
        <FormView onSubmit={showResults}/>
      </div>
    );
  }
}

export default PasswordListView;