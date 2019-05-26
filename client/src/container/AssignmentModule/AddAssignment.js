import React from "react";
import axios from "axios";
class AddAssignment extends React.Component {
  state = {
    assignment_id: "",
    title: "",
    description: "",
    example: "",
    testcase: ""
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // axios
    //   .post(`http://localhost:5000/api/challenges/resources/`, this.state)
    //   .then(() => console.log("Resource added sucessfully"))
    //   .catch(err => console.log(err.response.data));
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          name="assignment_id"
          placeholder="Assignment id"
          size="150"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.assignment_id}
        />
        <input
          name="title"
          placeholder="Title.."
          size="150"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.title}
        />
        <input
          name="description"
          placeholder="Description.."
          size="150"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.description}
        />
        <input
          name="example"
          placeholder="Example.."
          size="100"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.example}
        />
        <input
          name="testcase"
          placeholder="Testcase.."
          size="100"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.testcase}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </div>
    );
  }
}
export default AddAssignment;
