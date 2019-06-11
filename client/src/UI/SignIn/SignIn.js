import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import classnames from "classnames";
import { Card } from "react-bootstrap";

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
        <Row className="justify-content-center align-items-center">
          <Col md="6">
            <Card>
              <Card.Header> Sign in </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
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
                  <Form.Row>
                    <Col sm="3">
                      <Button
                        onClick={e => this.onSubmit(e)}
                        variant="primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        style={{
                          border: "none",
                          outline: "none",
                          background: "transparent",
                          color: "#000"
                        }}
                      >
                        Dont have an account
                        <a href="/signup"> Sign up</a>
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
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
