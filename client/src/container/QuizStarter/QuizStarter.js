import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import {NavLink} from "react-router-dom"
class Landing extends React.Component {
  render() {
    return (
      <Jumbotron md="6">
        <Row>
          <Col md="6">
          <h1 className="display-4">Don't just guess where your skills stand - prove it.</h1>
  <p>
  This is your future. Define your skills by the only metric that matches the pace of change. Take a free assessment to get your Skill IQ today.
  </p>
  <p>
    <NavLink to="/quiz/start">Start</NavLink>
  </p>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default Landing;
