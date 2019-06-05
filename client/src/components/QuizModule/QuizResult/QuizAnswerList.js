import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
var answers = [];
var quizIds = [];
var questions = [];
var questionListWithID = [];
class QuizAnswerList extends React.Component {
  loadingQuestions() {
    var test = questions.map(question => {
      quizIds.map(function(qID) {
        if (question.id == qID) {
          questionListWithID[question.id] = question.question;
        }
      });
    });
  }
  render() {
    console.log("Correct ANswer Array: ", this.props.correctAnswerIdArray);
    console.log("Selected AnswerArray: ", this.props.selectedAnswerIdArray);
    answers = this.props.answers;
    quizIds = this.props.quizIdArray;
    questions = this.props.questions;
    this.loadingQuestions();

    var answersList = quizIds.map(function(quizId) {
      var questionList = (
        <div>
          <ListGroup.Item as="li" />
          <ListGroup.Item as="li" variant="warning">
            {questionListWithID[quizId]}
          </ListGroup.Item>
        </div>
      );
      var answerOfSingleQuestion = answers[quizId].map(function(answer) {
        return <ListGroup.Item as="li"> {answer} </ListGroup.Item>;
      });
      return [questionList, answerOfSingleQuestion];
    });

    return <ListGroup as="ul">{answersList}</ListGroup>;
  }
}

export default QuizAnswerList;
