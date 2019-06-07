import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Spinner from "../../UI/Spinner/Spinner";
import { Redirect } from "react-router";
import { connect } from "react-redux";
class AssignmentQuestion extends React.Component {
  state = {
    data: ""
  };
  async componentDidMount() {
    
    if(this.props.auth.role!=="teacher")
    this.props.history.push("/restricted")

    await axios
      .get(
        `http://localhost:5000/api/admin/assignments/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
  }
  clickHandler = e => {
    let id = e.target.id || e.target.parentElement.id;
    this.props.history.push(`/admin/question/${id}`, {
      assignmentId: this.props.match.params.id,
      questionId: id
    });
  };

  render() {
    let container;
    if (this.state.data === "") container = <Spinner />;
    else {
        console.log("data inside question Data",this.state.data)
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
      <div>
        <Container>
          {/*Need to add Heatmap ->*/}
          <Row>
            <Col xs={3}>
             
  
            </Col>
            <Col xs={1}> </Col>
            <Col xs={8}> {container}</Col>
          </Row>
        </Container>
      </div>
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
)(AssignmentQuestion);