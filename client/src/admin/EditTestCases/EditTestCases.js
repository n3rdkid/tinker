import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import AddTestCases from "../AddTestCases/AddTestCases";
import { connect } from "react-redux";
import Aside from "../../UI/Admin/Aside";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
class EditQuestion extends React.Component {
  state = {
    test: "",
    result: "",
    testId:1
  };
  componentDidMount() {
    if (this.props.auth.user.role !== "teacher")
      this.props.history.push("/restricted");
  }
  loadQuestions = async () => {
    console.log("Inside Ediq ", this.props);

    await axios
      .get(
        `http://localhost:5000/api/assignments/testCases/${this.state.testId}`
      )
      .then(response => {
        console.log(response);
            this.setState({
              testId: response.data[0].id,
              test: response.data[0].test,
              result: response.data[0].result
            });
  
      })
      .catch(error => console.log(error));
    //Git test
  };
  onUpdateQuestion = async e => {
    e.preventDefault();
    console.log("Update here", this.state);
    await axios
      .put(`http://localhost:5000/api/assignments/test`, this.state)
      .then(res => {
        console.log("Message",res)
      })
      .catch(err => console.log(err.response));
  };
  changeState = e => {
    console.log([e.target.name],e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let display = (
      <div className="card offset-xs-1" id="assignment_card">
        <div className="card-header">
          Question No :{" "}
          <input
            className="form-control"
            name="testId"
            placeholder="{ 1 || 2 || 3||....||n}"
            type="text"
            onChange={this.changeState}
            value={this.state.testId}
          />
          <button class="btn btn-primary" onClick={this.loadQuestions}>
            Load
          </button>
        </div>
        <br />
        <div className="card-body">
          <div className="text-center text-dark" style={{ fontSize: "26px" }}>
            Edit Test Cases
          </div>
          <form>
            <div class="form-group">
              <label style={{ fontSize: "20px" }}>Title</label>
              <input
                className="form-control"
                name="test"
                placeholder={this.state.title}
                type="text"
                onChange={e => this.changeState(e)}
                value={this.state.test}
              />
            </div>
            <label style={{ fontSize: "20px" }}>Result</label>
            <textarea
              className="form-control"
              name="result"
              placeholder={this.state.instruction}
              type="text"
              onChange={e => this.changeState(e)}
              value={this.state.result}
            />
            <br />
            <button
              class="btn btn-primary"
              onClick={e => this.onUpdateQuestion(e)}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );

    return (
      <Container fluid style={{ padding: "0" }}>
        <Row>
          <Col xs="3">
            <Aside />
          </Col>
          <Col xs={{ span: "9", offset: "3" }}>{display}</Col>
        </Row>
      </Container>
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
)(EditQuestion);
