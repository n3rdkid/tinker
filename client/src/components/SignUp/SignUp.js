import React from "react";
import axios from "axios";
import {connect} from "react-redux";
// import propTypes from "propTypes";
import {registerUser} from "../../actions/authActions";
import {withRouter} from "react-router-dom";
class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    user_password: "",
    user_type: "student"
  };
  componentWillReceiveProps(nextProps)
  {
    if(nextProps.errors)
    {
      this.setState({errors:nextProps.errors});
    }
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.registerUser(this.state,this.props.history);

  };

  render() {
    const {errors }=this.state;
    const {user}=this.props.auth;
    return (
      <form>
        {errors}
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.changeHandler(e)}
        />
        <br />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.changeHandler(e)}
        />
        <br />
        <input
          name="user_password"
          placeholder="Password"
          type="password"
          value={this.state.user_password}
          onChange={e => this.changeHandler(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
const mapStateToProps =(state)=>({
  auth:state.auth,
  errors:state.errors
});

export default connect(mapStateToProps,{registerUser})(withRouter(SignUp));
