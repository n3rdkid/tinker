import React from "react";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
import { UnControlled as CodeMirror } from "react-codemirror2";
import isEqual from "is-equal";
let currentValue = "";

class AssignmentCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: this.props.questionId,
      question: null,
      testCases: null,
      submitEnabled: true,
      timeStarted: new Date()
    };
    this.scriptEvaluator = this.scriptEvaluator.bind(this);
    this.submitSolution = this.submitSolution.bind(this);
  }
  async componentDidMount() {
    console.log("Inside Assignment Code");

    await axios
      .get(
        `http://localhost:5000/api/assignments/question/${
          this.state.questionId
        }`
      )
      .then(response => {
        this.setState(
          {
            question: response.data.question,
            testCases: response.data.tests
          },
          () => {
            currentValue = this.state.question.starter;
            
          }
        );
      })
      .catch(error => console.log(error));
  }
  scriptEvaluator() {
    const iframe = document.querySelector("#myFrame");
    let iframe_doc = iframe.contentDocument;
    let temp;
    let result = [];
    let testCaseNo = 1;
    for (let testcase of this.state.testCases) {
      let t1 = performance.now();
      temp = eval(currentValue.concat(testcase.test));
      let t2 = performance.now();
      temp = JSON.stringify(temp);

      let testButton = document.querySelector(`#test${testCaseNo}`);
      if (isEqual(temp, testcase.result)) {
        if (testButton.classList.contains("bg-danger"))
          testButton.classList.remove("bg-danger", "text-white");
        testButton.classList.add("bg-success", "text-white");
        result += `<p>Test ${testCaseNo++} pass! Expected : ${
          testcase.result
        } Outcome : ${temp} Execution time ${(t2 - t1).toFixed(2)} ms"</p>`;
      } else {
        document
          .querySelector(`#test${testCaseNo}`)
          .classList.add("bg-danger", "text-white");
        result += `<p>Test ${testCaseNo++} fail! Expected : ${
          testcase.result
        } Outcome : ${temp}  Execution time ${(t2 - t1).toFixed(2)} ms"</p>`;
      }
    }
    iframe_doc.open();
    iframe_doc.write(result);
    iframe_doc.close();
  }

  submitSolution() {
    let timeEnded = new Date();
    let timeTaken = timeEnded - this.state.timeStarted;
    let submission = {
      submission: currentValue,
      timeTaken: "" + timeTaken,
      username: this.props.auth.user.username,
      question_id: this.state.questionId
    };
    let questionId = this.state.questionId;
    axios
      .post("http://localhost:5000/api/assignments/submissions", submission)
      .then(response => {
        console.log(response);
        // this.props.history.push(`/results`, { timeTaken, questionId });
      })
      .catch(error => console.log(error));
  }
  render() {
    let codeMirror = <Spinner />;
    let testCases = [];
    if (this.state.question !== null) {
      codeMirror = (
        <CodeMirror
             autoFocus={true}
          autoRefresh={true}
          value={this.state.question.starter}
          options={{
            theme: "eclipse",
            lineNumbers: true,
            mode: "javascript",
            tabSize: 2,
            autofocus: true,
            foldGutter: false,
            gutters: [],
            styleSelectedText: true
          }}
          onChange={(editor, data, value) => {
            currentValue = value;
          }}
        />
      );
      for (let i = 1; i <= this.state.testCases.length; i++) {
        testCases.push(
          <button id={"test" + i} class="btn btn-outline-dark">
            Test Case {i}
          </button>
        );
      }
    }
    let submitButton;
    if (this.state.submitEnabled && this.props.auth.isAuthenticated)
      submitButton = (
        <button onClick={this.submitSolution} class="btn btn-outline-success">
          Submit
        </button>
      );
    else
      submitButton = (
        <button
          disabled
          onClick={this.submitSolution}
          class="btn btn-outline-dark"
        >
          Submit
        </button>
      );
    return (
      <>
        {codeMirror}
        <button onClick={this.scriptEvaluator} class="btn btn-outline-success">
          Run
        </button>
        {testCases}
        {submitButton}
      </>
    );
  }
}


export default AssignmentCode;
