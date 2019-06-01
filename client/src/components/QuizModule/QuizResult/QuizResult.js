import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import StopWatch from "../Countdown/StopWatch";
class QuizResult extends React.Component {
  render() {
    let counts = 0;
    let correctPercentage = 0;
    let wrongPercentage = 0;
    let selectedAnswerArray = this.props.selectedAnswerIdArray;
    let correctAnswerArray = this.props.correctAnswerIdArray;
    for (let i = 0; i < selectedAnswerArray.length; i++) {
      if (selectedAnswerArray[i] == correctAnswerArray[i]) {
        counts++;
        console.log("correct" + selectedAnswerArray[i]);
      }
    }
    correctPercentage = Math.floor((counts / 5) * 100);
    wrongPercentage = 100 - correctPercentage;
    let correctPercentageLabel = correctPercentage + "%";
    let wrongPercentageLabel = wrongPercentage + "%";
    // this.setState({ count: counts });
    let correctAnswer = (
      <div>
        <h1 align="center">Congratulations You got {counts} answer correct</h1>
        <ProgressBar>
          <ProgressBar
            animated
            striped
            variant="success"
            label={correctPercentageLabel}
            now={correctPercentage}
            key={1}
          />
          <ProgressBar
            animated
            striped
            variant="danger"
            label={wrongPercentageLabel}
            now={wrongPercentage}
            key={2}
          />
        </ProgressBar>
        <div align="center">
          <h2>You got {counts} answer correct out of 5.</h2>
          <h2>Time taken: 12 second</h2>
          <Button>View Result</Button>
        </div>
      </div>
    );
    return <div>{correctAnswer}</div>;
  }
}
export default QuizResult;
