import React from "react";
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion";
import CountDownTimer from "../../components/Countdown/CountDownTImer";
import axios from "axios";

class Quiz extends React.Component {
  state = {
    questions: [],
    score: 0,
    nextQuestion: 0
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/quiz/")
      .then(response => {
        this.setState({ questions: response.data.questions });
      })
      .catch(error => console.log(error));
  }
  clickHandler = e => {
    let score = this.state.score;
    let nextQuestion = this.state.nextQuestion;
    if (
      e.target.id ===
      this.state.questionList[this.state.nextQuestion].correctAnswer
    ) {
      e.target.classList.add("bg-success", "text-white");
      score += 5;
    } else {
      e.target.classList.add("bg-danger", "text-white");
    }
    nextQuestion++;
    setTimeout(() => {
      this.setState({ score: score, nextQuestion: nextQuestion });
    }, 1000);
  };
  render() {
    let quiz;
    if (this.state.nextQuestion < this.state.questionList.length) {
      quiz = (
        <QuizQuestion
          question={this.state.questions}
          clicked={this.clickHandler}
          question={this.state.questionList[this.state.nextQuestion]}
        />
      );
    } else {
      quiz = (
        <div
          className="container-fluid bg-primary align-items-center"
          style={{ height: "100vh", width: "100vw" }}
        >
          <h1 className="text-center">Thank You for Your Participation</h1>
        </div>
      );
    }
    return (
      <div>
        {" "}
        <CountDownTimer /> {quiz}
      </div>
    );
  }
}

export default Quiz;
