import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./QuestionAnswerList.css";
import { Divider, Icon, Header, Label } from "semantic-ui-react";
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
    questions.map(question => {
      quizIds.map(function(qID) {
        if (question.id === qID) {
          questionListWithID[question.id] = question.question;
        }
      });
    });
  }
  render() {
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
        <div class="quiz-result-container">
          <Divider horizontal>
            <Header as="h4" />
            <Header as="h4" />
            <Header as="h4" />
            <Header as="h4" />
          </Divider>
          <ListGroup.Item className="question" as="li">
            <Label size="big" color="blue">
              <Icon name="help" />
              {index + 1}. {questionListWithID[quizId]}
            </Label>
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
              <Icon name="checkmark" />
              {answer}
            </ListGroup.Item>
          );
        } else if (indexAnswer == indexOfSelectedAnswer) {
          li = (
            <ListGroup.Item as="li" variant="danger">
              <Icon name="cancel" />
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
