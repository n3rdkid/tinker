import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import axios from "axios";

class QuizResult extends React.Component {
  state = {
    questions: this.props.loadedQuestions,
    answers: []
  };

  componentDidMount() {
    /*for (let i = 0; i < 10; i++) {
      axios
        .post(`http://localhost:5000/api/quiz/${i}`)
        .then(response => {
          console.log(response.data);
          // this.setState({
          //   answers: response.data.answers,
          //   correctAnswer: response.data.correctAnswer
          // });
        })
        .catch(error => console.log(error));
    }*/
  }

  render() {
    let counts = 0;
    let correctPercentage = 0;
    let wrongPercentage = 0;
    let selectedAnswerArray = this.props.selectedAnswerIdArray;
    let correctAnswerArray = this.props.correctAnswerIdArray;
    for (let i = 0; i < selectedAnswerArray.length; i++) {
      if (selectedAnswerArray[i] == correctAnswerArray[i]) {
        counts++;
      }
    }
    console.log(this.props.answersArray[1]);
    this.props.answersArray.map(question => {
      console.log(question[0].answer);
    });
    //  console.log(this.state.answers);

    correctPercentage = Math.floor((counts / 5) * 100);
    wrongPercentage = 100 - correctPercentage;
    let correctPercentageLabel = correctPercentage + "%";
    let wrongPercentageLabel = wrongPercentage + "%";
    // this.setState({ count: counts });
    let questions = (
      <div className="row my-5">
        <div className="col-sm-9">
          <div className="card text-muted py-2">
            <div className="card-header bg-light">
              <h5 className="card-title">Correct answer of given question</h5>
            </div>
            <div className="card-body">
              <h2 className="text-dark" />
              <p className="bg-light py-2">this.props</p>
              <div className="answers">
                <ul className="list-group">
                  {/* {this.props.answersArray.question.map(answer => (console.log(answer))} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

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

          <Button variant="success" size="lg" block>
            Check Answers
          </Button>
        </div>
      </div>
    );
    return (
      <div>
        {correctAnswer}
        {questions}
      </div>
    );
  }
}
export default QuizResult;
