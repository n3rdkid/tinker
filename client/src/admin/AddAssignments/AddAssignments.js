import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
class AddAssignment extends React.Component {
  state = {
    dueDate: new Date(),
    assignment_no: "",
    title: "",
    instruction: "",
    starter: "",
    label: ""
  };
  onSubmit = e => {
    e.preventDefault();

    // if(this.state.dueDate)
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
  };
  onAddQuestion = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`http://localhost:5000/api/assignments/question`, this.state)
      .then(() => console.log("Resource added sucessfully"))
      .catch(err => console.log(err.response.data));
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let display = (
      <div class="card">
        Assignment No :
        <input
          className="form-control"
          name="assignment_no"
          placeholder="{ 1 || 2 || 3||....||n}"
          size="150"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.assignment_no}
        />
        <br />
        Add Question
        <form>
            <label for="exampleInputEmail1">Title</label>
            <input
              className="form-control"
              name="title"
              placeholder="Title.."
              size="150"
              type="text"
              onChange={e => this.changeState(e)}
              value={this.state.title}
            />
              <label for="exampleInputEmail1">Instruction</label>
          <textarea
            className="form-control"
            name="instruction"
            placeholder="Instruction..."
            size="150"
            type="text"
            onChange={e => this.changeState(e)}
            value={this.state.instruction}
          ></textarea>
            <label for="exampleInputEmail1">Starter</label>
          <textarea
            className="form-control"
            name="starter"
            placeholder="Starter"
            size="100"
            type="text"
            onChange={e => this.changeState(e)}
          ></textarea>
            <label for="exampleInputEmail1">Label</label>
          <select
            className="form-control"
            name="label"
            placeholder="Label.."
            onChange={e => this.changeState(e)}
            value={this.state.label}
          >
            <option value="array">array</option>
            <option value="condition">condition</option>
            <option value="function">function</option>
            <option value="Test">Test</option>
          </select>
          <br />
          <button onClick={e => this.onAddQuestion(e)}>Submit</button>
        </form>
      </div>
    );

    let utc = new Date().toJSON().slice(0, 10);
    let minDate = new Date().getDate();
    console.log("Min date", utc);
    return (
      <Container>
        <Row>
          <Col md="6">
            Add new assignment
            <div className="card mx-auto">
              <div className="card-body">
                <form>
                  <div class="col-auto">
                    <label class="sr-only" for="inlineFormInputGroup">
                      Due Date
                    </label>
                    <div class="input-group mb-2">
                      <div class="input-group-apend">
                        <div class="input-group-text">
                          <button
                            className="btn btn-primary"
                            onClick={e => this.onSubmit(e)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <input
                        className="form-control"
                        name="dueDate"
                        placeholder="Due Date"
                        min={utc}
                        type="date"
                        onChange={e => this.changeState(e)}
                        value={this.state.dueDate}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{display}</Col>
        </Row>
      </Container>
    );
  }
}
export default AddAssignment;
