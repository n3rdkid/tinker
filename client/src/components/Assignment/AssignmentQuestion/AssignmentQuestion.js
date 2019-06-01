import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Spinner from "../../../UI/Spinner/Spinner";
import { Redirect } from "react-router";
class AssignmentQuestion extends React.Component {
  state = {
    data: ""
  };
  async componentDidMount() {

   await axios
      .get(`http://localhost:5000/api/assignments/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
      console.log("indisde assigmentquestion")
      console.log(this.state.data)
  }
  clickHandler = e => {
    let id = e.target.id || e.target.parentElement.id;
    this.props.history.push(`/assignments/question/${id}`,{assignmentId:this.props.match.params.id,questionId:id});
  };

  render() {
    let container;
    if (this.state.data === "") container = <Spinner />;
    else {
      let questionData = this.state.data;
      let questionList = [];
      let i=1;
      for (let question of questionData) {
        questionList.push(
          <div
            className="container assignmentItem"
            id={question.id}
            onClick={this.clickHandler}
          >
           No : {i++}  <span> {question.title}</span >
          </div>
        );
      }
      container = questionList;
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
