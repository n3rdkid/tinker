import React from "react";
import { Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Landing.css";
import { NavLink } from "react-router-dom";
import { Icon, Statistic } from "semantic-ui-react";
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import CountUp from "react-countup";
import "./Landing.css";
class Landing extends React.Component {
  state = {
    users: "",
    students: "",
    challenges: ""
  };
  componentDidMount = async () => {
    await axios
      .get("http://localhost:5000/api/admin/landing")
      .then(res => {
        console.log("Hello");
        this.setState({
          // users:res.data.users,
          // challenges:res.data.challenges,
          // students:res.data.students,
          users: 680,
          challenges: 400,
          students: 360
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <>
        <Jumbotron style={{ minHeight: "70vh" }}>
          <Row>
            <Col className="mt-5" md="6" lg="8">
              <h1 className="display-3">Learn to code, interactively!</h1>
              <p style={{ fontSize: "20px" }}>
                It's the fastest, easiest, most addictive way to learn.
              </p>
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
                  <CountUp start={0} end={this.state.users} />
                </Statistic.Value>
                <Statistic.Label>Users</Statistic.Label>
              </Statistic>

              <Statistic className="statistic-data">
                <Statistic.Value>
                  <Icon circular name="question" size="small" />
                  <CountUp start={0} end={this.state.users} />
                </Statistic.Value>
                <Statistic.Label>Challenges</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>
                  <Icon circular name="student" size="small" />
                  <CountUp start={0} end={this.state.students} />
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
