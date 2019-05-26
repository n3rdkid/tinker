import React from "react";
import axios from "axios";
import {connect} from "react-redux";
// import propTypes from "propTypes";
import {registerUser} from "../../actions/authActions";
class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    user_password: "",
    user_type: "student"
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.registerUser(this.state);
  //   axios
  //     .post("http://localhost:5000/api/users/register", this.state)
  //     .then(() => console.log("succsss"))
  //     .catch(err => console.log(err.response.data));
  };

  render() {
    const {erros }=this.state;
    const {user}=this.props.auth;
    return (
      <form>
        {user?user.username:null}
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
  auth:state.auth
});

export default connect(mapStateToProps,{registerUser})(SignUp);
