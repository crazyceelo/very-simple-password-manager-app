import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className='container'>
      <p>REACT!!</p>
    </div>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));