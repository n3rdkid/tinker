import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import AddTestCases from "../AddTestCases/AddTestCases";
import { connect } from "react-redux";
import Aside from "../../UI/Admin/Aside";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
class AddAssignment extends React.Component {
  state = {
    dueDate: new Date(),
    assignment_no: "",
    title: "",
    instruction: "",
    starter: "",
    label: "",
    question_no: "",
    displayTestCases: false,message:""
  };
  componentDidMount = () => {
    console.log("Inside Add Assignments ", this.props);
    if (this.props.auth.user.role !== "teacher")
      this.props.history.push("/restricted");
  };
  onSubmit = e => {
    e.preventDefault();

    let date = new Date(this.state.dueDate)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    axios
      .post(`http://localhost:5000/api/assignments`, { dueDate: date })
      .then(resp => {
        this.setState({
          displayAddQuestion: true,
          assignment_no: "" + resp.data.insertId
        });
        console.log("Assignment added sucessfully");
      })
      .catch(err => console.log(err.response));
    document.querySelector("#assignment_card").focus();
  };
  onAddQuestion = async e => {
    e.preventDefault();
    await axios
      .post(`http://localhost:5000/api/assignments/question`, this.state)
      .then(res => {
        let question_no = res.data.results.insertId;
        this.setState({
          ...this.state,
          question_no: "" + question_no,
          displayTestCases: true,
          message:res.data.message
        });
      })
      .catch(err => console.log(err.response));
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let displayTestCases = "";
    if (this.state.displayTestCases)
      displayTestCases = (
        <AddTestCases id="testcase" question_no={this.state.question_no} />
      );
    let display = (
      <div className="card offset-xs-1" id="assignment_card">
        <div className="card-header">
          Assignment No : {this.state.assignment_no}
        </div>
        <input
          hidden
          className="form-control"
          name="assignment_no"
          placeholder="{ 1 || 2 || 3||....||n}"
          size="150"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.assignment_no}
        />
        <br />
        <div className="card-body">
          <div className="text-center text-dark" style={{ fontSize: "26px" }}>
            Add Question
          </div>
          <form>
            <div class="form-group">
              <label style={{ fontSize: "20px" }}>Title</label>
              <input
                className="form-control"
                name="title"
                placeholder="Title.."
                type="text"
                onChange={e => this.changeState(e)}
                value={this.state.title}
              />
            </div>
            <label style={{ fontSize: "20px" }}>Instruction</label>
            <textarea
              className="form-control"
              name="instruction"
              placeholder="Instruction"
              type="text"
              onChange={e => this.changeState(e)}
              value={this.state.instruction}
            />
            <label style={{ fontSize: "20px" }}>Starter</label>
            <textarea
              className="form-control"
              name="starter"
              placeholder={`function hello()
{
  return true;
}`}
              rows="5"
              size="100"
              type="text"
              onChange={e => this.changeState(e)}
            />
            <label style={{ fontSize: "20px" }}>Label</label>
            <select
              className="form-control"
              name="label"
              placeholder="Label.."
              onChange={e => this.changeState(e)}
              value={this.state.label}
            >
               <option value="">Select a label</option>
              <option value="array">array</option>
              <option value="condition">condition</option>
              <option value="function">function</option>
              <option value="Test">Test</option>
            </select>
            <br />
            <button
              class="btn btn-primary"
              onClick={e => this.onAddQuestion(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );

    let utc = new Date().toJSON().slice(0, 10);
    let minDate = new Date().getDate();
    console.log("Min date", utc);
    return (
      <Container fluid style={{ padding: "0" }}>
        <Row>
          <Col xs="3">
            <Aside addHandler={this.addHandler} />
          </Col>
          <Col xs={{ span: "9", offset: "3" }}>
            <Row>
              <Col>
                <form>
                  <div class="card">
                    <div class="card-header"> Add new assignment</div>
                    <div class="input-group mb-2">
                      <input
                        className="form-control"
                        name="dueDate"
                        placeholder="Due Date"
                        min={utc}
                        type="date"
                        onChange={e => this.changeState(e)}
                        value={this.state.dueDate}
                      />
                      <button
                        className="btn btn-primary"
                        onClick={e => this.onSubmit(e)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </Col>
            </Row>
            <Row>
              <Col >{display}</Col>
            </Row>
            <Row>
              <Col>{displayTestCases}</Col>
            </Row>
          </Col>
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
)(AddAssignment);
