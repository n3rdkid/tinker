import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import {NavLink} from "react-router-dom";
class Landing extends React.Component {
  render() {
    return (
      <Jumbotron md="6">
        <Row>
          <Col md="6">
          <h1 className="display-4">Learn to code, interactively!</h1>
  <p>
  It's the fastest, easiest, most addictive way to learn.
  </p>
  <p>
  <NavLink className="btn btn-primary text-light" to="/signin">Get Started</NavLink>
  </p>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default Landing;
