import React from "react";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "../../../../node_modules/codemirror/lib/codemirror.css";
import "../../../../node_modules/codemirror/theme/neo.css";
import "../../../../node_modules/codemirror/mode/javascript/javascript";
import spinner from "../../../UI/Spinner/Spinner";
import { isObject } from "util";
let currentValue = "";
class ChallengeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: this.props.match.params.id,
      question: null,
      testCases: null
    };
    this.scriptEvaluator = this.scriptEvaluator.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/challenges/${this.state.questionId}`)
      .then(response => {
        this.setState(
          {
            question: response.data.challenge,
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
    let i = 1;
    let executionTime;
    for (let testcase of this.state.testCases) {
      console.log(testcase.test);
      let t1 = performance.now();
      temp = eval(currentValue.concat(testcase.test));
      let t2 = performance.now();
      console.log("This is your output"+temp)
      if (temp.toString() === testcase.result)
        result += `<p>Test ${i++} pass! Expected : ${
          testcase.result
        } Outcome : ${temp} Execution time ${(t2 - t1).toFixed(2)} ms"</p>`;
      else
        result += `<p>Test ${i++} fail! Expected : ${
          testcase.result
        } Outcome : ${temp}  Execution time ${(t2 - t1).toFixed(2)} ms"</p>`;
    }

    iframe_doc.open();
    iframe_doc.write(result);
    iframe_doc.close();
  }

  render() {
    let codeMirror = <Spinner />;
    let testCases = [];
    if (this.state.question !== null) {
      codeMirror = (
        <CodeMirror
          className="col-md-7"
          value={this.state.question.starter}
          options={{
            theme: "neo",
            lineNumbers: true,
            mode: "jsx",
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
          <button class="btn btn-outline-dark">Test Case {i}</button>
        );
      }
    }
    return (
      <>
        <div>
          {/* <ul className="nav nav-tabs">
            <li className="nav-item">
              <a data-toggle="tab" href="#instructions" className="nav-link">
                Instructions
              </a>
            </li>
            <li className="nav-item">
              <a data-toggle="tab" href="#code" className="nav-link">
                Code
              </a>
            </li>
            <li className="nav-item">
              <a data-toggle="tab" href="#resources" className="nav-link">
                Resources
              </a>
            </li>
          </ul>*/}
          <div class="tab-content bg-success">
            <div id="instructions" class="tab-pane fade in active  bg-danger">
              <h3>Instructions</h3>
            </div>
            <div id="code" class="tab-pane fade  bg-light">
              <h3>Code</h3>
            </div>
            <div id="resources" class="tab-pane fade  bg-dark">
              <h3>Resources</h3>
            </div>
          </div>
          <div className="row">
            {codeMirror}
            <iframe title="myFrame" id="myFrame" className="col-md-5" />
          </div>
          <button
            onClick={this.scriptEvaluator}
            class="btn btn-outline-success"
          >
            Run
          </button>
          {testCases}
        </div>
      </>
    );
  }
}
export default ChallengeView;
