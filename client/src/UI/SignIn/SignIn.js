import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import classnames from "classnames";
class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
    errors: {}
  };
  onSubmit = async e => {
    e.preventDefault();
    await this.props.loginUser(this.state);
    console.log("State  After onSubmit Signin ", this.state);
  };
  componentDidMount() {
    console.log("Role", this.props.auth.user.role);
    if (
      this.props.auth.isAuthenticated &&
      this.props.auth.user.role === "teacher"
    ) {
      this.props.history.push("/");
    } else if (this.props.auth.isAuthenticated) {
      this.props.history.push("/challenges");
    }
  }
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) this.setState({ errors: nextProps.errors });
  }

  render() {
    let { errors } = this.state;
    console.log("Errors", errors);
    return (
      <Container>
        <Row className="vh-100 justify-content-center align-items-center">
          <div className="bg-light col-md-6">
            <Col>
              <h1> Sign-in </h1>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    className={classnames({ "is-invalid": errors.username })}
                    name="username"
                    placeholder="Username"
                    type="text"
                    onChange={e => this.changeState(e)}
                    value={this.state.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    className={classnames({ "is-invalid": errors.password })}
                    placeholder="Password"
                    type="Password"
                    onChange={e => this.changeState(e)}
                    value={this.state.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
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
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors["errors"]
});

export default connect(
  mapStateToProps,
  { loginUser }
)(SignIn);
