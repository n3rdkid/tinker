import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
// import propTypes from "propTypes";
import { registerUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    user_password: "",
    user_type: "student"
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    console.log("SUBMIT");
    this.props.registerUser(this.state, this.props.history);

    console.log("Regiserting");
    console.log(this.state);
    this.props.registerUser(this.state, this.props.history);
  };

  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;
    return (
      <div className="card col-md-6 mx-auto my-auto">
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Email
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                name="email"
                onChange={e => this.changeHandler(e)}
                value={this.state.email}
                type="email"
                placeholder="Email"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Username
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                name="username"
                type="text"
                placeholder="UserName"
                onChange={e => this.changeHandler(e)}
                value={this.state.username}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={3}>
              Password
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                name="user_password"
                type="password"
                placeholder="Password"
                onChange={e => this.changeHandler(e)}
                value={this.state.user_password}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={e => this.onSubmit(e)}>
                Register
              </Button>
            </Col>
          </Form.Group>
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
  { registerUser }
)(withRouter(SignUp));
