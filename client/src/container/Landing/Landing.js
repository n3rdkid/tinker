import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
class Landing extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "../../UI/Particles/Bubbles.js";
    script.className = "external-script";
    script.type = "text/jsx";
    document.body.appendChild(script);
    const script1 = document.createElement("script");
    script1.src = "../../UI/Particles/main.js";
    script1.type = "text/jsx";
    script.className = "external-script";
    document.querySelector(".particles").appendChild(script1);
  }
  render() {
    return (
      <div className="particles">
        <div className="info" id="infoId" />
        <canvas id="myCanvas" />
        <footer id="footer" />

        <Jumbotron md="6">
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
          </Row>
        </Jumbotron>
      </div>
    );
  }
}

export default Landing;
