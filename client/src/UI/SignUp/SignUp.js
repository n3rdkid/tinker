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
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md="6">
            <Card>
              <Card.Header> Sign up </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                      Email
                    </Form.Label>
                    <Col sm={9}>
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
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}>
                      Username
                    </Form.Label>
                    <Col sm={9}>
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
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={3}>
                      Password
                    </Form.Label>
                    <Col sm={9}>
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
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col>
                      <Button type="submit" onClick={e => this.onSubmit(e)}>
                        Register
                      </Button>
                    </Col>
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
