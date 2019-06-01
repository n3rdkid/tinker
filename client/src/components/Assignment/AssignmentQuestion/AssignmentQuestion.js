import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./AssignmentItem.css"
import Col from "react-bootstrap/Col";
import Spinner from "../../../UI/Spinner/Spinner";
import { Redirect } from "react-router";
class AssignmentQuestion extends React.Component {
  state = {
    data: ""
  };
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/assignments/${this.params.id}`)
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
  }
  clickHandler = e => {
    let id = e.target.id || e.target.parentElement.id;
    this.props.history.push(`/assignments/${id}`);
  };

  render() {
    let container;
    if (this.state.data === "") container = <Spinner />;
    else {
      let assignmentData = this.state.data;
      let assignmentList = [];
      for (let assignment of assignmentData) {
        assignmentList.push(
          <div
            className="container assignmentItem"
            id={assignment.id}
            onClick={this.clickHandler}
          >
            <h5>Assignment No : {assignment.id} </h5>
          </div>
        );
      }
      container = assignmentList;
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

export default AssignmentQuestion;
