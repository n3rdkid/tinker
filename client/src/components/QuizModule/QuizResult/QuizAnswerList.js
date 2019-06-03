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
    answers = this.props.answers;
    quizIds = this.props.quizIdArray;
    questions = this.props.questions;
    this.loadingQuestions();

    var answersList = quizIds.map(function(quizId) {
      var questionList = (
        <ListGroup.Item as="li" variant="warning">
          {questionListWithID[quizId]}
        </ListGroup.Item>
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
