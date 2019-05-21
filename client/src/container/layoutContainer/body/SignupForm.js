import React from "react";
class SignupForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    userType: ""
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      userType: ""
    });
    axios.post("localhost:5000/register", user);
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="FirstName"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="LastName"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="userName"
          placeholder="UserName"
          value={this.state.userName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="usertype"
          type="radio"
          value="teacher"
          onSelect={e => e.setState({ userType: "teacher" })}
        />
        Teacher
        <input
          name="usertype"
          type="radio"
          value="student"
          onSelect={() => {
            this.setState({ userType: "student" });
          }}
        />
        Student
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default SignupForm;
