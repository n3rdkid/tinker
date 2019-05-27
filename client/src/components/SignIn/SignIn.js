import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions"
class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state)
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentWillReceiveProps(nextProps)
  {
    if(nextProps.auth.isAuthenticated)
    {
      this.props.history.push('/dashboard')
    }
    if(nextProps.errors)
    this.setState({errors:nextProps.errors})
  }

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
const mapStateToProps =(state) =>({
auth:state.auth,
errors:state.errors
});

export default connect(mapStateToProps,{loginUser})(SignIn);
