import React from 'react';
import './welcome.css';

class Welcome extends React.Component {
  render(){
    const {logo} = this.props;
    return(
      <div className="wel-main">
        <div className="wel-info-box" >
          <div className="logo-holder">
            <img className="logo" src={logo} alt="Giant Robot LTD" />
          </div>
          <div className="wel-body">
            <h1>
              Welcome
            </h1>
            <span className="wel-info">
              Please tell us about yourself to get started.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
