import React from "react";
import axios from "axios";
class AddAssignment extends React.Component {
  state = {
    assignment_no: "",
    title: "",
    instruction: "",
    starter: "",
    label: ""
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`http://localhost:5000/api/assignments/question`, this.state)
      .then(() => console.log("Resource added sucessfully"))
      .catch(err => console.log(err.response.data));
  };
  changeState = e => {
    console.log(e.target.name + "+" + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div class="card">
        <form>
          <input
            className="form-control"
            name="assignment_no"
            placeholder="Assignment No"
            size="150"
            type="text"
            onChange={e => this.changeState(e)}
            value={this.state.assignment_no}
          />
          <input
            className="form-control"
            name="title"
            placeholder="Title.."
            size="150"
            type="text"
            onChange={e => this.changeState(e)}
            value={this.state.title}
          />
          <input
            className="form-control"
            name="instruction"
            placeholder="Instruction..."
            size="150"
            type="text"
            onChange={e => this.changeState(e)}
            value={this.state.instruction}
          />
          <input
            className="form-control"
            name="starter"
            placeholder="Starter"
            size="100"
            type="text"
            onChange={e => this.changeState(e)}
          />
          //Change Level to a select
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
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddAssignment;
