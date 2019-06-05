import React from "react";
import axios from "axios";
import Spinner from "../../UI/Spinner/Spinner";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { Container,Row,Col } from "react-bootstrap";

let currentValue = "";
class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionId: this.props.match.params.id,
      user:null,
      submissionInfo: null,
      testCases: null
    };
    this.scriptEvaluator = this.scriptEvaluator.bind(this);
  }
  async componentDidMount() {
    console.log("Inside Assignment submission");
    await axios
      .get(
        `http://localhost:5000/api/admin/solution/${this.state.submissionId}`
      )
      .then(response => {
        this.setState(
          {
            submissionInfo: response.data.submission,
            testCases: response.data.testCases
            ,user:response.data.username
          },
          () => {
              console.log("State is",this.state)
            currentValue = this.state.submissionInfo;

            this.scriptEvaluator();
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
      if (typeof temp === "boolean") temp = temp.toString();
      let testButton = document.querySelector(`#test${testCaseNo}`);
      if (temp === testcase.result) {
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
  render() {
    let codeMirror = <Spinner />;
    let testCases = [];
    if (this.state.submissionInfo !== null) {
      codeMirror = (
        <CodeMirror
          className="col-md-7 my-5"
          disabled
          value={this.state.submissionInfo}
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
          <button id={"test" + i} class="btn btn-outline-dark">
            Test Case {i}
          </button>
        );
      }
    }
    return (
      <>
        <Container>
            Submitted by :{this.state.user}
          <Row>
            <Col md="8">{codeMirror}</Col>

            <iframe
              className="col-md-4"
              style={{
                minHeight: "70vh",
                marginTop: "50px"
              }}
              title="myFrame"
              id="myFrame"
            />
          </Row>
          <button
            onClick={this.scriptEvaluator}
            class="btn btn-outline-success"
          >
            Run
          </button>

          {testCases}
        </Container>
      </>
    );
  }
}
export default Submission;
