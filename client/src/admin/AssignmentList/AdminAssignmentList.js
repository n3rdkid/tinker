import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Col from "react-bootstrap/Col";
import Spinner from "../../UI/Spinner/Spinner";
import "./AssignmentItem.css"
class AdminAssignmentList extends React.Component {
  state = {
    data: ""
  };
  componentDidMount() {
    console.log("Inside AssignmentItem")
    axios
      .get("http://localhost:5000/api/admin/assignments")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
      console.log("Inside Assignment Item",this.state.data)
  }
  clickHandler = e => {
    let id = e.target.id || e.target.parentElement.id;
    this.props.history.push(`/admin/assignments/${id}`);
  };
  addHandler=()=>
  {
    this.props.history.push("admin/add/assignments");
  }

  render() {
    let container;
    if (this.state.data === "") container = <Spinner />;
    else {
      let assignmentData = this.state.data;
      let assignmentList = [];
      for (let assignment of assignmentData) {
        assignmentList.push(
          <div 
            className="d-flex container assignmentItem"
            id={assignment.id}
            onClick={this.clickHandler}
          >
            <span>Assignment No : {assignment.id} </span>
            <span className="mx-auto">Due : {assignment.dueDate.split("T")[0]} </span>
            <button className="ml-auto btn btn-success">View Submissions</button>
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
            <Card>
            <button class="btn btn-primary" onClick={this.addHandler}>Add Assignment</button>
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

export default AdminAssignmentList;
