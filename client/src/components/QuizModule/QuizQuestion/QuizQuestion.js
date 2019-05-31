import React from "react";
import "./QuizQuestion.css";
import axios from "axios";
import Countdown from "../Countdown/CountDownTimer";
import QuizResult from "../QuizResult/QuizResult";
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
      approxQuestion: 5,
      completed: false
    };
  }
  setTimeLimit = () => {
    this.setState({
      timeLimit: this.state.questions[this.state.nextQuestion].timeLimit
    });
  };
  clickHandler = async e => {
    console.log(
      `Correct Answer ${this.state.correctAnswer} You clicked ${e.target.id}`
    );

    this.setState({ count: this.state.count + 1 });
    this.setState({ approxQuestion: this.state.approxQuestion - 1 });
    console.log(this.state.approxQuestion);
    if (this.state.approxQuestion > 1) {
      this.refs.child.resetTime();
    }

    let score = this.state.score;
    let nextQuestion = this.state.nextQuestion;

    if (e.target.id == this.state.correctAnswer) {
      score += 5;
    }

    nextQuestion++;

    await this.setState({ score: score, nextQuestion: nextQuestion }, () => {
      this.loadData();
      this.setTimeLimit();
    });
  };
  componentDidMount() {
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
  };

  render() {
    let answers = this.state.answers;
    let question = this.state.questions[this.state.nextQuestion].question;
    let answerList = [];
    console.log(this.state.answers);

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
    if (this.props.questions !== null && this.state.count <= 5) {
      display = (
        <div className="row my-5">
          <div className="col-sm-9">
            <div className="card text-muted py-2">
              <div className="card-header bg-light">
                <h5 className="card-title">
                  Skill Assessment : JavaScript{" "}
                  <small className="ml-5">
                    Approximately {this.state.approxQuestion} Questions
                    Remaining
                  </small>
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
      quizResult = <QuizResult />;
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
