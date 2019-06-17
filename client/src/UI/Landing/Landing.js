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
import hero from "../../assets/hero.jpg";
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
        <Jumbotron style={{ padding: "0" }} fluid={true} class="hero">
          <Row
            className="no-gutters"
            style={{ minHeight: "500px", background: "#F7F7F7" }}
          >
            <Col className="mt-5 ml-3 d-flex align-items-center" md="6">
              <div>
                <h1 style={{ fontSize: "4rem", color: "#211717" }}>
                  Future-Proof Your Career
                </h1>
                <p style={{ fontSize: "1.34rem", color: "#454d66" }}>
                  It's the fastest, easiest, most addictive way to learn.
                </p>
              </div>
            </Col>
            <Col className="d-flex align-items-center" sm={0} md={4}>
              <img width="400px" src={hero} alt="hero" />
            </Col>
          </Row>
          <Row
            className="no-gutters"
            style={{ minHeight: "350px", background: "#525252" }}
          >
            <Col
              className="ml-3 d-flex align-items-center justify-content-center"
              md={5}
              style={{ paddingTop: "10px" }}
            >
              <div>
                <h2
                  style={{
                    lineHeight: "3rem",
                    fontSize: "2.5rem",
                    color: "white"
                  }}
                >
                  Continuously build your skills with{" "}
                  <span style={{ color: "#f07b3f" }}>Tinker</span>
                </h2>
                <p style={{ fontSize: "1.34rem", color: "#dedede" }}>
                  Whether you want to improve your problem solving skills,
                  master a new skill, or build expertise in the mission-critical
                  topics you need for career advancement, Tinker helps you
                  future-proof your career.
                </p>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <NavLink
                style={{
                  display: "inline-block",
                  color: "#f6f6f6",
                  fontSize: "1.5rem"
                }}
                to="/signin"
              >
                <span
                  style={{
                    borderBottom: "2px solid #f07b3f",
                    paddingBottom: "5px"
                  }}
                >
                  Try Now <span style={{ color: "#f07b3f" }}>></span>
                </span>
              </NavLink>
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
