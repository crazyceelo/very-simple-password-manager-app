'use strict';

import { all } from 'redux-saga/effects';

//import any sagas
// import sagaImportFile from './saga/sagaImportFile';

function * initSagas() {
  const sagas = [
    // array of sagas go here.
    // ...sagaImportFile
  ];

  yield all([
    ...(sagas.map((saga) => saga()))
  ]);
}

export default initSagas;