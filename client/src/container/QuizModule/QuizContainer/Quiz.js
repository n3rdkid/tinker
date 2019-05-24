import React from "react";
import axios from "axios";
import QuizQuestion from "../../../components/QuizModule/QuizQuestion/QuizQuestion";

class Quiz extends React.Component {
  state = {
    questions: null,
    score: 0,
    nextQuestion: 0,
    answers: null
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
    if(nextQuestion>=20)
    return;
    if (e.target.id == this.state.correctAnswer) {
      e.target.classList.add("bg-success", "text-white");
      score += 5;
      this.loadNextAnswers();
    } else {
      e.target.classList.add("bg-danger", "text-white");
    }
    nextQuestion++;
    setTimeout(() => {
      this.setState({ score: score, nextQuestion: nextQuestion });
    }, 1000);
    console.log("Re rending")
  };
  render() {
    let loadedQuestion = <p>Loading Questions</p>;
    let loadedAnswers = [];
    if (this.state.questions !== null && this.state.answers !== null) {
      loadedQuestion = this.state.questions[this.state.nextQuestion];
      loadedAnswers = this.state.answers;
    }
    return (
      <div className="container">
        <QuizQuestion
          clicked={this.clickHandler}
          question={loadedQuestion}
          answers={loadedAnswers}
        />
      </div>
    );
  }
}

export default Quiz;
