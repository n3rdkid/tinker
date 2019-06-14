import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { NavLink } from "react-router-dom";
import { Icon, Confirm } from "semantic-ui-react";

class Navigation extends React.Component {
  state = { open: false };
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  onLogoutClicked = e => {
    this.setState({ open: false });
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <div>
        <Form inline>
          <NavLink className="justify-content-end nav-link" to="/UserGuide">
            <Icon name="help" fitted /> User Guide
          </NavLink>
          <Button variant="outline-info" disabled>
            <Icon name="user" color="black" size="large" />
            {this.props.auth.user.username}
          </Button>
          <Button onClick={this.open} variant="outline-success">
            Logout
          </Button>
        </Form>
        <Confirm
          header="Hey whats up"
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.onLogoutClicked}
        />
      </div>
    );
    const guestLinks = (
      <>
        <NavLink className="justify-content-end nav-link" to="/UserGuide">
          <Icon name="help" fitted /> User Guide
        </NavLink>
        <Button variant="outline-success" href="/Signin">
          Signin
        </Button>
        <Button variant="outline-success" href="/Signup">
          Signup
        </Button>
      </>
    );

    let assignmentsLink = "";
    if (this.props.auth.user.role === "student") {
      assignmentsLink = (
        <NavLink className="nav-link" to="/assignments">
          <Icon name="write" fitted /> Assignments
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
        <Navbar sticky="top" bg="white" expand="lg" color="white">
          <Navbar.Brand href="/">
            <Icon name="home" />
            Tinker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {this.props.auth.user.role !== "teacher" ? (
                <>
                  <NavLink className="nav-link" to="/Quiz">
                    <Icon name="bolt" fitted /> Quiz
                  </NavLink>
                  <NavLink className="nav-link" to="/Challenges">
                    <Icon name="chess knight" fitted /> Challenges
                  </NavLink>
                </>
              ) : (
                ""
              )}
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
