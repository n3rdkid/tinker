import React from "react";
import { Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Landing.css";
import { NavLink } from "react-router-dom";
import brackets from "../../../src/assets/404.jpg";
import { Icon, Statistic } from "semantic-ui-react";
import { Container, Grid } from "semantic-ui-react";
class Landing extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron style={{ maxHeight: "60vh" }}>
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
        <Grid relaxed>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width={9}>
              <Statistic.Group>
                <Statistic>
                  <Statistic.Value>
                    <Icon circular name="users" size="small" />
                    80+
                  </Statistic.Value>
                  <Statistic.Label>Users</Statistic.Label>
                </Statistic>

                <Statistic>
                  <Statistic.Value>
                    <Icon circular name="question" size="small" />
                    100+
                  </Statistic.Value>
                  <Statistic.Label>Challenges</Statistic.Label>
                </Statistic>

                <Statistic>
                  <Statistic.Value>
                    <Icon circular name="student" size="small" />
                    60
                  </Statistic.Value>
                  <Statistic.Label>Students</Statistic.Label>
                </Statistic>

                <Statistic>
                  <Statistic.Value>
                    <Icon circular name="js" size="small" />
                  </Statistic.Value>
                  <Statistic.Label>Language Support</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Landing;
