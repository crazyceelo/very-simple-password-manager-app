import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import history from './routedViews/history';
import RoutedViews from './routedViews/routes';
import store from './store';

import PasswordListView from './components/PasswordListView';

const App = () => {
  return (
    <div className='container-fluid'>
      <Provider store={store}>  
        <Router history={history}>  
          <PasswordListView />
        </Router>  
      </Provider>  
    </div>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));

// import React from 'react';
// import { ConnectedRouter as Router } from 'react-router-redux';
// import { Provider } from 'react-redux';
// import { render } from 'react-dom';
// // require('babel-core/register');
// // require('babel-polyfill');

// // import files
// import history from './routedViews/history';
// import RoutedViews from './routedViews/routes';
// import store from './store';

// render(
//   <Provider store={store}>
//     <Router history={history}>
//       <RoutedViews />
//     </Router>
//   </Provider>
//   , window.document.getElementById('app'));

// if (module.hot) {
//   module.hot.accept();
// }
