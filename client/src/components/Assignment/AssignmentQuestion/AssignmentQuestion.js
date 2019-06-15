import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Spinner from "../../../UI/Spinner/Spinner";
import { Redirect } from "react-router";
import {NavLink} from "react-router-dom";
class AssignmentQuestion extends React.Component {
  state = {
    data: ""
  };
  async componentDidMount() {
    await axios
      .get(
        `http://localhost:5000/api/assignments/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
    console.log("indisde assigmentquestion");
    console.log(this.state.data);
  }
  clickHandler = e => {
    let id = e.target.id || e.target.parentElement.id;
    this.props.history.push(`/assignments/question/${id}`, {
      assignmentId: this.props.match.params.id,
      questionId: id
    });
  };

  render() {
    let container;
    if (this.state.data === "") container = <Spinner />;
    else {
      let questionData = this.state.data;
      let questionList = [];
      let i = 1;
      if (questionData.error) {
        container = <p>Due date has passed!</p>;
      } else {
        for (let question of questionData) {
          questionList.push(
            <div
              className="container assignmentItem"
              id={question.id}
              onClick={this.clickHandler}
            >
              No : {i++} <span> {question.title}</span>
            </div>
          );
        }
        container = questionList;
      }
    }
    return (
      <>
        <Container className="p-2 mt-2">
          {/*Need to add Heatmap ->*/}
          <Row><Col xs={4}>
            <div>
              <Card className="text-center">
                <Card.Header className="text-center">Notice</Card.Header>
                <Card.Body>
                  <Card.Title>Don't be Late</Card.Title>
                  <p>No Exceptions will be allowed</p>
                  <NavLink
                    class="btn"
                    style={{
                      borderRadius: "0",
                      background: "transparent",
                      color: "#FF502F"
                    }}
                  >
                    Read More
                  </NavLink>
                </Card.Body>
              </Card>
            </div>
            </Col>
            <Col xs={8}> {container}</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AssignmentQuestion;
