import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";

class Navigation extends React.Component {
  onLogoutClicked = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <div>
        <Form inline>
          <Button variant="outline-info" disabled>
            <Icon name="user" color="green" size="large" />
            beevekmgrz
          </Button>
          <Button onClick={this.onLogoutClicked} variant="outline-success">
            Logout
          </Button>
        </Form>
      </div>
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

    let assignmentsLink = "";
    if (this.props.auth.user.role === "student") {
      assignmentsLink = (
        <NavLink className="nav-link" to="/assignments">
          Assignments
        </NavLink>
      );
    }
    if (this.props.auth.user.role === "teacher") {
      assignmentsLink = (
        <NavLink className="nav-link" to="/admin/assignments">
          Manage Assignments
        </NavLink>
      );
    }

    return (
      <>
        <Navbar sticky="top" bg="light" expand="lg">
          <Navbar.Brand href="/">Tinker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="nav-link" to="/Quiz">
                Quiz
              </NavLink>
              <NavLink className="nav-link" to="/Challenges">
                Challenges
              </NavLink>
              {assignmentsLink}
            </Nav>
            {isAuthenticated ? authLinks : guestLinks}
          </Navbar.Collapse>
        </Navbar>
      </>
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
