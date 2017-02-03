import React, { Component } from 'react';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

class SplashPage extends Component {
  constructor(props){
    super(props);
    this.state = {login: true};
    this.goToSignUp = this.goToSignUp.bind(this);
    this.goToLogIn= this.goToLogIn.bind(this);
  }

  goToSignUp(){
    this.setState({login: false});
  }
  goToLogIn(){
    this.setState({login: true});
  }

  render(){
    return (
      <div>
        {this.state.login && <LogInForm onClick={this.goToSignUp}/>}
        {!this.state.login && <SignUpForm onClick={this.goToLogIn}/>}
      </div>
    );
  }
}

export default SplashPage;
