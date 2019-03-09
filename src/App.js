import React, { Component } from 'react';
import logo from './imgs/GiantRobotLTD_Logo.svg';
import arrow from './imgs/White_Arrow.svg';
import './App.css';

import Welcome from './views/welcome';
import SignUp from './views/signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome logo={logo}/>
        <SignUp arrow={arrow}/>
      </div>
    );
  }
}

export default App;
