import React from "react";
import "./QuizQuestion.css";
import axios from "axios";
import Countdown from "../Countdown/CountDownTimer";
import QuizResult from "../QuizResult/QuizResult";
import StopWatch from "../Countdown/StopWatch";
let arrayResults = [];
let stoppedMinute, stoppedSecond;
let questionLength = 10;
class QuizQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions,
      answers: null,
      correctAnswer: 0,
      score: 0,
      nextQuestion: 0,
      timeLimit: 0,
      count: 1,
      approxQuestion: questionLength,
      completed: false,
      selectedAnswerIdArray: [],
      correctAnswerIdArray: [],
      start: 0,
      loadedQuestions: []
    };
  }
  setTimeLimit = () => {
    this.setState({
      timeLimit: this.state.questions[this.state.nextQuestion].timeLimit
    });
  };

  clickHandler = async e => {
    //console.log(`Loaded question is ${this.state.questions}`);

    this.setState({
      selectedAnswerIdArray: [...this.state.selectedAnswerIdArray, e.target.id]
    });

    this.setState({
      correctAnswerIdArray: [
        ...this.state.correctAnswerIdArray,
        this.state.correctAnswer
      ]
    });
    this.setState({ count: this.state.count + 1 });
    this.setState({ approxQuestion: this.state.approxQuestion - 1 });
    if (this.state.approxQuestion > 1) {
      this.refs.child.resetTime();
    }

    let score = this.state.score;
    let nextQuestion = this.state.nextQuestion;

    // if (e.target.id == this.state.correctAnswer) {
    //   score += 5;
    // }

    nextQuestion++;

    await this.setState({ score: score, nextQuestion: nextQuestion }, () => {
      this.loadData();
      this.setTimeLimit();
    });
  };
  componentDidMount() {
    arrayResults = [];
    axios
      .post(
        `http://localhost:5000/api/quiz/${
          this.state.questions[this.state.nextQuestion].id
        }}`
      )
      .then(response => {
        this.setState({
          answers: response.data.answers,
          correctAnswer: response.data.correctAnswer
        });
      })
      .catch(error => console.log(error));
  }
  loadData = () => {
    if (this.state.questions.length <= this.state.nextQuestion) {
      this.setState({ completed: true });
      return;
    }
    axios
      .post(
        `http://localhost:5000/api/quiz/${
          this.state.questions[this.state.nextQuestion].id
        }}`
      )
      .then(response => {
        this.setState({
          answers: response.data.answers,
          correctAnswer: response.data.correctAnswer
        });
      })
      .catch(error => console.log(error));
    arrayResults.push({ question: this.state.answers });
    this.setState({
      loadedQuestions: [
        ...this.state.loadedQuestions,
        this.state.questions[this.state.nextQuestion].question
      ]
    });
    // console.log(this.state.loadedQuestions);
  };
  displayStopWatchTimer = (stoppedMinute, stoppedSecond) => {
    console.log(stoppedMinute + ":" + stoppedSecond);

    this.stoppedMinute = stoppedMinute;
    this.stoppedSecond = stoppedSecond;
  };
  render() {
    let answers = this.state.answers;
    let question = this.state.questions[this.state.nextQuestion].question;

    let answerList = [];

    if (answers !== null) {
      for (let i = 0; i < answers.length; i++) {
        answerList.push(
          <li
            id={answers[i].id}
            key={answers[i].id}
            onClick={this.clickHandler}
            className="list-group-item my-1 p-3"
          >
            {answers[i].answer}
          </li>
        );
      }
    }

    let display;
    let quizResult = <p />;
    if (this.props.questions !== null && this.state.count <= questionLength) {
      display = (
        <div className="row my-5">
          <div className="col-sm-9">
            <div className="card text-muted py-2">
              <div className="card-header bg-light">
                <h5 className="card-title">
                  Skill Assessment : JavaScript{" "}
                  <span className="ml-5">
                    {this.state.approxQuestion} Questions
                    Remaining
                  </span>
                  <StopWatch
                    start={this.state.start}
                    displayStopWatchTimer={this.displayStopWatchTimer}
                  />
                </h5>
              </div>
              <div className="card-body">
                <h2 className="text-dark" />
                <p className="bg-light py-2">{question}</p>

                <div className="answers">
                  <ul className="list-group">{answerList} </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <h2 id="quizTimer" className="text-center py-3 text-success">
              <Countdown
                stopCount={this.state.count}
                ref="child"
                timeLimit={
                  this.state.questions[this.state.nextQuestion].timeLimit
                }
                nextQuestion={this.clickHandler}
              />
            </h2>
          </div>
        </div>
      );
    } else {
      this.state.timeLimit = 50000;
      this.state.start = 1;
      quizResult = (
        <QuizResult
          answersArray={arrayResults}
          loadedQuestions={this.state.questions}
          selectedAnswerIdArray={this.state.selectedAnswerIdArray}
          correctAnswerIdArray={this.state.correctAnswerIdArray}
          stoppedMinute={this.stoppedMinute}
          stoppedSecond={this.stoppedSecond}
        />
      );
    }

    return (
      <div>
        {display}
        {quizResult}
      </div>
    );
  }
}
export default QuizQuestion;
