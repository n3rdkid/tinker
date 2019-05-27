import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";

class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) this.setState({ errors: nextProps.errors });
  }

  render() {
    return (
      <div>
        <h1> Sign-in </h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              name="username"
              placeholder="Username"
              type="text"
              onChange={e => this.changeState(e)}
              value={this.state.username}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              placeholder="Password"
              type="Password"
              onChange={e => this.changeState(e)}
              value={this.state.password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            onClick={e => this.onSubmit(e)}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(SignIn);
