import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import QuizAnswerList from "./QuizAnswerList";
let correctAnswerArray = [];
let selectedAnswerArray = [];
let answerssArray = [];
let answersID = {};
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
    // console.log([this.state.questions]);
    answerssArray = this.props.answersArray;
    let newAnswersArray = {};

    let quiz_id = [];

    console.log([answerssArray]);
    answerssArray.map(ans => {
      ans.question.map(que => {
        if (!newAnswersArray[que.quiz_id]) {
          newAnswersArray[que.quiz_id] = [que.answer];
          answersID[que.quiz_id] = [que.id];
          quiz_id.push(que.quiz_id);
        } else {
          newAnswersArray[que.quiz_id].push(que.answer);
          answersID[que.quiz_id].push(que.id);
          quiz_id.push(que.quiz_id);
        }
      });
    });

    //  console.log([newAnswersArray]);

    let reducedQuiz_id = [...new Set(quiz_id)];
    this.setState({ quizIdArray: reducedQuiz_id });
    this.setState({ answers: newAnswersArray });
  }

  calculatePercentage() {
    let counts = 0;
    selectedAnswerArray = this.props.selectedAnswerIdArray;
    correctAnswerArray = this.props.correctAnswerIdArray;

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
          selectedAnswerArray={this.props.selectedAnswerIdArray}
          correctAnswerArray={this.props.correctAnswerIdArray}
          quizIdArray={this.state.quizIdArray}
          answers={this.state.answers}
          questions={this.state.questions}
          answersID={answersID}
        />
      </div>
    );
  }
}
export default QuizResult;
