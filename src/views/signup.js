import React from 'react';
import './signup.css';

class SignUp extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      firstName:"",
      lastName: "",
      address1: "",
      address2: ""
    };
  }

  handleFirstName = (evt) => {
    this.setState({firstName:evt.target.value});
  }

  handleLastName = (evt) => {
    this.setState({lastName:evt.target.value});
  }

  handleAddressOne = (evt) => {
    this.setState({address1:evt.target.value});
  }

  handleAddressTwo = (evt) => {
    this.setState({address2:evt.target.value});
  }

handleSubmit = (event) => {
    event.preventDefault();
    const {firstName, lastName, address1, address2} = this.state;
    const user = [];

    if(firstName && lastName && address1){
      user.push(firstName, lastName, address1, address2)
    }
    alert(user);
  }

  render(){
    const {arrow} = this.props;

    return(
      <div className="signup-default">
        <div className="signup-form-parent">
          <form onSubmit={this.handleSubmit}>
            <label className="signup-label">
              FIRST NAME
            </label>
            <input className="signup"
              type="text"
              required
              onChange={this.handleFirstName}
              />

            <label className="signup-label">
              LAST NAME
            </label>
            <input className="signup"
              type="text"
              required
              onChange={this.handleLastName}
              />

            <label className="signup-label">
              ADDRESS
            </label>
            <input className="signup"
              type="text"
              required
              onChange={this.handleAddressOne}
              />

            <label className="signup-label">
              ADDRESS 2 (OPTIONAL)
            </label>
            <input className="signup"
              type="text"
              onChange={this.handleAddressTwo}
              />
            <button>
              Next <img className="arrow" src={arrow} alt="next" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
