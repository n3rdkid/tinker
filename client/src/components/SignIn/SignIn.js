import React from "react";
import axios from "axios";
class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };
  onSubmit = async term => {
    // e.preventDefault();
    console.log(this.state);
    axios.post(`http://localhost:5000/api/users/signin`).then(res => {
      console.log(res);
      console.log(res.data);
    });

    // axios
    //   .post("http://localhost:5000/api/users/register", this.state)
    //   .then(() => console.log("succsss"))
    //   .catch(err => console.log(err.response.data));
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

export default SignIn;
