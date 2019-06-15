import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {NavLink} from "react-router-dom";
import Col from "react-bootstrap/Col";
import Spinner from "../../../UI/Spinner/Spinner";
import { Redirect } from "react-router";
import "./AssignmentItem.css"
class AssignmentItem extends React.Component {
  state = {
    data: ""
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/assignments")
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
            className="d-flex container assignmentItem"
            id={assignment.id}
            onClick={this.clickHandler}
          >
            <span>Assignment No : {assignment.id} </span>
            <span className="mx-auto">Due : {assignment.dueDate.split("T")[0]} </span>
            <button className="ml-auto btn btn-success">View</button>
          </div>
        );
      }
      container = assignmentList;
    }
    return (
      <>
        <Container fluid={true} style={{background:"#f5f5f5",paddingTop:"16px",margin:"0"}}>
          {/*Need to add Heatmap ->*/}
          <Row>
            <Col xs={4}>
              <div>
                <Card className="text-center">
                <Card.Header className="text-center">
                      Notice
                    </Card.Header>
                  <Card.Body>
                  <Card.Title>
                  Don't be Late
                  </Card.Title>
                  <p>No Exceptions will be allowed</p>
                  <NavLink class="btn" style={{borderRadius:"0",background:"transparent",color:"#FF502F"}}>Read More</NavLink>
                  </Card.Body>
                </Card>
              </div>
              {/* <HeatMap xLabels={xLabels} yLabels={yLabels} data={data} /> */}
            </Col>
            <Col xs={8}> {container}</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AssignmentItem;
