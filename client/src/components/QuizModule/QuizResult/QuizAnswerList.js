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
    answers = this.props.answers;
    quizIds = this.props.quizIdArray;
    questions = this.props.questions;
    this.loadingQuestions();
    var answersList = quizIds.map(function(quizId, index) {
      var questionList = (
        <div class="quiz-result-container">
          {/* <Divider horizontal>
            <Header as="h4" />
            <Header as="h4" />
            <Header as="h4" />
            <Header as="h4" />
          </Divider> */}
          <ListGroup.Item style={{marginTop:"16px",textAlign:"left",background:"#eaf5ff"}} className="question" as="li">
            <Label style={{borderRadius:"6px 6px 0 9 ",color:"#4e4e4e",background:"transparent",textAlign:"left"}} size="big">
              {/* <Icon name="help" /> */}
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
            <ListGroup.Item style={{textAlign:"left",paddingLeft:"30px"}} as="li" variant="success">
              <div className="d-flex">
              {answer}
              <Icon className="ml-auto" name="checkmark" />
              </div>
            </ListGroup.Item>
          );
        } else if (indexAnswer == indexOfSelectedAnswer) {
          li = (
            <ListGroup.Item style={{textAlign:"left",paddingLeft:"30px"}} as="li" variant="danger">
            <div className="d-flex">
              {answer}
              <Icon className="ml-auto"  name="cancel" />
              </div>
            </ListGroup.Item>
          );
        } else li = <ListGroup.Item style={{textAlign:"left",paddingLeft:"30px"}} as="li">{answer}</ListGroup.Item>;
        return li;
      });
      return [questionList, answerOfSingleQuestion];
    });

    return <ListGroup as="ul">{answersList}</ListGroup>;
  }
}

export default QuizAnswerList;
