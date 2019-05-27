import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
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
  componentDidMount()
  {
    if(this.props.auth.isAuthenticated)
    {
      this.props.history.push('/login');
    }
  }
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
      <Container>
      <Row className="vh-100 justify-content-center align-items-center">
        <div className="bg-light col-md-6">
          <Col>
            <h1> Sign-Up </h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  name="username"
                  placeholder="Username"
                  type="text"
                  onChange={e =>this.changeHandler(e)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={e =>this.changeHandler(e)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>


              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="user_password"
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
          </Col>{" "}
        </div>
      </Row>
    </Container>
    );
  }
}
const mapStateToProps =(state)=>({
  auth:state.auth,
  errors:state.errors
});

export default connect(mapStateToProps,{registerUser})(withRouter(SignUp));
