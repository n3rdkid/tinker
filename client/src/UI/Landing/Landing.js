import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Landing.css";
import { NavLink } from "react-router-dom";
import brackets from "../../../src/assets/404.jpg";

class Landing extends React.Component {
  render() {
    return (
      <Jumbotron style={{ minHeight: "100vh" }}>
        <Row>
          <Col md="6">
            <h1 className="display-4">Learn to code, interactively!</h1>
            <p>It's the fastest, easiest, most addictive way to learn.</p>
            <p>
              <NavLink className="btn btn-primary text-light" to="/signin">
                Get Started
              </NavLink>
            </p>
          </Col>
          <Col sm="none" md="6">
            <img width="500" height="400" src={brackets} />
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default Landing;
