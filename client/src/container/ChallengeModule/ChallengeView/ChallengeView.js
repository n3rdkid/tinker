import React, { Suspense } from "react";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
import { UnControlled as CodeMirror } from "react-codemirror2";
import spinner from "../../../UI/Spinner/Spinner";
import { isObject } from "util";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
const ChallengeInstructions = React.lazy(() =>
  import("../ChallengeInstructions/ChallengeInstructions")
);
const ChallengeResources = React.lazy(() =>
  import("../ChallengeResources/ChallengeResources")
);
const ChallengeLeaderboard = React.lazy(() =>
  import("../ChallengeResult/ChallengeLeaderboard")
);
let currentValue = "";
class ChallengeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: this.props.match.params.id,
      question: null,
      testCases: null,
      submitEnabled: false,
      timeStarted: new Date()
    };
    this.scriptEvaluator = this.scriptEvaluator.bind(this);
    this.submitSolution = this.submitSolution.bind(this);
  }

  async loadData() {
    await axios
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
    let testCasesPassed = 0;
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
        testCasesPassed++;
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
        if (this.state.submitEnabled) this.setState({ submitEnabled: false });
      }
      if (testCasesPassed === this.state.testCases.length)
        this.setState({ submitEnabled: true });
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
      challenge_id: this.state.questionId
    };
    let questionId = this.state.questionId;
    axios
      .post("http://localhost:5000/api/challenges", submission)
      .then(response => {
        this.props.history.push(`/results`, { timeTaken, questionId });
      })
      .catch(error => console.log(error));
  }
  render() {
    if (!this.state.question) {
      this.loadData();
    }
    let codeMirror = <Spinner />;
    let testCases = [];
    if (this.state.question !== null) {
      codeMirror = (
        <CodeMirror
          className="col-md-7 my-5"
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
      <Container>
        <Row>
          <Col md="8">
            <Tabs defaultActiveKey="instructions" id="uncontrolled-tab-example">
              <Tab eventKey="instructions" title="Instructions">
                <Suspense fallback={<Spinner />}>
                  <ChallengeInstructions questionId={this.state.questionId} />
                </Suspense>
              </Tab>
              <Tab eventKey="code" title="Code">
                {codeMirror}
                <button
                  onClick={this.scriptEvaluator}
                  class="btn btn-outline-success"
                >
                  Run
                </button>
                {testCases}
                {submitButton}
              </Tab>
              <Tab eventKey="resources" title="Resources">
                <Suspense fallback={<Spinner />}>
                  <ChallengeResources questionId={this.state.questionId} />
                </Suspense>
              </Tab>
              <Tab eventKey="leaderboard" title="Leaderboard">
                <Suspense fallback={<Spinner />}>
                  <ChallengeLeaderboard questionId={this.state.questionId} />
                </Suspense>
              </Tab>
            </Tabs>
          </Col>

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
)(withRouter(ChallengeView));
