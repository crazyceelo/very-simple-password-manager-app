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
        <label className="col-1">Site:</label>
        <div>
          <Field
            className="col-11"  
            name="site"
            component="input"
            type="text"
            placeholder="facebook"
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