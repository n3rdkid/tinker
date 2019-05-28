import React from "react";
import "./QuizQuestion.css";
import axios from "axios";
import Countdown from "../Countdown/CountDownTimer";
class QuizQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions,
      answers: null,
      correctAnswer: 0,
      score: 0,
      nextQuestion: 0,
      timeLimit: 0
    };
  }

  setTimeLimit = () => {
    console.log(this.state.questions);
    this.setState({
      timeLimit: this.state.questions[this.state.nextQuestion].timeLimit
    });
    console.log(this.state.timeLimit);
  };
  clickHandler = async e => {
    this.refs.child.resetTime();
    let score = this.state.score;
    let nextQuestion = this.state.nextQuestion;
    if (e.target.id == this.state.correctAnswer) {
      score += 5;
    }

    nextQuestion++;
    await this.setState({ score: score, nextQuestion: nextQuestion });
    this.loadData();
    this.setTimeLimit();
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
  loadData() {
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

  render() {
    let timeLimits = this.state.questions[this.state.nextQuestion].timeLimit;
    let answers = this.state.answers;
    let question = this.state.questions[this.state.nextQuestion].question;
    let answerList = [];

    if (answers !== null) {
      for (let i = 0; i < answers.length; i++) {
        answerList.push(
          <li
            id={i + 1}
            key={answers[i].id}
            onClick={this.clickHandler}
            className="list-group-item my-1 p-3"
          >
            {answers[i].answer}
          </li>
        );
      }
    }
    let display = <p>Add a spinner</p>;
    if (this.props.questions !== null) {
      display = (
        <div className="row my-5">
          <div className="col-sm-9">
            <div className="card text-muted py-2">
              <div className="card-header bg-light">
                <h5 className="card-title">
                  Skill Assessment : JavaScript{" "}
                  <small className="ml-5">
                    Approximately 10 Questions Remaining
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
            <h2 className="text-center py-3 text-danger">
              {console.log(
                `Your next qeuestion is ${
                  this.state.nextQuestion
                } Time limit :${this.state.timeLimit}`
              )}
              <Countdown
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
    }

    return <>{display}</>;
  }
}
export default QuizQuestion;
