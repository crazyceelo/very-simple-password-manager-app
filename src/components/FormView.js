'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

// may need to import a LINKS const
// here

const FormView = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">  
        <label className="col-1">App:</label>
        <div className="col-11">
          <Field
            className="col-11"  
            name="appName"
            component="input"
            type="text"
            placeholder="facebook"
          />
        </div>
        <label className="col-1">Name:</label>
        <div className="col-11">
          <Field
            className="col-11"  
            name="userName"
            component="input"
            type="text"
            placeholder="jimmy231"
          />
        </div>
        <label className="col-1">Password:</label>
        <div className="col-11">
          <Field
            className="col-11"  
            name="password"
            component="input"
            type="text"
            placeholder="password123"
          />
        </div>
        <label className="col-1">URL:</label>
        <div className="col-11">
          <Field
            className="col-11"  
            name="site"
            component="input"
            type="text"
            placeholder="www.facebook.com"
          />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div> 
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // unique identifier for this form
})(FormView);


// class FormView extends React.Component {
//   render() {
//     return (
//       <div className="row">
//       </div>
//     )
//   }
// }

// export default FormView;