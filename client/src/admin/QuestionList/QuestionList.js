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
import Aside from "../../UI/Admin/Aside";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
class AssignmentQuestion extends React.Component {
  state = {
    data: ""
  };
  componentDidMount = async () => {
    console.log("Inside QuestionList ", this.props);
    if (this.props.auth.user.role !== "teacher")
      this.props.history.push("/restricted");

    await axios
      .get(
        `http://localhost:5000/api/admin/assignments/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
  };
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
      console.log("data inside question Data", this.state.data);
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
        <Container fluid style={{ padding: "0" }}>
          <Row>
            <Col xs={3}>
              <Aside addHandler={this.addHandler} />
            </Col>
            <Col xs={9}>{container}<><button
            className="btn btn-danger"
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            Go Back
          </button></></Col>
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
