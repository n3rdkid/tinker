import React from "./node_modules/react";
import axios from "./node_modules/axios";
import Row from "./node_modules/react-bootstrap/Row";
import Container from "./node_modules/react-bootstrap/Container";
import Card from "./node_modules/react-bootstrap/Card";
import ListGroup from "./node_modules/react-bootstrap/ListGroup";

import Col from "./node_modules/react-bootstrap/Col";
import Spinner from "../../../UI/Spinner/Spinner";
import { Redirect } from "./node_modules/react-router";
class AssigntmentItem extends React.Component {
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
              <Card border="danger" style={{ width: "18rem" }}>
                <Card.Header style={{ backgroundColor: "#78B0CD" }}>
                  Challenges
                </Card.Header>
                <ListGroup variant="outline-success">
                  <ListGroup.Item action variant="success">
                    Odd Test
                  </ListGroup.Item>
                  <ListGroup.Item action variant="success">
                    Prime Test
                  </ListGroup.Item>
                  <ListGroup.Item action variant="success">
                    Tower of honai problem
                  </ListGroup.Item>
                  <ListGroup.Item action variant="success">
                    Chicken Leg problem
                  </ListGroup.Item>
                  <ListGroup.Item action variant="success">
                    Budget calculation
                  </ListGroup.Item>
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

export default AssigntmentItem;
