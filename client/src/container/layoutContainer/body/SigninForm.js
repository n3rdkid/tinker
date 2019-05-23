import React from "react";
import axios from "axios";
class SigninForm extends React.Component {
  state = {
    username: "",
    password: ""
  };
  onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/signin", this.state)
      .then(() => console.log("Signin success"))
      .catch(err => console.log(err.response.data));
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1> Sign-in </h1>

        <input
          name="username"
          placeholder="Username"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.username}
        />
        <input
          name="password"
          placeholder="Password"
          type="Password"
          onChange={e => this.changeState(e)}
          value={this.state.password}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </div>
    );
  }
}

export default SigninForm;
