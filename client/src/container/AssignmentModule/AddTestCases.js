import React from "react";
import axios from "axios";
import spinner from "../../UI/Spinner/Spinner";
class AddTestCases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question_id: this.props.location.state.questionId,
      test: "",
      result: "",
      testCases: null
    };
    this.actionHandler=this.actionHandler.bind(this)
  }
  async componentDidMount() {
    await axios
      .get(
        `http://localhost:5000/api/assignments/testcases/${
          this.state.question_id
        }`
      )
      .then(response => this.setState({ testCases: response.data }))
      .catch(err => console.log("Error Loading Test cases"));
    console.log("Testcases", this.state.testCases);
  }
  loadTestCases = async () => {
    await axios
      .get(
        `http://localhost:5000/api/assignments/testcases/${
          this.state.question_id
        }`
      )
      .then(response => this.setState({ testCases: response.data }))
      .catch(err => console.log("Error Loading Test cases"));
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`http://localhost:5000/api/assignments/testcases`, {
        ...this.state,
        question_id: "" + this.state.question_id
      })
      .then(() => console.log("Added testcases"))
      .catch(err => console.log(err.response.data));
    this.loadTestCases();
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    let tests = [];
    let table = <p>Sorry No test cases defined yet!</p>;
    if (!this.state.testCases) {
      tests = <p>No test cases Yet</p>;
    } else {
      let testCases = this.state.testCases;
      testCases.forEach(test => {
        tests.push(
          <tr>
            <td>{test.id}</td>
            <td>{test.test}</td>
            <td>{test.result}</td>
          </tr>
        );
      });
      table = (
        <table>
          <tr>
            <th>Id</th>
            <th>Test</th>
            <th>Expected outcome</th>
          </tr>
          {tests}
        </table>
      );
    }
    return (
      <div class="card">
        <form>
          <input
            className="form-control"
            name="question_id"
            placeholder="Question No"
            type="text"
            onChange={e => this.changeState(e)}
            value={this.state.question_id}
          />
          <input
            className="form-control"
            name="test"
            placeholder="Title.."
            type="text"
            onChange={e => this.changeState(e)}
            value={this.state.test}
          />
          <input
            className="form-control"
            name="result"
            placeholder="Expected Result"
            type="text"
            onChange={e => this.changeState(e)}
            value={this.state.result}
          />
          <br />
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
        {table}
      </div>
    );
  }
}
export default AddTestCases;
