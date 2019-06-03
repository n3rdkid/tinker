import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./ChallengeItem.css";
import Col from "react-bootstrap/Col";
import Spinner from "../../../UI/Spinner/Spinner";
import HeatMap from "react-heatmap-grid";
import { Redirect } from "react-router";
const xLabels = new Array(7).fill(0).map((_, i) => `${i}`);
const yLabels = ["Sun", "Mon", "Tue","Wed","Thurs","Fri","Sat"];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 10))
  );
class ChallengeItem extends React.Component {
  state = {
    data: ""
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/challenges")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
  }
  clickHandler = e => {
    let id = e.target.id || e.target.parentElement.id;
    console.log("Click handler " + id);
    this.props.history.push(`/challenges/${id}`);
  };

  render() {
    let container;
    if (this.state.data === "") container = <Spinner />;
    else {
      let challengeData = this.state.data;
      let challengeList = [];
      for (let challenge of challengeData) {
        challengeList.push(
          <div
            className="container challengeItem"
            id={challenge.id}
            onClick={this.clickHandler}
          >
            <h4> {challenge.title} </h4>
            <small className="lead">
              {challenge.instruction.substring(0, 300) + "..."}
            </small>
            <br />

            <label className="badge badge-pill badge-primary">
              {challenge.label}
            </label>
          </div>
        );
      }
      container = challengeList;
    }
    return (
      <div>
        <Container>
          {/*Need to add Heatmap ->*/}
          <Row>
            <Col xs={3}>
              <HeatMap xLabels={xLabels} yLabels={yLabels} data={data} />
            </Col>
            <Col xs={1}> </Col>
            <Col xs={8}> {container}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ChallengeItem;
