import React from "react";
import axios from "axios";
import QuizQuestion from "../../../components/QuizModule/QuizQuestion/QuizQuestion";

class Quiz extends React.Component {
  state = {
    questions: null,
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
      this.state.questions[this.state.nextQuestion].correctAnswer
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
    let loadedQuestion = <p>Loading Questions</p>;
    if (this.state.questions !== null) {
      loadedQuestion = this.state.questions[0];
    }
    return (
      <div className="container">
        <QuizQuestion question={loadedQuestion} answers={ [
        {
            "id": 1,
            "answer": "Answer 1",
            "quiz_id": 1
        },
        {
            "id": 2,
            "answer": "Answer 2",
            "quiz_id": 1
        },
        {
            "id": 3,
            "answer": "Answer 3",
            "quiz_id": 1
        },
        {
            "id": 4,
            "answer": "Answer 4",
            "quiz_id": 1
        }
    ]} />
      </div>
    );
  }
}

export default Quiz;
