import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { NavLink } from "react-router-dom";
import { Icon, Confirm } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import "./Navigation.css";
class Navigation extends React.Component {
  state = { open: false };
  open = e => {
    e.preventDefault();
    this.setState({ open: true });
  };
  close = () => this.setState({ open: false });
  onLogoutClicked = e => {
    this.setState({ open: false });
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  };
  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <div>
        <Form inline>
          <NavLink
            style={{ fontSize: "1.15rem", paddingTop: "10px" }}
            className="justify-content-end nav-link"
            to="/UserGuide"
          >
            {/* <Icon name="help" fitted /> */}
            User Guide
          </NavLink>
          <span
            className="mx-1"
            style={{ outline: "0", border: "0", color: "#454d66" }}
            disabled
          >
            <Icon name="user" color="#454d66" size="large" />
            {this.props.auth.user.username}
          </span>
          <button onClick={this.open} className="mx-1 btn btn-outline-dark">
            Logout
          </button>
        </Form>
      </div>
    );
    const guestLinks = (
      <>
        <NavLink
          className="justify-content-end nav-link"
          style={{ fontSize: "1.15rem", paddingTop: "10px" }}
          to="/UserGuide"
        >
          {/* <Icon name="help" fitted />  */}
          User Guide
        </NavLink>
        <NavLink
          className="nav-link"
          style={{
            fontSize: "1.1rem",
            border: "0",
            borderRadius: "0",
            color: "#444f5a",
            outline: "0"
          }}
          to="/Signin"
        >
          Sign in
        </NavLink>
        <NavLink
          className="nav-link"
          style={{
            fontSize: "1.1rem",
            border: "0",
            borderRadius: "0",
            background: "#525252",
            outline: "0"
          }}
          to="/Signup"
        >
          <span style={{ color: "white" }}>Sign up</span>
        </NavLink>
      </>
    );

    let assignmentsLink = "";
    if (this.props.auth.user.role === "student") {
      assignmentsLink = (
        <NavLink
          className="nav-link"
          style={{ fontSize: "1.15rem", paddingTop: "10px" }}
          to="/assignments"
        >
          {/* <Icon name="write" fitted /> */}
          Assignments
        </NavLink>
      );
    }
    if (this.props.auth.user.role === "teacher") {
      assignmentsLink = (
        <NavLink
          className="nav-link"
          style={{ fontSize: "1.15rem", paddingTop: "10px" }}
          to="/admin/assignments"
        >
          Manage Assignments
        </NavLink>
      );
    }

    return (
      <>
        <Navbar
          style={{ minHeight: "80px", borderBottom: "2px solid #FF502F" }}
          sticky="top"
          bg="white"
          expand="md"
          color="white"
        >
          <Navbar.Brand
            href="/"
            style={{
              color: "#ff502f",
              fontSize: "2.5rem",
              textTransform: "uppercase",
              fontWeight: "600"
            }}
          >
            {/* <Icon name="home" /> */}
            Tinker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {this.props.auth.user.role !== "teacher" ? (
                <>
                  <NavLink
                    style={{ fontSize: "1.15rem", paddingTop: "10px" }}
                    className="nav-link"
                    to={
                      this.props.auth.isAuthenticated ? "/quiz/start" : "/quiz"
                    }
                  >
                    {/* <Icon name="bolt" fitted /> */}
                    Quiz
                  </NavLink>
                  <NavLink
                    style={{ fontSize: "1.15rem", paddingTop: "10px" }}
                    className="nav-link"
                    to={
                      this.props.auth.isAuthenticated
                        ? "/challenges"
                        : "/explore"
                    }
                  >
                    {/* <Icon name="chess knight" fitted /> */}
                    Challenges
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
        <Confirm
          className="mx-auto my-auto mt-5"
          style={{
            zIndex: 5000,
            maxHeight: "150px",
            width: "300px",
            position: "absolute",
            top: 100,
            right: 0
          }}
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.onLogoutClicked}
        />
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
)(withRouter(Navigation));
