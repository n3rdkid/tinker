import React from "react";
import axios from "axios";
class AddTestCases extends React.Component {
  state = {
    question_id: this.props.location.state.questionId,
    test: "",
    result: ""
  };
  componentDidMount(){
      console.log(this.props)
  }
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`http://localhost:5000/api/assignments/testcases`, {...this.state,question_id:""+this.state.question_id})
      .then(() => console.log("Test Case added sucessfully"))
      .catch(err => console.log(err.response.data));
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div class="card">
        <form>
        <input className="form-control"
          name="question_id"
          placeholder="Question No"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.question_id}
        />
        <input className="form-control"
          name="test"
          placeholder="Title.."
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.test}
        />
        <input className="form-control"
          name="result"
          placeholder="Expected Result"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.result}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddTestCases;
