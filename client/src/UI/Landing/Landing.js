import React from "react";
import { Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Landing.css";
import { NavLink } from "react-router-dom";
import { Icon, Statistic } from "semantic-ui-react";
import { Container, Grid } from "semantic-ui-react";
class Landing extends React.Component {
  render() {
    return (
      <>
        <Jumbotron  style={{ minHeight: "80vh" }}>
          <Row className="align-items-center">
            <Col className="mt-5" md="6" lg="8">
              <h1 className="display-3">Learn to code, interactively!</h1>
              <p style={{fontSize:"20px"}}>It's the fastest, easiest, most addictive way to learn.</p>
              <p>
                <NavLink className="btn btn-primary text-light" to="/signin">
                  Get Started
                </NavLink>
              </p>
            </Col>
           </Row>
        </Jumbotron>
        <Grid relaxed>
          <Grid.Row>
            <Grid.Column width={3} />
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
          </Grid.Row>
        </Grid>
  </>
    );
  }
}

export default Landing;
