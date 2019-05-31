import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { NavLink } from "react-router-dom";
class Navigation extends React.Component {
  onLogoutClicked = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Form inline>
        <Button onClick={this.onLogoutClicked} variant="outline-success">
          Logout
        </Button>
      </Form>
    );
    const guestLinks = (
      <Form inline>
        <Button variant="outline-success" href="/Signin">
          Signin
        </Button>
        <Button variant="outline-success" href="/Signup">
          Signup
        </Button>
      </Form>
    );

    return (
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Tinker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/Quiz">
                Quiz
              </NavLink>
              <NavLink className="nav-link" to="/Challenges">
                Challenges
              </NavLink>
              {/* <NavDropdown title="Add" id="basic-nav-dropdown">
                <NavDropdown.Item href="/AddChallenge">
                  Add Challenge
                </NavDropdown.Item>
                <NavDropdown.Item href="/AddResources">
                  Add Resources
                </NavDropdown.Item>
                <NavDropdown.Item href="/Assignment">
                  Add Assignment
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {isAuthenticated ? authLinks : guestLinks}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);
