import React from "react";
import axios from "axios";
class SigninForm extends React.Component {
  state = {
    username: "",
    password: ""
  };
  onSignInPressed = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <input
          name="username"
          placeholder="Username"
          type="text"
          value={this.state.username}
        />
        <input
          name="password"
          placeholder="Password"
          type="Password"
          value={this.state.password}
        />
        <br />
        <button onClick={() => this.onSubmit()}>Login</button>
      </div>
    );
  }
}

export default SigninForm;
