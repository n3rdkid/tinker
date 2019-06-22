import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import AddTestCases from "../AddTestCases/AddTestCases";
import { connect } from "react-redux";
import Aside from "../../UI/Admin/Aside";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
class EditQuestion extends React.Component {
  state = {
    title: "",
    instruction: "",
    starter: "",
    label: "",
    question_no: this.props.match.params.id,
    message:"",
    loading:true
  };
  componentDidMount = async () => {
    console.log("Inside Ediq ", this.props);
    if (this.props.auth.user.role !== "teacher")
      this.props.history.push("/restricted");

    await axios
      .get(
        `http://localhost:5000/api/assignments/question/${
          this.state.question_no
        }`
      )
      .then(response => {
        console.log(response);
        this.setState({
          title: response.data.question.title,
          instruction: response.data.question.instruction,
          starter: response.data.question.starter,
          label: response.data.question.label
        });
      })
      .catch(error => console.log(error));
    //Git test
  };

  loadQuestions = async () => {
    console.log("Inside Ediq ", this.props);
    if (this.props.auth.user.role !== "teacher")
      this.props.history.push("/restricted");

    await axios
      .get(
        `http://localhost:5000/api/assignments/question/${
          this.state.question_no
        }`
      )
      .then(response => {
        console.log(response);
        this.setState({
          title: response.data.question.title,
          instruction: response.data.question.instruction,
          starter: response.data.question.starter,
          label: response.data.question.label,
          message:""
        });
      })
      .catch(error => console.log(error));
    //Git test
    this.setState({loading:false})
  };
  onUpdateQuestion = async e => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/api/assignments/question`, this.state)
      .then(res => {
        this.setState({message:res.data.message},console.log(this.state))
      })
      .catch(err => console.log(err.response));
      this.setState({loading:false})
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let display = (
      <div className="card offset-xs-1" id="assignment_card">
        <div className="card-header">
          Question No :{" "}
          <input
            className="form-control"
            name="question_no"
            placeholder="{ 1 || 2 || 3||....||n}"
            type="text"
            onChange={e => this.changeState(e)}
            value={this.state.question_no}
          />
          <button class="btn btn-primary" onClick={this.loadQuestions}>
            Load
          </button>
        </div>
        <br />
        <div className="card-body">
          <div className="text-center text-dark" style={{ fontSize: "26px" }}>
            Edit Question
          </div>
          <form>
            <div class="form-group">
              <label style={{ fontSize: "20px" }}>Title</label>
              <input
                className="form-control"
                name="title"
                placeholder={this.state.title}
                type="text"
                onChange={e => this.changeState(e)}
                value={this.state.title}
              />
            </div>
            <label style={{ fontSize: "20px" }}>Instruction</label>
            <textarea
              className="form-control"
              name="instruction"
              placeholder={this.state.instruction}
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
              placeholder={this.state.label}
              onChange={e => this.changeState(e)}
              value={this.state.label}
            >
              <option value="array">array</option>
              <option value="condition">condition</option>
              <option value="function">function</option>
              <option value="Test">Test</option>
            </select>
            <br />
            <button
              class="btn btn-primary"
              onClick={e => this.onUpdateQuestion(e)}
            >
              Update
            </button>
            <div>{this.state.message}</div>
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
