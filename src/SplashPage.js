import React, { Component } from 'react';
import LogInForm from './LogInForm';

class SplashPage extends Component {
  constructor(props){
    super(props);
    this.state = {data: []};
  }

  render(){
    return (
      <div>
        <LogInForm />
      </div>
    );
  }
}

export default SplashPage;
