import React from "react";
import { NavLink } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Navigation = () => {
  return (
    <div>
      <Container>
        <Row>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Quiz">Quiz</NavLink>
          <NavLink to="/Challenges">Challenges</NavLink>
          <NavLink to="/AddChallenge">Add Challenge</NavLink>
          <NavLink to="/AddResources">Add Resources</NavLink>
          <NavLink to="/AddAssignment">Add Assignment</NavLink>
          <DropdownButton id="dropdown-basic-button" title="">
            <Dropdown.Item href="/Signin">Signin</Dropdown.Item>
            <Dropdown.Item href="/Signup">Register</Dropdown.Item>
          </DropdownButton>
        </Row>
      </Container>
    </div>
  );
};

export default Navigation;
