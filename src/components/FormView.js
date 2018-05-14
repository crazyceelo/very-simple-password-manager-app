'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

// may need to import a LINKS const
// here

const FormView = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div className="row">  
          <label className="col-1">Site:</label>
          <div className="col-11">
            <Field
              className="col-11"  
              name="site"
              component="input"
              type="text"
              placeholder="facebook"
            />  
          </div>
          <label className="col-1">Name:</label>
          <div className="col-11">
            <Field
              className="col-11"  
              name="name"
              component="input"
              type="text"
              placeholder="asdf@gmail.com"
            />  
          </div>
          <label className="col-1">Pass:</label>
          <div className="col-11">
            <Field
              className="col-11"  
              name="pass"
              component="input"
              type="text"
              placeholder="password"
            />  
          </div>
          <label className="col-1">URL:</label>
          <div className="col-11">
            <Field
              className="col-11"  
              name="url"
              component="input"
              type="text"
              placeholder="www.abc.com"
            />  
          </div>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'simple' // unique identifier for this form
})(FormView)


// class FormView extends React.Component {
//   render() {
//     return (
//       <div className="row">
//       </div>
//     )
//   }
// }

// export default FormView;