import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
var answers = [];
var quizIds = [];
var questions = [];
var questionListWithID = [];
var selectedAnswerArray = [];
var correctAnswerArray = [];
var answersID = [];
class QuizAnswerList extends React.Component {
  componentDidMount() {}
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
    let li;
    selectedAnswerArray = this.props.selectedAnswerArray;
    correctAnswerArray = this.props.correctAnswerArray;
    answersID = this.props.answersID;
    console.log("Correct ANswer Array:" + selectedAnswerArray);
    console.log("Selected AnswerArray:" + correctAnswerArray);
    answers = this.props.answers;
    quizIds = this.props.quizIdArray;
    questions = this.props.questions;
    this.loadingQuestions();
    console.log(this.props.answersID);
    console.log(answers);
    var answersList = quizIds.map(function(quizId, index) {
      var questionList = (
        <div>
          <ListGroup.Item as="li" />
          <ListGroup.Item as="li" variant="warning">
            {questionListWithID[quizId]}
          </ListGroup.Item>
        </div>
      );
      console.log(
        index +
          "::" +
          selectedAnswerArray[index] +
          ":" +
          correctAnswerArray[index]
      );

      var answerOfSingleQuestion = answers[quizId].map(function(
        answer,
        indexAnswer
      ) {
        var li = "";
        var indexOfCorrectAnswer = 0;
        var indexOfSelectedAnswer = 0;
        answersID[quizId].map(ans => {
          if (ans == selectedAnswerArray[index]) {
            indexOfSelectedAnswer = answersID[quizId].indexOf(ans);
          }
        });
        answersID[quizId].map(ans => {
          if (ans == correctAnswerArray[index]) {
            indexOfCorrectAnswer = answersID[quizId].indexOf(ans);
          }
        });
        if (indexAnswer == indexOfCorrectAnswer) {
          li = (
            <ListGroup.Item as="li" variant="success">
              {answer}
            </ListGroup.Item>
          );
        } else if (indexAnswer == indexOfSelectedAnswer) {
          li = (
            <ListGroup.Item as="li" variant="danger">
              {answer}
            </ListGroup.Item>
          );
        } else li = <ListGroup.Item as="li">{answer}</ListGroup.Item>;
        return li;
      });
      return [questionList, answerOfSingleQuestion];
    });

    return <ListGroup as="ul">{answersList}</ListGroup>;
  }
}

export default QuizAnswerList;
