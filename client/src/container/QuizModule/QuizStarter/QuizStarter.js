import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import {NavLink} from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class QuizStarter extends React.Component {
  quizStart=()=> {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/signin");
    }
    else
    {
      this.props.history.push("/quiz/start")
    }
  }
  
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
    <Button onClick={this.quizStart}>Start</Button>
  </p>
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
)(withRouter(QuizStarter));
;
