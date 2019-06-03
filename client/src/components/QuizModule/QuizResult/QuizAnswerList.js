import React from "react";
class QuizAnswerList extends React.Component {
  render() {
    var answers = this.props.answers;
    var quizIds = this.props.quizIdArray;
    var answersList = quizIds.map(function(quizId) {
      return answers[quizId].map(function(answer) {
        return <li> {answer} </li>;
      });
    });

    // var names = ["Jake", "Jon", "Thruster"];
    // var namesList = names.map(function(name) {
    //   return <li>{name}</li>;
    // });

    return (
      <div>
        <ul>{answersList}</ul>
      </div>
    );
  }
}

export default QuizAnswerList;
