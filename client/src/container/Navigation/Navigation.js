import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Tinker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Quiz">Quiz</Nav.Link>
            <Nav.Link href="/Challenges">Challenges</Nav.Link>
            <NavDropdown title="Add" id="basic-nav-dropdown">
              <NavDropdown.Item href="/AddChallenge">
                Add Challenge
              </NavDropdown.Item>
              <NavDropdown.Item href="/AddResources">
                Add Resources
              </NavDropdown.Item>
              <NavDropdown.Item href="/Assignment">
                Add Assignment
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Button variant="outline-success" href="/Signin">
              Signin
            </Button>
            <Button variant="outline-success" href="/Signup">
              Signup
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
