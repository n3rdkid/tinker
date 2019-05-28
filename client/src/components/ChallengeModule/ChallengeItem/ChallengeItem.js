import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Col from "react-bootstrap/Col";
import "./ChallengeItem.css";
import Spinner from "../../../UI/Spinner/Spinner";
import { Redirect } from "react-router";
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
          <Row>
            <Col xs={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Header>Challenges</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                </ListGroup>
              </Card>
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
