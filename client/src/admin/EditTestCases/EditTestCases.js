import React from "react";
import axios from "axios";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import AddTestCases from "../AddTestCases/AddTestCases";
import { connect } from "react-redux";
import Aside from "../../UI/Admin/Aside";
import classnames from "classnames";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
class EditQuestion extends React.Component {
  state = {
    test: "",
    result: "",
    testId: 1,
    errors: "",
    message: ""
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
        if (res.data.errors) {
          this.setState({ errors: res.data.errors, message: "" });
        } else {
          this.setState({ message: res.data.message });
        }
      })
      .catch(err => console.log(err.response));
  };
  changeState = e => {
    console.log([e.target.name], e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let { errors } = this.state;
    console.log("Render Errors",errors);
    let display = (
      <div className="card offset-xs-1" id="assignment_card">
        <div className="card-header">
          Test No :
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
          <Form>
          <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ fontSize: "20px" }}>Test</Form.Label>
              <FormControl
                className={classnames({ "is-invalid": errors.test })}
                name="test"
                placeholder={this.state.title}
                type="text"
                onChange={e => this.changeState(e)}
                value={this.state.test}
              />
              <Form.Control.Feedback type="invalid">
                {errors.test}
              </Form.Control.Feedback>
            </Form.Group>  
            
            <Form.Group controlId="formBasicPassword"> 
            <Form.Label style={{ fontSize: "20px" }}>Result</Form.Label>
            <FormControl
              className={classnames({ "is-invalid": errors.result })}
              name="result"
              placeholder={this.state.result}
              type="text"
              onChange={e => this.changeState(e)}
              value={this.state.result}
            />
            <Form.Control.Feedback type="invalid">
              {errors.result}
            </Form.Control.Feedback>
            </Form.Group> 
            <br />
            <button
              class="btn btn-primary"
              onClick={e => this.onUpdateQuestion(e)}
            >
              Update
            </button>
            <div className="text-primary">{this.state.message}</div>
          </Form>
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
