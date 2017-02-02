import React, { Component } from 'react';

class LogInForm extends Component {
  render(){
    return (
      <div>
            <form className="form login form-login">

              <div className="form__field">
                <label for="login__username"><span className="hidden">Username</span></label>

                <input className="form__input" id="login__username"  type="text" name="email" placeholder="Email"/>
              </div>

              <div className="form__field">
                <label for="login__password"><span className="hidden">Password</span></label>
                <input className="form__input" id="login__password" type="password" name="password" placeholder="Password"/>
              </div>

              <div className="form__field">
                <input type="submit" value="Log In" onClick={this.props.onLogIn}/>
              </div>

            </form>

            <p className="text--center">Not a member? <a href="#" id="sign-up-link" onClick={this.props.onClick}>Sign up now</a></p>
      </div>
    );
  }
}

export default LogInForm;
