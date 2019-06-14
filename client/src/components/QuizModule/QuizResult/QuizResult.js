import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import QuizAnswerList from "./QuizAnswerList";
import { Icon } from "semantic-ui-react";
let correctAnswerArray = [];
let selectedAnswerArray = [];
let answerssArray = [];
let answersID = {};
let score = 0;

class QuizResult extends React.Component {
  state = {
    questions: this.props.loadedQuestions,
    answers: [],
    numOfCorrectAnswer: 0,
    correctPercentage: 0,
    quizIdArray: [],
    clicked: false
  };

  componentDidMount() {
    this.loadAnswers();
    this.calculatePercentage();
    this.calculateScore();
  }
  handleClick() {
    this.setState({
      clicked: true
    });
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

    console.log([newAnswersArray]);

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
    let calcCorrectPercentage = Math.floor((counts / 10) * 100);
    this.setState({ correctPercentage: calcCorrectPercentage });
  }
  calculateScore() {
    for (let i = 0; i < selectedAnswerArray.length; i++) {
      if (selectedAnswerArray[i] == correctAnswerArray[i]) {
        score += 5;
      }
    }
  }

  updateDB() {
    console.log("Component will called");
  }
  componentWillMount() {
    this.updateDB();
  }

  render() {
    let correctAnswer = (
      <div>
        <h1 align="center">
          {/* <Icon name="thumbs up" /> */}
         You took {this.props.stoppedMinute}:{this.props.stoppedSecond} to 
        complete the quiz with {this.state.correctPercentage}% Accuracy.
                <br/> 
          Your Total Score: {score}
        </h1>
        {/* <ProgressBar>
          <ProgressBar

            variant="success"
            label={`${this.state.correctPercentage}%`}
            now={this.state.correctPercentage}
            key={1}
          />
          <ProgressBar
            variant="danger"
            label={`${100 - this.state.correctPercentage}%`}
            now={`${100 - this.state.correctPercentage}`}
            key={2}
          />
        </ProgressBar> */}
        <div align="center">
          {/* <h2>
            You got {this.state.numOfCorrectAnswer} answer correct out of{" "}
            {correctAnswerArray.length}.
          </h2>
        */}
          <Button
            variant="success"
            size="lg"
            block
            onClick={this.handleClick.bind(this)}
          >
            Check Answers
          </Button>
          {this.state.clicked ? (
            <QuizAnswerList
              selectedAnswerArray={this.props.selectedAnswerIdArray}
              correctAnswerArray={this.props.correctAnswerIdArray}
              quizIdArray={this.state.quizIdArray}
              answers={this.state.answers}
              questions={this.state.questions}
              answersID={answersID}
            />
          ) : null}
        </div>
      </div>
    );
    return <div>{correctAnswer}</div>;
  }
}
export default QuizResult;
