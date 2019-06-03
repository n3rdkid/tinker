import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
class QuizAnswerList extends React.Component {
  render() {
    var answers = this.props.answers;
    var quizIds = this.props.quizIdArray;
    var answersList = quizIds.map(function(quizId) {
      var question = (
        <ListGroup.Item as="li" variant="warning">
          Question no.
        </ListGroup.Item>
      );
      var answerOfSingleQuestion = answers[quizId].map(function(answer) {
        return <ListGroup.Item as="li"> {answer} </ListGroup.Item>;
      });
      return [question, answerOfSingleQuestion];
    });

    // var names = ["Jake", "Jon", "Thruster"];
    // var namesList = names.map(function(name) {
    //   return <li>{name}</li>;
    // });

    return <ListGroup as="ul">{answersList}</ListGroup>;
  }
}

export default QuizAnswerList;
