import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import QuizAnswerList from "./QuizAnswerList";

class QuizResult extends React.Component {
  state = {
    questions: this.props.loadedQuestions,
    answers: [],
    numOfCorrectAnswer: 0,
    correctPercentage: 0,
    quizIdArray: []
  };

  componentDidMount() {
    this.loadAnswers();
    this.calculatePercentage();
  }

  loadAnswers() {
    let newAnswersArray = {};
    let quiz_id = [];
    this.props.answersArray.forEach(ans => {
      ans.question.forEach(que => {
        if (!newAnswersArray[que.quiz_id]) {
          newAnswersArray[que.quiz_id] = [que.answer];
          quiz_id.push(que.quiz_id);
        } else {
          newAnswersArray[que.quiz_id].push(que.answer);
          quiz_id.push(que.quiz_id);
        }
      });
    });
    let reducedQuiz_id = [...new Set(quiz_id)];
    this.setState({ quizIdArray: reducedQuiz_id });
    this.setState({ answers: newAnswersArray });
  }

  calculatePercentage() {
    let counts = 0;
    let selectedAnswerArray = this.props.selectedAnswerIdArray;
    let correctAnswerArray = this.props.correctAnswerIdArray;
    for (let i = 0; i < selectedAnswerArray.length; i++) {
      if (selectedAnswerArray[i] == correctAnswerArray[i]) {
        counts++;
      }
    }
    this.setState({ numOfCorrectAnswer: counts });
    let calcCorrectPercentage = Math.floor((counts / 5) * 100);
    this.setState({ correctPercentage: calcCorrectPercentage });
  }

  render() {
    let correctAnswer = (
      <div>
        <h1 align="center">
          Congratulations You got {this.state.numOfCorrectAnswer} answer correct
        </h1>
        <ProgressBar>
          <ProgressBar
            animated
            striped
            variant="success"
            label={`${this.state.correctPercentage}%`}
            now={this.state.correctPercentage}
            key={1}
          />
          <ProgressBar
            animated
            striped
            variant="danger"
            label={`${100 - this.state.correctPercentage}%`}
            now={`${100 - this.state.correctPercentage}`}
            key={2}
          />
        </ProgressBar>
        <div align="center">
          <h2>
            You got {this.state.numOfCorrectAnswer} answer correct out of 5.
          </h2>
          <h2>
            Time taken: {this.props.stoppedMinute}:{this.props.stoppedSecond}
          </h2>

          <Button variant="success" size="lg" block>
            Check Answers
          </Button>
        </div>
      </div>
    );
    return (
      <div>
        {correctAnswer}

        <QuizAnswerList
          quizIdArray={this.state.quizIdArray}
          answers={this.state.answers}
          questions={this.state.questions}
        />
      </div>
    );
  }
}
export default QuizResult;
