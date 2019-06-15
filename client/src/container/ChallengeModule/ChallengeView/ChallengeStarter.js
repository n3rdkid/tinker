import React from "react";
import { Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
// import quiz from "../../../assets/quiz.jpg"
class ChallengeStarter extends React.Component {
  viewChallenges = () => {
    this.props.history.push("/challenges");
  };

  render() {
    return (
      <Jumbotron style={{ padding: "0" }} fluid={true} class="hero">
        <Row
          className="no-gutters"
          style={{ minHeight: "500px", background: "#f1f1f1" }}
        >
          <Col className="mt-5 ml-3 d-flex align-items-center" md="6">
            <div>
              <h1 style={{ fontSize: "2.44rem", color: "#211717" }}>
                Don't assume you know.
                <br />
                <span style={{ fontSize: "4rem", color: "#ff6337" }}>
                  TEST YOURSELF!
                </span>
              </h1>
              <p style={{ fontSize: "1.34rem", color: "#454d66" }}>
                Where do you stand today?
              </p>
            </div>
          </Col>
          <Col className="d-flex align-items-center" sm={0} md={4}>
            {/* <img width="400px" src={quiz} alt="quiz" /> */}
          </Col>
        </Row>
        <Row
          className="no-gutters"
          style={{ minHeight: "350px", background: "#525252" }}
        >
          <Col
            className="ml-3 d-flex align-items-center justify-content-center"
            md={6}
            style={{ paddingTop: "10px" }}
          >
            <div>
              <h3
                style={{
                  lineHeight: "3rem",
                  fontSize: "2.5rem",
                  color: "white"
                }}
              >
                Don't just guess where your skills stand -
                <span style={{ color: "#f07b3f" }}>PROVE IT.</span>
              </h3>
              <p style={{ fontSize: "1.34rem", color: "#dedede" }}>
                This is your future. Define your skills by the only metric that
                matches the pace of change. Take a free assessment to get your
                Skill IQ today.
              </p>
            </div>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <NavLink
              style={{ color: "white", fontSize: "1.5rem", padding: "5px" }}
              onClick={this.viewChallenges}
            >
              <span
                style={{
                  borderBottom: "2px solid #f07b3f",
                  paddingBottom: "5px"
                }}
              >
                Explore Challenges <span style={{ color: "#f07b3f" }}>></span>
              </span>
            </NavLink>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  null
)(withRouter(ChallengeStarter));
