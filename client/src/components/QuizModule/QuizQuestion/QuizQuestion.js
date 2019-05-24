import React from "react";
import "./QuizQuestion.css";
import axios from "axios";


class QuizQuestion extends React.Component{
 state={
   answers:null
  ,correctAnswer:0
  }
 componentDidMount()
 {
  axios
  .post(`http://localhost:5000/api/quiz/1`)
  .then(response => {
    this.setState({
      answers: response.data.answers,
      correctAnswer: response.data.correctAnswer
    });
  })
  .catch(error => console.log(error));
  }
  
 render(){
  return (<div></div>)
 }

}
export default QuizQuestion;
