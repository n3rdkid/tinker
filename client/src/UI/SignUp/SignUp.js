import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import classnames from "classnames";
// import propTypes from "propTypes";
import { registerUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    user_password: "",
    user_type: "user",
    errors: {}
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
    e.preventDefault();
    this.props.registerUser(this.state, this.props.history);
  };

  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;
    return (
      <Container fluid={true} style={{ background: "#4e4e4e" }}>
        <Row
          style={{ minHeight: "88vh" }}
          className="justify-content-center align-items-center"
        >
          <Col md="6">
            <Card>
              <Card.Header
                style={{
                  backgroundColor: "#313848",
                  border: "0",
                  textAlign: "center",
                  fontSize: "2rem",
                  color: "#e7eaf6"
                }}
              >
                {" "}
                Sign up{" "}
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label
                      style={{ fontSize: "1.5rem", color: "#414141" }}
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      className={classnames({ "is-invalid": errors.email })}
                      name="email"
                      onChange={e => this.changeHandler(e)}
                      value={this.state.email}
                      type="email"
                      placeholder="Email"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formHorizontalEmail">
                    <Form.Label
                      style={{ fontSize: "1.5rem", color: "#414141" }}
                    >
                      Username
                    </Form.Label>
                    <Form.Control
                      name="username"
                      className={classnames({
                        "is-invalid": errors.username
                      })}
                      type="text"
                      placeholder="Username"
                      onChange={e => this.changeHandler(e)}
                      value={this.state.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formHorizontalPassword">
                    <Form.Label
                      style={{ fontSize: "1.5rem", color: "#414141" }}
                    >
                      Password
                    </Form.Label>
                    <Form.Control
                      className={classnames({
                        "is-invalid": errors.password
                      })}
                      name="user_password"
                      type="password"
                      placeholder="Password"
                      onChange={e => this.changeHandler(e)}
                      value={this.state.user_password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Row>
                      <Col md={3}>
                        <Button
                          type="submit"
                          style={{
                            border: "0",
                            background: "#FF502F",
                            color: "white"
                          }}
                          onClick={e => this.onSubmit(e)}
                        >
                          Register
                        </Button>
                      </Col>
                      <Col md={9} className="text-right">
                        <Button
                          style={{
                            border: "none",
                            outline: "none",
                            background: "transparent",
                            color: "#000"
                          }}
                        >
                          Have an account
                          <NavLink style={{ color: "#FF502F" }} to="/signin">
                            {" "}
                            Sign in
                          </NavLink>
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
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
  { registerUser }
)(withRouter(SignUp));
