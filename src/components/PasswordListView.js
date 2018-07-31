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
    const handleSubmit = async (body) => {
      // console.log(body);
      let test = await fetch(`${publicAPIsURL}/post`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
        body: JSON.stringify(body)
      });
      console.log(test);
      return test;
    }

    return (
      <div>
        <FormView onSubmit={handleSubmit}/>
      </div>
    );
  }
}

export default PasswordListView;