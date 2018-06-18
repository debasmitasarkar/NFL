import React, { Component } from 'react';

import Register from './containers/RegisterPage/Register';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Register />
      </div>
    );
  }
}

export default App;
